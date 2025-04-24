import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditorMenuBar from "./TextEditorMenuBar";
import Link from '@tiptap/extension-link'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'


type TextEditorProps = {
  onChange: (content: string) => void;
  initialContent?: string; // Add this line
};


export default function RichTextEditor({
  onChange,
  initialContent,
}: TextEditorProps) {

  const editor = useEditor({
    extensions: [StarterKit.configure({bulletList: false, orderedList: false, listItem: false, paragraph: {HTMLAttributes: {class: 'text-left'}}}), Underline, Link.configure({
      openOnClick: false,
    }), BulletList,
    OrderedList,
    ListItem,
    Document,
    Paragraph,
    Text,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    })],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "min-h-[150px] cursor-text rounded-md border p-5 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 "
      }
    },
    immediatelyRender: false
  })

  return (
    <div>
      <TextEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}