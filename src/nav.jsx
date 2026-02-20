import React from 'react';
import logo from './assets/logo.png';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
            <div className="container-fluid ">
                <div className="">
                <img src={logo} width="200" className='img-fluid logo'></img>
                <button className="navbar-toggler d-md-none" type='button' data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label='Toggle navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse " id="navbarContent">
                <ul className='navbar-nav mx-auto '>                    
                    <li className='nav-item dropdown'>
                        <a href="#" className='nav-link dropdown-toggle p-3 fw-bold' data-bs-toggle="dropdown">HOME</a>
                        <ul className='dropdown-menu'>
                            <li><a className='dropdown-item' href="#">Veggie item1</a></li>
                            <li><a className='dropdown-item' href="#">Veggie item2</a></li>
                            <li><a className='dropdown-item' href="#">Veggie item3</a></li>
                            <li><a className='dropdown-item' href="#">Veggie item4</a></li>
                            <li><a className='dropdown-item' href="#">Veggie item5</a></li>
                            <li><a className='dropdown-item' href="#">Veggie item6</a></li>
                        </ul>
                    </li>
                    <li className='nav-item dropdown '>
                        <a href="#" className='nav-link dropdown-toggle p-3 fw-bold' data-bs-toggle="dropdown">SHOP</a>
                        
                        <div className='container dropdown-menu p-4 mega-menu w-100'>
                        <div className="row ">
                            <div className="col-12 mb-2 col-md-3 ">
                                <h6 className='ps-2'>Mixed Fruits</h6>
                                <a className='dropdown-item' href='#'>Fresh and healthy food</a>
                                <a className='dropdown-item' href='#'>Fresh banana 100% safe</a>
                                <a className='dropdown-item' href='#'>Fresh grassbean</a>
                                <a className='dropdown-item' href='#'>Organic coconut</a>
                                <a className='dropdown-item' href='#'>Fresh Mussel-500g</a>
                            </div>
                            <div className="col-12 mb-2 col-md-3">
                                <h6 className='ps-2'>Fresh Foods</h6>
                                <a className='dropdown-item' href='#'>Fresh Apple-5kg</a>
                                <a className='dropdown-item' href='#'>Fresh Blueberry</a>
                                <a className='dropdown-item' href='#'>Fresh Carrot</a>
                                <a className='dropdown-item' href='#'>Fresh Grassbean</a>
                                <a className='dropdown-item' href='#'>Blackberry 100% Organic</a>
                            </div>
                             <div className="col-12 mb-2 col-md-3">
                                <h6 className='ps-2'>Bananas and Plantains</h6>
                                <a className='dropdown-item' href='#'>Blackberry 100% Organic</a>
                                <a className='dropdown-item' href='#'>Fresh avacado</a>
                                <a className='dropdown-item' href='#'>Fresh green orange</a>
                                <a className='dropdown-item' href='#'>Fresh Grassbean</a>
                                <a className='dropdown-item' href='#'>Blackberry dried almond-50g</a>
                            </div>
                             <div className="col-12 mb-2 col-md-3">
                                <h6 className='ps-2'>Cow milk</h6>
                                <a className='dropdown-item' href='#'>Blackberry 100% Organic</a>
                                <a className='dropdown-item' href='#'>Fresh apple-5kg</a>
                                <a className='dropdown-item' href='#'>Fresh avacado</a>
                                <a className='dropdown-item' href='#'>Fresh Grassbean</a>
                                <a className='dropdown-item' href='#'>Fresh banana 100% safe</a>
                            </div>
                        </div>                             
                        </div>                        
                    </li>
                    <li className='nav-item dropdown'>
                        <a href="#" className='nav-link dropdown-toggle p-3 fw-bold' data-bs-toggle="dropdown">COLLECTION</a>
                        <div className='container dropdown-menu p-2 mega-menu w-100'>
                        <div className="row">
                            <div className="col-12 col-md-4 gap-1  position-relative" >
                               <img src={img1} className="img-fluid opacity-50" style={{height:"300px"}} alt='sample'></img>
                               <h6 className='position-absolute top-50 start-50 translate-middle text-black text-center'>Fresh & Safe <br></br> <h4>Vegetable </h4>up to <strong> 15% </strong>Off <br></br>& free delivery</h6>
                            </div>
                            <div className="col-12 col-md-4 gap-1 position-relative" >
                              <img src={img2} className="img-fluid " style={{height:"300px"}} alt='sample'></img>
                              <h6 className="position-absolute top-50 start-50 translate-middle text-black text-center">Fresh & Safe<br></br><h4><strong>Organic juice</strong></h4></h6>
                            </div>
                             <div className="col-12 col-md-4 gap-1 position-relative" >
                               <img src={img3} className="img-fluid opacity-50" style={{height:"300px"}} alt='sample'></img>
                               <h6 className="position-absolute top-50 end-0 pe-4 translate-middle-y text-black text-right">Today Only<br></br><h4><strong>Fresh Juice</strong></h4>upto<strong>40% </strong>Off <br></br> & free delivery</h6>

                            </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link p-3 fw-bold'> BLOG </a>
                    </li>
                    <li className='nav-item dropdown'>
                        <a href="#" className='nav-link dropdown-toggle p-3 fw-bold' data-bs-toggle="dropdown">PAGES</a>
                        <ul className='dropdown-menu'>
                            <li><a className='dropdown-item' href="#">About Us</a></li>
                            <li><a className='dropdown-item' href="#">Contact Us</a></li>
                            <li><a className='dropdown-item' href="#">Faq's</a></li>
                            <li><a className='dropdown-item' href="#">Payment Policy</a></li>
                            <li><a className='dropdown-item' href="#">Privacy Policy</a></li>
                            <li><a className='dropdown-item' href="#">Return Policy</a></li>
                            <li><a className='dropdown-item' href="#">Shipping Policy</a></li>
                            <li><a className='dropdown-item' href="#">Terms & Conditions</a></li>
                            <li><a className='dropdown-item' href="#">Page 404</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link p-3 fw-bold'> BUY VEGIST </a>
                    </li>
                </ul>
                </div>
                <ul className='nav-item d-flex fs-6 fs-md-5  '>
                    <li className='p-2 p-md-3 nav-link'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </li>
                    <li className='p-2 p-md-3 nav-link'>
                        <i class="fa-regular fa-user"></i>
                    </li>
                    <li className="p-2 p-md-3 nav-link">
                        <i class="fa-regular fa-heart"></i>
                    </li>
                    <li className='p-2 p-md-3  nav-link'>
                        <i class="fa-solid fa-bag-shopping"></i>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}
export default Navbar;