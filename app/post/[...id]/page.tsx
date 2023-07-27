import React from 'react'
import { Post } from '@/models/post'
import PostComponent from '@/components/Post/Post'
import { PostServices } from '@/services/get.post'

export default async function PostPage({ params }: { params: { id: string } }) {
  const data: Post[] = await PostServices.singlePost(Number(params.id))

  return (
    <>
      <PostComponent data={data} />
    </>
  )
}
