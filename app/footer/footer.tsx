import React from 'react'
import Image from 'next/image'
import { links } from '@/app/content/footer-links'
import { cn } from '@/utils/cn'
import { smooch } from '@/lib/fonts'
import Link from 'next/link'
import PayMethods from './pay-methods'

function Footer() {
 const year = new Date().getFullYear()
 return (
  <div className='w-full bg-bg-secondary border-t-2 p-2  border-accent-tr'>
   <PayMethods />
   <div className='w-full justify-between flex gap-2 py-2  pl-4'>
    <div className='flex gap-12'>
     <div className=' w-max items-center relative hidden md:flex'>
      <Image
       src='/logo/logo-footer.webp'
       alt='inkmonkey logo'
       width={100}
       height={100}
      />
     </div>
     <div className='grid grid-cols-2'>
      <div>
       <h3 className=''>{links.resources.label}</h3>
       <ul className=' text-txt-secondary'>
        {links.resources.links.map((link) => (
         <li key={link.label}>
          <Link
           className='text-accent hover:text-accent-bright text-sm'
           href={link.href}>
           {link.label}
          </Link>
         </li>
        ))}
       </ul>
      </div>
      <div>
       <h3 className=''>{links.products.label}</h3>
       <ul className=' text-txt-secondary'>
        {links.products.links.map((link) => (
         <li key={link.label}>
          <Link
           className='text-accent text-sm hover:text-accent-bright'
           href={link.href}>
           {link.label}
          </Link>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </div>
   <p className='text-sm text-txt-secondary text-end'>Copyright © {year} Ink Monkey LLC</p>
  </div>
 )
}

export default Footer
