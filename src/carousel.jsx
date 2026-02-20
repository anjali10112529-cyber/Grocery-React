import React from 'react'
import carousel1 from './assets/carousel1.jpg';
import carousel2 from './assets/carousel2.jpg';
import carousel3 from './assets/carousel3.jpg';
function Carousel(){
    return(
       
        <div className="container-fluid pt-0 carousel slide mt-0" data-bs-ride="carousel" id="carousel">
            <div className='carousel-indicators'>
                <button type='button' data-bs-target="#carousel" data-bs-slide-to="0" className='active'></button>
                <button type='button' data-bs-target="#carousel" data-bs-slide-to="1"></button>
                <button type='button' data-bs-target="#carousel" data-bs-slide-to="2"></button>
            </div>
            <div className='carousel-inner'>
                <div className="carousel-item active">
                    <img src={carousel2} height={"700px"} className='d-block w-100 opacity-50  object-fit-cover' alt="veggie"></img>
                    <div className='carousel-caption position-absolute top-50 start-50 translate-middle text-start d-none d-md-block'>
                        <h3 className=' h5color '> Experience the Test</h3>
                        <h1 className='text-dark fw-3'>Delicious <br></br> Dried <b></b> Fruit </h1><br></br>
                        <button type='button' className="btn btn-warning rounded-pill">Shop Now</button>
               
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carousel1} height={"700px"} className='d-block w-100 opacity-50 object-fit-cover' alt="veggie1"></img>
                    <div className='carousel-caption position-absolute top-50 start-50 translate-middle  text-start d-none d-md-block'>
                        <h3 className=' h5color '> Experience the Test</h3>
                        <h1 className='text-dark fw-3'>Delicious <br></br> Dried <b></b> Fruit </h1><br></br>
                        <button type='button' className="btn btn-warning rounded-pill">Shop Now</button>
                    </div>
                </div>
                 <div className="carousel-item">
                    <img src={carousel3} height={"700px"} className='d-block w-100 opacity-50  object-fit-cover' alt="veggie2"></img>
                    <div className='carousel-caption position-absolute top-50 start-50 translate-middle text-start d-none d-md-block'>
                        <h3 className=' h5color '> Experience the Test</h3>
                        <h1 className='text-dark fw-3'>Delicious <br></br> Dried <b></b> Fruit </h1><br></br>
                        <button type='button' className="btn btn-warning rounded-pill">Shop Now</button>
                    </div>
                </div>
            </div>
            <button className='carousel-control-prev' type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className='carousel-control-prev-icon bg-warning'></span>
            </button>
            <button className='carousel-control-next ' type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className='carousel-control-next-icon bg-warning'></span>
            </button>
        </div>
    );
}
export default Carousel;