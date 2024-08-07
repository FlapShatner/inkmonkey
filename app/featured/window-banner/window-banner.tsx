import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { cn } from '@/utils/cn'
import { smooch } from '@/lib/fonts'
import { collections } from '@/app/content/featured-collections'
import BannerContent from './banner-content'

async function WindowBanner() {
 const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
  handle: collections.window1[0],
  sortKey: 'CREATED',
  reverse: false,
  numProducts: 12,
  cursor: '',
  dir: 'next',
  productType: 'Truck Back Window Graphics',
 })
 return (
  <div className='w-full flex flex-col bg-window-banner bg-cover bg-center justify-center items-start sm:p-8 pt-6 pb-8 relative'>
   <BannerContent
    collectionInfo={collectionInfo}
    products={products}
   />
  </div>
 )
}

export default WindowBanner
