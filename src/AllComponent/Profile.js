
import React from 'react'
import AdsCategories from './AdsCategories';
import AllCategories from './AllCategories';
import Footer from './Footer';
import ImgCarousel from './ImgCarousel';

import Navbar from './Navbar';
import './Profile.css'

 function Profile() {
    return (
     <div>
         <div className='Profile'>
             <div className='Profileliner'>
         <Navbar/>
         </div>
         </div>
         <AllCategories/>
         <ImgCarousel/>
         <AdsCategories/>
         <Footer/>
     </div>   
    )
}


export default Profile;