export const productTypes = [
 { id: 'dec', label: 'Stickers & Decals', queryHandle: 'Vinyl Decal', url: '/list/Vinyl-Decal' },
 { id: 'win', label: 'Truck Back Window Graphics', queryHandle: 'Truck Back Window Graphics', url: '/list/Truck-Back-Window-Graphics' },
 { id: 'fonz', label: 'FonzAI Design Tool', queryHandle: 'AI', url: '/fonzai' },
]

export type ProductType = {
 id: string
 label: string
 queryHandle: string
 url: string
}
