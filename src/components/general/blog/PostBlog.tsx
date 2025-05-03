'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState, useEffect } from 'react'

interface Category {
  id: number
  name: string
}

export default function CreatePostPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    // Fetch categories from an API
    fetch('/api/blog/categories')
      .then(res => res.json())
      .then(data => {
        console.log('Categories:', data)  // Log to verify the structure
        // Ensure we handle unexpected structures
        if (Array.isArray(data)) {
          setCategories(data)
        } else {
          console.error('Expected an array but received:', data)
          setCategories([])
        }
      })
      .catch(err => {
        console.error('Failed to load categories', err)
        setCategories([]) // Fallback to empty array on error
      })
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size > 2 * 1024 * 1024) { // 2MB limit
      alert('Image size should be less than 2MB')
      return
    }
    setImage(file || null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('categoryId', categoryId)
    if (image) formData.append('image', image)

    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const errorData = await res.json()
        setError(errorData.message || 'Something went wrong')
        console.error(errorData)
      } else {
        const data = await res.json()
        console.log('Post created:', data)
        setTitle('')
        setContent('')
        setCategoryId('')
        setImage(null)
      }
    } catch (err) {
      setError('Failed to submit. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-xl mx-auto">
      {error && <p className="text-red-500">{error}</p>}

      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2"
        required
      />

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full border p-2"
        required
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full border p-2"
        required
      >
        <option value="">Select a category</option>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))
        ) : (
          <option disabled>No categories available</option>
        )}
      </select>

      <Input
        type="file"
        onChange={handleImageChange}
        className="w-full border p-2"
        accept="image/*"
      />

      <Button
        type="submit"
        className="bg-primary hover:bg-green-800 text-white px-4 py-2 rounded w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Post'}
      </Button>
    </form>
  )
}
