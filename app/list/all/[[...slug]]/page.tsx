import { sortOptions } from '@/app/content/sortOptions'
import ProductGrid from '@/app/grid/product-grid'
import Arrow from '@/app/icons/arrow'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import React from 'react'
import PageBanner from '../../[...slug]/page-banner'
import PageBtn from '../../[...slug]/page-btn'
import Sort from '../../[...slug]/sort'

async function AllProducts({ params, searchParams }: { params: { slug: string[] }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const colName = params.slug ? params.slug.slice(-1)[0] : ''
 const dir = searchParams.dir ? searchParams.dir.toString() : ''
 const cursor = searchParams.cursor ? searchParams.cursor.toString() : ''
 const sort = searchParams.sort ? searchParams.sort.toString() : ''

 //  console.log('slug page params:', params)

 const selectedSort = sortOptions.find((option) => option.id === sort)
 const sortParams = selectedSort ? { sortKey: selectedSort.value, reverse: selectedSort.reverse } : { sortKey: 'TITLE', reverse: false }

 const dataObj = params.slug
  ? await storeApi.getFullCollectionByHandle({
     handle: colName,
     sortKey: sortParams.sortKey === 'CREATED' ? 'CREATED_AT' : sortParams.sortKey,
     reverse: sortParams.reverse,
     numProducts: 24,
     cursor: cursor ?? '',
     dir,
    })
  : await storeApi.getAllProducts({
     sortKey: sortParams.sortKey === 'CREATED' ? 'CREATED_AT' : sortParams.sortKey,
     reverse: sortParams.reverse,
     numProducts: 24,
     cursor: cursor ?? '',
     dir,
    })

 const { products, pageInfo } = dataObj

 return (
  <div className='pb-12 relative w-full'>
   <PageBanner query={'all'} />
   <Sort />
   <ProductGrid products={products} />
   <div className='flex justify-center gap-8 mt-6 absolute bottom-0 left-0 right-0 w-full mb-6'>
    {pageInfo.hasPreviousPage && (
     <PageBtn
      pageInfo={pageInfo}
      id='prev'>
      <Arrow
       direction='left'
       className='w-8 h-8 text-white hover:text-accent'
      />
     </PageBtn>
    )}
    {pageInfo.hasNextPage && (
     <PageBtn
      pageInfo={pageInfo}
      id='next'>
      <Arrow
       direction='right'
       className='w-8 h-8 text-white hover:text-accent'
      />
     </PageBtn>
    )}
   </div>
  </div>
 )
}

export default AllProducts
