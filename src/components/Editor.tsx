// components/Editor.tsx
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link';

export default function Editor({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 border border-gray-300 rounded-md min-h-[500px] bg-white',
      },
    },
  })

  if (!editor) return null

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">Italic</button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className="btn">Strike</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">H2</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">Bullet List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn">Numbered List</button>
        <button
          onClick={() => {
            const url = window.prompt('Enter the URL')
            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
            }
          }}
          className="btn"
        >
          Link
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}
