import React from 'react'
import { cn } from '../../utils/cn'
import './spinner.css'

function Spinner({ small = false, dark = false, bright = false, noMargin = false }: { small?: boolean; dark?: boolean; bright?: boolean; noMargin?: boolean }) {
 return (
  <div className={cn('sk-fading-circle', small && 'small', bright && 'bright', noMargin && 'no-margin', dark && 'dark')}>
   <div className='sk-circle1 sk-circle'></div>
   <div className='sk-circle2 sk-circle'></div>
   <div className='sk-circle3 sk-circle'></div>
   <div className='sk-circle4 sk-circle'></div>
   <div className='sk-circle5 sk-circle'></div>
   <div className='sk-circle6 sk-circle'></div>
   <div className='sk-circle7 sk-circle'></div>
   <div className='sk-circle8 sk-circle'></div>
   <div className='sk-circle9 sk-circle'></div>
   <div className='sk-circle10 sk-circle'></div>
   <div className='sk-circle11 sk-circle'></div>
   <div className='sk-circle12 sk-circle'></div>
  </div>
 )
}

export default Spinner
