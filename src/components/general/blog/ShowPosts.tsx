'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog')
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <p className="text-center mt-8">Loading posts...</p>

  if (!posts.length) return <p className="text-center mt-8">No posts found.</p>

  return (
    <div className="grid gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/admin/expert_tips/${post.id}`}
          className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-shadow duration-200"
        >
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              width={500}
              height={192}
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 hover:underline text-primary">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              Category: {post.category.name}
            </p>
            <p className="text-gray-700 text-sm line-clamp-4">{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
