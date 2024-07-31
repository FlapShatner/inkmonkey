import React from 'react'
import { cn } from '@/utils/cn'
import GridImage from './grid-image'

interface StackProps {
 isGrid: boolean
 imageArray: {
  id: number
  label: string
  image: {
   publicID: string
   gravity: string
   productId: string
  }
 }[]
}

function Stack({ imageArray, isGrid }: StackProps) {
 return (
  <div className={cn('w-full grid gap-2 px-2 grid-cols-1')}>
   {imageArray.map((img, i) => (
    <GridImage
     isGrid={isGrid}
     key={img.id}
     index={i}
     img={img}
    />
   ))}
  </div>
 )
}

export default Stack
