import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DocumentationPage = () => {
  return (
    <main className='lg:p-28 md:p-20 p-5 mb-4'>
      <Link href={`/`} className="flex items-center gap-3 mb-6">
        <Image src="/arrow-left.svg" alt="arrow-left" width={20} height={20} />
        <span className="text-base text-[##545F7D] font-normal leading-[18.77px]">
          Back to Home
        </span>
      </Link>
      <h1 className='lg:text-7xl md:text-4xl text-2xl font-semibold'>Documentation</h1>
      <p className='text-lg text-gray-700'>This will be the documentation page</p>
    </main>
  )
}

export default DocumentationPage