'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type TiptapProps = {
  content: string;
  onUpdate: (content: string) => void;
};

const Tiptap = ({ content, onUpdate }: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate({ editor }) {
      // Update the parent component with the new content
      onUpdate(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
