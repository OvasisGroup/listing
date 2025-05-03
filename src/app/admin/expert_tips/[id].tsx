'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

type Post = {
  id: string
  title: string
  content: string
  image?: string
  category: {
    id: string
    name: string
  }
  createdAt: string
}

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${id}`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPost(data.post)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) return <p className="text-center mt-8">Loading post...</p>
  if (error || !post) return <p className="text-center mt-8">Post not found.</p>

  return (
    <div className="max-w-3xl mx-auto p-6">
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        Category: {post.category.name} • {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="text-lg text-gray-800 whitespace-pre-line mt-4">
        {post.content}
      </div>
    </div>
  )
}
