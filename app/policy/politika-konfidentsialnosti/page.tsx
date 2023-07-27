import PrivacyPolicy from '@/components/Policy/PrivacyPolicy'
import { Post } from '@/models/post'
import { PostServices } from '@/services/get.post'
import React from 'react'

export default async function Politics() {
  const data: Post[] = await PostServices.singlePost(7)
  return (
    <div>
      <PrivacyPolicy data={data} />
    </div>
  )
}
