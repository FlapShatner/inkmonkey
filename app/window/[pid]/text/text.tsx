import { ProductVariant } from '@/lib/shopify/types'
import { useOnClickOutside } from 'usehooks-ts'
import React, { useState, useRef } from 'react'
import { cn } from '@/app/utils/cn'
import TextForm from './text-form'
import { Check } from '@/app/icons/check'
import { InfoIcon } from '@/app/icons/info'
import { Tooltip } from 'react-tooltip'

type TextProps = {
 variant: ProductVariant
 isSelected: boolean
 setSelectedVariant: (variant: ProductVariant) => void
}

function Text({ variant, isSelected, setSelectedVariant }: TextProps) {
 const ref = useRef<HTMLDivElement>(null)
 const [open, setOpen] = useState(false)
 const handleSelect = () => {
  setSelectedVariant(variant)
  setOpen(!open)
 }
 useOnClickOutside(ref, () => setOpen(false))
 return (
  <div
   ref={ref}
   className={cn('flex flex-col border-2 border-accent-tr rounded-md px-2 py-1 bg-bg-secondary cursor-pointer', isSelected && 'bg-bg-tertiary border-accent')}>
   <div
    onClick={handleSelect}
    className={cn('flex justify-between items-center hover:border-accent')}>
    <div className='flex gap-2'>
     <Check className={cn('w-6 h-6 text-accent opacity-20 hover:text-accent-bright', isSelected && 'opacity-100')} />
     {variant.title}
    </div>
    <InfoIcon
     id='text-info'
     className={cn('cursor-pointer w-6 h-6 text-accent hover:text-accent-bright')}
    />
    <Tooltip
     anchorSelect='#text-info'
     opacity={1}
     className='w-max'
     style={{ backgroundColor: 'white', color: '#1A1A1A' }}
     place='top-end'>
     <>
      <span className='font-bold text-xl'>{variant.title}</span>
      <p className='font-semibold text-lg'>
       Add custom text to the design <br /> (like your name or a slogan)
      </p>
     </>
    </Tooltip>
   </div>
   {open && <TextForm />}
  </div>
 )
}

export default Text
