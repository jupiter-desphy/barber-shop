import React from 'react';
import Slider from 'react-slick';

export default function Reviews() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // vertical: true,
        arrows: false,
    };


    return (
        <div className='reviews'>
            Satisfied Customers
            <Slider {...settings}>
                <div className='review' >
                    <blockquote cite='https://www.yelp.com/biz/tabor-barber-shop-portland#reviews'>
                        Being new in Portland I was looking for a shop that had that old fashion barbershop feel, which this place does. It has a great atmosphere and is a father and son shop. I got my haircut by Tony Jr. and it was just what I wanted. This will be my go-to Barber Shop!
                    </blockquote>
                    <figcaption>
                        - John C.
                        <cite>
                            yelp
                        </cite>
                    </figcaption>
                </div>
                <div className="review">
                    <blockquote cite='https://www.yelp.com/biz/tabor-barber-shop-portland#reviews'>
                        Will go back and get my next haircut there. 10/10. Would swipe right if barbershops were on Tinder.
                    </blockquote>
                    <figcaption>
                        - Mason V.
                        <cite>
                            google reviews
                        </cite>
                    </figcaption>
                </div>
                <div className="review">
                    <blockquote cite='https://www.yelp.com/biz/tabor-barber-shop-portland#reviews'>
                        I saw Tony and got a great fade. The shop is clean and they have off street parking.
                    </blockquote>
                    <figcaption>
                        - Scott F.
                        <cite>
                            google reviews
                        </cite>
                    </figcaption>
                </div>
                <div className="review">
                    <blockquote cite='https://www.yelp.com/biz/tabor-barber-shop-portland#reviews'>
                        Tony has 40 years of experience and it is clear when he does his thing. The inside of the shop is 100% the old-school barbershop of my imagination down to every detail. Walked in and got service immediately, nice razor shave with the hot towel.
                    </blockquote>
                    <figcaption>
                        - Davey Z.
                        <cite>
                            google reviews
                        </cite>
                    </figcaption>
                </div>
            </Slider>
        </div>
    );
}
//         <div className='reviews'>
//             <div className='review' >

//                 <blockquote cite='https://www.yelp.com/biz/tabor-barber-shop-portland#reviews'>
                    
//                         I met Tony when he came into my work for business cards. Being new in Portland I was looking for a shop that had that old fashion barbershop feel, which this place does. It has a great atmosphere and is a father and son shop. I got my haircut by Tony Jr. and it was just what I wanted. This will be my go-to Barber Shop! Give them a try you will not be disappointed.
                    
//                 </blockquote>
//                 <div className="divider">
//                 </div>
//                 <figcaption>
                    
//                         John C.
                    
//                 </figcaption>
//             </div>
//             <div className="review">
//                 <blockquote>
                    
//                         I met Tony when he came into my work for business cards. Being new in Portland I was looking for a shop that had that old fashion barbershop feel, which this place does. It has a great atmosphere and is a father and son shop. I got my haircut by Tony Jr. and it was just what I wanted. This will be my go-to Barber Shop! Give them a try you will not be disappointed.
                    
//                 </blockquote>
//             </div>
//             <div className="review">
//                 <blockquote>

//                 </blockquote>
//             </div>
//         </div>
//     )
// }
