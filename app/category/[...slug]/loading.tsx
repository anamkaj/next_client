'use client'
import { LazyLoad } from '@/components/LazyLoad/LazyLoad'
import React from 'react'

export default function loading() {
  return (
    <div className='mt-[20vh] mb-[40vh]'>
      <LazyLoad />
    </div>
  )
}
