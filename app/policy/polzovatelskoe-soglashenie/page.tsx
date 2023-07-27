import PrivacyPolicy from '@/components/Policy/PrivacyPolicy'
import { UserAgreement } from '@/components/Policy/UserAgreement'
import { Post } from '@/models/post'
import { PostServices } from '@/services/get.post'
import React from 'react'

export default async function Politics() {
  const data: Post[] = await PostServices.singlePost(8)
  return (
    <div>
      <UserAgreement data={data} />
    </div>
  )
}
