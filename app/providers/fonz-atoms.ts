import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Generated, CldImageType, SelectedImageType } from '@/app/(fonzai)/types/image-types'
import { Secondary, Variant } from '@/app/(fonzai)/data/options'
import { Product, ShopifyProduct } from '@/lib/shopify/types'

export const viewOpenAtom = atom(false)

export const productAtom = atom({
 id: '',
 title: '',
 handle: '',
 options: [
  {
   id: '',
   name: '',
   values: [''],
  },
 ],
 variants: {
  edges: [
   {
    node: {
     id: '',
     title: '',
     selectedOptions: [
      {
       name: '',
       value: '',
      },
     ],
     metafields: [
      {
       id: '',
       key: '',
       value: '',
      },
     ],
     price: {
      amount: '',
     },
    },
   },
  ],
 },
})
productAtom.debugLabel = 'productAtom'

export const ffDefault = {
 id: '',
 label: 'Select Product',
 disabled: false,
 handle: '',
 variants: [
  {
   size: '',
   secondary: [
    {
     id: '',
     label: '',
     ar: '',
     grid: false,
    },
   ],
  },
 ],
 secondaryVariant: '',
}

export const selectedFFAtom = atom(ffDefault)
selectedFFAtom.debugLabel = 'selectedFFAtom'

export const selectedSizeAtom = atom({
 size: 'Select Size',
 secondary: [],
} as Variant)
selectedSizeAtom.debugLabel = 'selectedSizeAtom'

export const sizeFilteredAtom = atom([
 {
  node: {
   id: '',
   title: '',
   selectedOptions: [
    {
     name: '',
     value: '',
    },
   ],
   metafields: [
    {
     id: '',
     key: '',
     value: '',
    },
   ],
   price: {
    amount: '',
   },
  },
 },
])
sizeFilteredAtom.debugLabel = 'sizeFilteredAtom'

export const secVarDefault = {
 id: '',
 label: '',
 ar: '',
 grid: false,
}

export const selectedSecVarAtom = atom(secVarDefault as Secondary)
selectedSecVarAtom.debugLabel = 'selectedSecVarAtom'

export const selectedStyleAtom = atom({
 id: 'none',
 label: 'None',
 prompt: '',
 img: '/none',
})

export const promptAtom = atom('')
promptAtom.debugLabel = 'promptAtom'

export const generatedDefault = {
 imgData: {
  publicId: '',
  url: '',
 },
 productId: '',
 isGrid: false,
 isUpscaled: false,
 ff: '',
 size: '',
 secVar: {
  ar: '',
  grid: false,
  id: '',
  label: '',
 },
 style: '',
 meta: {
  id: '',
  flags: 0,
  content: '',
  hash: '',
  progress: '',
  uri: '',
  proxy_url: '',
  options: [
   {
    type: 0,
    style: 0,
    label: '',
    custom: '',
   },
  ],
  width: 0,
  height: 0,
 },
 caption: '',
 prompt: '',
 secVarLabel: '',
}

export const generatedAtom = atom<Generated>(generatedDefault)
generatedAtom.debugLabel = 'generatedAtom'
export const imageArrayAtom = atom([
 {
  id: 0,
  label: '',
  image: {} as CldImageType,
 },
 {
  id: 1,
  label: '',
  image: {} as CldImageType,
 },
 {
  id: 2,
  label: '',
  image: {} as CldImageType,
 },
 {
  id: 3,
  label: '',
  image: {} as CldImageType,
 },
])
imageArrayAtom.debugLabel = 'imageArrayAtom'

export const isGridAtom = atom(false)
isGridAtom.debugLabel = 'isGridAtom'

export const selectedImageDefault = {
 img: {
  id: 0,
  label: '',
  image: {} as CldImageType,
 },
 index: 0,
 generated: generatedDefault,
}

export const selectedImageAtom = atom<SelectedImageType>(selectedImageDefault)
selectedImageAtom.debugLabel = 'selectedImageAtom'

export const selectedVariantAtom = atom({
 id: '',
 title: '',
 selectedOptions: [
  {
   name: '',
   value: '',
  },
 ],
 metafields: [
  {
   id: '',
   key: '',
   value: '',
  },
 ],
 price: {
  amount: '',
 },
})
selectedVariantAtom.debugLabel = 'selectedVariantAtom'

export const wsIdAtom = atom('')
wsIdAtom.debugLabel = 'wsIdAtom'
export const wsMessageAtom = atom({ event: '', data: '', id: '' })
wsMessageAtom.debugLabel = 'wsMessageAtom'

export const ffOpenAtom = atom(false)
export const sizeOpenAtom = atom(false)
export const secVarOpenAtom = atom(false)
export const showSecVarAtom = atom(false)
export const styleOpenAtom = atom(false)
export const infoDrawerOpenAtom = atom(false)
export const historyIsOpenAtom = atom(false)
export const formIsOpenAtom = atom(false)

export const generateErrorAtom = atom({
 error: false,
 message: '',
})
generateErrorAtom.debugLabel = 'generateErrorAtom'

const defaultHistory = {
 caption: '',
 ff: '',
 imgData: {
  publicId: '',
  url: '',
 },
 isGrid: false,
 meta: {
  id: '',
  flags: 0,
  content: '',
  hash: '',
  progress: '',
  uri: '',
  proxy_url: '',
  options: [
   {
    type: 0,
    style: 0,
    label: '',
    custom: '',
   },
  ],
  width: 0,
  height: 0,
 },
 productId: '',
 prompt: '',
 secVar: {
  ar: '',
  grid: false,
  id: '',
  label: '',
 },
 size: '',
 style: '',
 secVarLabel: '',
}

export const promptHistoryAtom = atomWithStorage('promptHistory', [defaultHistory])
promptHistoryAtom.debugLabel = 'promptHistoryAtom'

export const cartContentsDefault = {
 id: '',
 createdAt: '',
 updatedAt: '',
 lines: {
  edges: [
   {
    node: {
     id: '',
     quantity: 0,
     cost: {
      totalAmount: {
       amount: '',
      },
     },
     merchandise: {
      id: '',
      title: '',
      selectedOptions: [
       {
        name: '',
        value: '',
       },
      ],
      product: {
       id: '',
       title: '',
      },
     },
     attributes: [],
    },
   },
  ],
 },
 attributes: [
  {
   key: '',
   value: '',
  },
 ],
 checkoutUrl: '',
 cost: {
  totalAmount: {
   amount: '',
   currencyCode: '',
  },
  subtotalAmount: {
   amount: '',
   currencyCode: '',
  },
  totalTaxAmount: null,
  totalDutyAmount: null,
 },
}

export const cartDataDefault = {
 hasCart: false,
 cartId: '',
}

export const cartContentsAtom = atomWithStorage('cartContents', cartContentsDefault)
export const cartDataAtom = atomWithStorage('cartData', cartDataDefault)

export const statusAtom = atom('0%')

export const isLoadingAtom = atom(false)
export const isUpscalingAtom = atom(false)
export const upscaleAndAddAtom = atom({ cart: false, wi: false })
upscaleAndAddAtom.debugLabel = 'upscaleAndAddAtom'

export const shopAtom = atom({
 primaryDomain: {
  url: '',
 },
 id: '',
 name: '',
})
shopAtom.debugLabel = 'shopAtom'

export const cdMetaAtom = atomWithStorage('cdMeta', {
 genCount: 0,
 isCd: false,
 genTimes: [1],
})

export const customerDefault = { email: '', firstName: '', id: '', phone: '', lastName: '', acceptsMarketing: false, displayName: '' }

export const customerAccessTokenAtom = atomWithStorage('customerAccessToken', { accessToken: '', expiresAt: '' })
export const customerAtom = atomWithStorage('customer', customerDefault)

export const customerErrorAtom = atom({
 error: false,
 message: '',
})

export type NewCustomer = {
 email: string
 password: string
 firstName?: string
 lastName?: string
 acceptsMarketing?: boolean
 phone?: string
}

export const newCustomerAtom = atom<NewCustomer>({
 email: '',
 password: '',
})

export const formTypeAtom = atom('signIn')

export const sentVerificationAtom = atom({ sent: false, message: '' })

export const recsAtom = atom<ShopifyProduct[]>([])
recsAtom.debugLabel = 'recsAtom'
