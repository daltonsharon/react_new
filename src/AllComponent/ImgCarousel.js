import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function ImgCarousel(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>

<Carousel responsive={responsive}>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://greenhomesolutionsfranchising.com/wp-content/uploads/2020/04/image2-resize.jpg'/></div>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://robertfiance.edu/wp-content/uploads/2018/09/ROB-109066-Thank-You-Barber-min.jpg'/></div>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://image.freepik.com/free-psd/electrician-banner-template_23-2148636096.jpg'/></div>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://img.freepik.com/free-psd/plumbing-quality-service-banner-template_23-2148709810.jpg?size=626&ext=jpg'/></div>
</Carousel>;

        </div>
    );
}

export default ImgCarousel;