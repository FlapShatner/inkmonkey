import React from 'react'
import { cn } from '../utils/cn'

function SortIcon({ className = '' }: { className?: string }) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='24'
   height='24'
   viewBox='0 0 24 24'
   fill='none'
   stroke='currentColor'
   strokeWidth='2'
   strokeLinecap='round'
   strokeLinejoin='round'
   className={cn('ml-2 h-4 w-4 shrink-0 opacity-50', className)}>
   <path d='m7 15 5 5 5-5'></path>
   <path d='m7 9 5-5 5 5'></path>
  </svg>
 )
}

export default SortIcon
