import React from 'react';
import products from './assets/product.png';
function Products(){
    return(
       <div>
            <div className="row d-flex my-5">
                <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
                    <img src={products} alt='product' className="img-fluid"></img>
                </div>
                <div className='col-12 col-lg-7 pl-5'>
                    <h1 className='text-center my-2'> The best trusted forms <br></br> in the world</h1>
                    <div className= "d-flex flex-wrap gap-1 gap-md-3 m-3 justify-content-center justify-content-md-start">
                        <div>
                        <div className='proIcon text-white bg-primary mx-3 mx-md-5 my-2 rounded-circle cursor-pointer'>
                            <i class="fa-solid fa-leaf"></i>                            
                        </div>
                        <h4 className='text-center'>Vegetables</h4>
                        <p className='fs-5 text-muted text-center' >20 items</p>
                       </div>
                       <div>
                        <div className='proIcon text-white bg-success mx-3 mx-md-5 my-2 rounded-circle cursor-pointer'>
                            <i class="fa-solid fa-blender"></i>                           
                        </div>
                        <h4 className='text-center'>Fresh Juice</h4>
                        <p className='fs-5 text-muted text-center' >20 items</p>
                       </div>
                       <div>
                        <div className='proIcon text-white bg-info mx-3 mx-md-5 my-2 rounded-circle cursor-pointer'>
                            <i class="fa-regular fa-lemon"></i>                           
                        </div>
                        <h4 className='text-center'>Fresh Fruits</h4>
                        <p className='fs-5 text-muted text-center' >20 items</p>
                       </div>
                       <div>
                        <div className='proIcon bg-warning text-white mx-3 mx-md-5 my-2 rounded-circle cursor-pointer'>
                           <i class="fa-solid fa-fish"></i>                           
                        </div>
                        <h4 className='text-center'>Raw Fish</h4>
                        <p className='fs-5 text-muted text-center' >20 items</p>
                       </div>
                       <div>
                        <div className='proIcon bg-secondary text-white mx-3 mx-md-5 my-2 rounded-circle cursor-pointer'>
                            <i class="fa-solid fa-glass-water"></i>                            
                        </div>
                        <h4 className='text-center'>Cow milk</h4>
                        <p className='fs-5 text-muted text-center' >20 items</p>
                       </div>
                       <div>
                        <div className='proIcon bg-danger text-white mx-3 mx-md-5 my-2 rounded-circle cursor-pointer'>
                            <i class="fa-solid fa-ice-cream"></i>                            
                        </div>
                        <h4 className='text-center'>Ice cream</h4>
                        <p className='fs-5 text-muted text-center' >20 items</p>
                       </div>
                    </div>
                </div>
            </div>
            <div className=' my-5' style={{backgroundColor:"orange"}}>
                <div className="row d-flex flex-wrap align-items-center justify-content-start justify-content-md-center ps-2  py-5">
                    <div className='col-12 col-md-3 text-start  d-flex gap-2 align-items-center my-2' >
                        <i class="fa-solid fa-truck fa-2x "></i>
                        <h5 className='text-black '>Free Shipping</h5>
                    </div>
                     <div className=' col-12 col-md-3 text-start d-flex gap-2 align-items-center my-2'>
                        <i class="fa-solid fa-money-bill-wave fa-2x end"></i>
                        <h5 className='text-black '>Cash on delivery</h5>
                    </div>
                     <div className='col-12 col-md-3 text-start d-flex gap-2 align-items-center my-2'>
                        <i class="fa-solid fa-rotate-left fa-2x end"></i>
                        <h5 className='text-black'>30-days Easy return</h5>
                    </div>
                     <div className='col-12 col-md-3 text-start d-flex gap-2 align-items-center my-2'>
                       <i className="fa-solid fa-comments fa-2x end"></i>
                        <h5 className='text-black'>Online Support</h5>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Products;