'use client'

import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiListOrdered2,
} from 'react-icons/ri'
import {
  AiOutlineLink,
  AiOutlineRedo,
  AiOutlineUndo,
} from 'react-icons/ai'
import { BsTypeUnderline } from 'react-icons/bs'
import { IoListOutline } from 'react-icons/io5'
import { Editor } from '@tiptap/react'
import React from 'react'

const Button = ({
  onClick,
  isActive,
  disabled,
  children,
}: {
  onClick: () => void
  isActive: boolean
  disabled?: boolean
  children: React.ReactNode
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-md ${
      isActive ? 'bg-violet-500 text-white' : 'hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
)

export default function TextEditorMenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  const buttons = [
    {
      icon: <RiBold className="size-5" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      icon: <BsTypeUnderline className="size-5" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive('underline'),
    },
    {
      icon: <RiItalic className="size-5" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
    },
    {
      icon: <RiStrikethrough className="size-5" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
    },
    {
      icon: <RiCodeSSlashLine className="size-5" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
      disabled: !editor.can().chain().focus().toggleCode().run(),
    },
    {
      icon: <IoListOutline className="size-5" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      icon: <RiListOrdered2 className="size-5" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
    },
    {
      icon: <AiOutlineUndo className="size-5" />,
      onClick: () => editor.chain().focus().undo().run(),
      isActive: false,
      disabled: !editor.can().chain().focus().undo().run(),
    },
    {
      icon: <AiOutlineRedo className="size-5" />,
      onClick: () => editor.chain().focus().redo().run(),
      isActive: false,
      disabled: !editor.can().chain().focus().redo().run(),
    },
    {
      icon: <AiOutlineLink className="size-5" />,
      onClick: () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('Enter URL', previousUrl || 'https://')

        if (url === null) return

        if (url === '') {
          editor.chain().focus().extendMarkRange('link').unsetLink().run()
        } else {
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }
      },
      isActive: editor.isActive('link'),
    },
  ]

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {buttons.map(({ icon, onClick, isActive, disabled }, index) => (
        <Button key={index} onClick={onClick} isActive={isActive} disabled={disabled}>
          {icon}
        </Button>
      ))}
    </div>
  )
}
