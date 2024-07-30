'use server'

import uploadImage from '@/lib/cloudinary'

export const uploadLogo = async (imgData: { dataUrl: string; fileName: string; fileSize: number }) => {
 const { dataUrl, fileName, fileSize } = imgData
 if (!dataUrl) {
  return { error: 'No image data' }
 }
 if (fileSize > 30000000) {
  return { error: 'File size is too large' }
 }
 const res = await uploadImage(dataUrl)
 //  console.log('res:', res)
 if (res.error) {
  return { error: res.error }
 }
 return { success: true, imgData: res }
}
