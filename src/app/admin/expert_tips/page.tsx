
import CreatePostPage from '@/components/general/blog/PostBlog'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import ShowPostsPage from '@/components/general/blog/ShowPosts'


export default function ExpertTipsPage() {

  return (
    <>
    <div className='flex flex-row items-center justify-between w-full'>
      <div>
        <p className='text-primary font-bold text-2xl'>ExpertTipsPage</p>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button className='bg-primary hover:bg-green-800 text-white'>Add Post</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <CreatePostPage />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
    <ShowPostsPage/>
    </>
  )
}
