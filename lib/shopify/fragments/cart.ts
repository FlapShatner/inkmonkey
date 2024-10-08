import productFragment from './product'

const cartFragment = /* GraphQL */ `
 fragment cart on Cart {
  id
  discountCodes {
   applicable
   code
  }
  checkoutUrl
  cost {
   subtotalAmount {
    amount
    currencyCode
   }
   totalAmount {
    amount
    currencyCode
   }
   totalTaxAmount {
    amount
    currencyCode
   }
  }
  lines(first: 100) {
   edges {
    node {
     id
     attributes {
      key
      value
     }
     quantity
     cost {
      totalAmount {
       amount
       currencyCode
      }
     }
     merchandise {
      ... on ProductVariant {
       id
       title
       selectedOptions {
        name
        value
       }
       product {
        ...product
       }
      }
     }
    }
   }
  }
  totalQuantity
 }
 ${productFragment}
`

export default cartFragment
