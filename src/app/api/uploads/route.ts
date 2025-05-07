/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { IncomingMessage } from 'http';
import { Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import formidable from 'formidable';
import { prisma } from '../../../../prisma/prisma';


// 👇 helper: convert Web Request to Node stream
async function toNodeReadableStream(request: Request): Promise<IncomingMessage> {
  const readable = Readable.fromWeb(request.body as any) as any;

  // Fake IncomingMessage
  const req = Object.assign(readable, {
    headers: Object.fromEntries(request.headers),
    method: request.method,
    url: '',
  });

  return req;
}

export const POST = async (request: Request) => {
  const req = await toNodeReadableStream(request);

  const form = formidable({
    uploadDir: './public/uploads',
    keepExtensions: true,
    multiples: false,
  });

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return resolve(NextResponse.json({ error: 'File upload failed' }, { status: 500 }));
      }

      const file = files.image?.[0];
      const userId = fields.useId?.[0];

      if (!file || !userId) {
        return resolve(NextResponse.json({ error: 'Missing file or user ID' }, { status: 400 }));
      }

      const ext = path.extname(file.originalFilename || '.jpg');
      const uniqueFileName = `${uuidv4()}${ext}`;
      const newPath = path.join('./public/uploads', uniqueFileName);

      fs.renameSync(file.filepath, newPath);

      const imagePath = `/uploads/${uniqueFileName}`;

      await prisma.user.update({
        where: { id: userId },
        data: { image: imagePath },
      });

      return resolve(NextResponse.json({ image: imagePath }));
    });
  });
};
