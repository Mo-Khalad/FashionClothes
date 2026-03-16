import React from 'react'
import man from '../../images/man.webp'
export const About = () => {
  return (
   <div>
    <div className='coverImage d-flex justify-content-center align-items-center text-light w-100'>
        <h1>ABOUT</h1>
    </div>

    <div>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-12 col-md-4 p-4'>
                    <img src={man} alt='man' className='w-100 h-100'/>
                </div>
                <div className='col-12 col-md-8 mt-5'>
                    <h2>Our Story</h2>
                    <p className='mt-4'> Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <p className='p-3'> Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                </div>

            </div>
        </div>
    </div>
   </div>
  )
}
