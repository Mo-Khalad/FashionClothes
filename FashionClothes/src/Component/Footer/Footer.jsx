import React from 'react'
import { Ul } from '../Ui/Ul'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className='footer p-2'>
        <div className='container'>
            <div className='row'>
              <Ul name={'CATEGORIES'} content={['Men' , 'Women' , 'Dresses' , 'Sunglasses']}/>            
              <Ul name={'LINKS'} content={['Search' , 'About Us' , 'Contact Us' , 'Returns']}/>            
              <Ul name={'HELP'} content={['Track Order' , 'Returns' , 'Shipping' , 'FAQs']}/>            
              <div className='col-6 col-md-3 p-3'>
               <h5 className='fw-bold '>NEWSLETTER</h5> 
               <input className={`${style.input} mb-4 mt-3 w-100`} placeholder='email@example.com' type='email' name='email'/>
               <button className={`${style.Subscribe_btn} text-center w-100 text-light px-4 py-1 mt-3`}>Subscribe </button> 
              </div>           
            </div>
        </div>
    </div>
  )
}
