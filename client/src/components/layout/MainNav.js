import React from 'react';
import '../Page/style.css'
import { Link } from 'react-router-dom';
const MainNav = () => {
    return(
      <nav>
                 
      <div class="wrapper "style={{position:"relative"}}>
     <Link to="/home"> <a href="home.html"><img class = "logo"  src = "./img/1.png"/></a>  </Link>
          <input type="radio" name="slider" id="menu-btn"/>
          <input type="radio" name="slider" id="close-btn"/>
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fa fa-times"></i></label>
     <li>
             <Link to="/men"> <a href="men.html" class="desktop-item">Men</a></Link>
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">Men</label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <header>Featured</header>
                    <ul class="mega-links">
                      <li><a href="#">New Releases</a></li>
                      <li><a href="#">SNKRS Launch Calender</a></li>
                      <li><a href="#">Member Access</a></li>
                      <li><a href="#">Air Force 1</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shoes</header>
                    <ul class="mega-links">
                      <li><a href="#">Newest Sneakers</a></li>
                      <li><a href="#">All Shoes</a></li>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Running</a></li>
                       <li><a href="#">Basketball</a></li>
                        <li><a href="#">Football</a></li>
                    </ul>
                  </div>
                   <div class="row">
                    <header>Clothing</header>
                    <ul class="mega-links">
                      <li><a href="#">All Clothing</a></li>
                      <li><a href="#">Tops and T-Shirts</a></li>
                      <li><a href="#">Jerseys and Kits</a></li>
                      <li><a href="#">Hoodies and Sweatshirts</a></li>
                       <li><a href="#">Jackets and Gilets</a></li>
                        <li><a href="#">Pants and Leggings</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shop By Sports</header>
                    <ul class="mega-links">
                      <li><a href="#">Running</a></li>
                      <li><a href="#">Football</a></li>
                      <li><a href="#">Basketball</a></li>
                      <li><a href="#">Gym and Training</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/women"><a href="women.html" class="desktop-item">Women</a></Link>
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">Women</label>
              <div class="mega-box">
                <div class="content">
                 <div class="row">
                    <header>Featured</header>
                    <ul class="mega-links">
                      <li><a href="#">New Releases</a></li>
                      <li><a href="#">SNKRS Launch Calender</a></li>
                      <li><a href="#">Member Access</a></li>
                      <li><a href="#">Air Force 1</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shoes</header>
                    <ul class="mega-links">
                      <li><a href="#">Newest Sneakers</a></li>
                      <li><a href="#">All Shoes</a></li>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Running</a></li>
                       <li><a href="#">Basketball</a></li>
                        <li><a href="#">Football</a></li>
                    </ul>
                  </div>
                   <div class="row">
                    <header>Clothing</header>
                    <ul class="mega-links">
                      <li><a href="#">All Clothing</a></li>
                      <li><a href="#">Tops and T-Shirts</a></li>
                      <li><a href="#">Jerseys and Kits</a></li>
                      <li><a href="#">Hoodies and Sweatshirts</a></li>
                       <li><a href="#">Jackets and Gilets</a></li>
                        <li><a href="#">Pants and Leggings</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shop By Sports</header>
                    <ul class="mega-links">
                      <li><a href="#">Running</a></li>
                      <li><a href="#">Football</a></li>
                      <li><a href="#">Basketball</a></li>
                      <li><a href="#">Gym and Training</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
            <Link to="/kids"><a href="kids.html" class="desktop-item">Kids</a></Link> 
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">Kids</label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <header>Featured</header>
                    <ul class="mega-links">
                      <li><a href="#">New Releases</a></li>
                      <li><a href="#">SNKRS Launch Calender</a></li>
                      <li><a href="#">Member Access</a></li>
                      <li><a href="#">Air Force 1</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header> Boys' Shoes</header>
                    <ul class="mega-links">
                      <li><a href="#">Older Kids(3-6-.5)</a></li>
                      <li><a href="#">Younger Kids(10-2.5)</a></li>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Running</a></li>
                       <li><a href="#">Basketball</a></li>
                        <li><a href="#">Football</a></li>
                    </ul>
                  </div>
                    <div class="row">
                    <header> Girls' Shoes</header>
                    <ul class="mega-links">
                      <li><a href="#">Older Kids(3-6-.5)</a></li>
                      <li><a href="#">Younger Kids(10-2.5)</a></li>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Running</a></li>
                       <li><a href="#">Basketball</a></li>
                        <li><a href="#">Football</a></li>
                    </ul>
                  </div>
                   <div class="row">
                    <header>  Boys' Clothing</header>
                    <ul class="mega-links">
                      <li><a href="#">All Clothing</a></li>
                      <li><a href="#">Tops and T-Shirts</a></li>
                      <li><a href="#">Hoodies and Sweatshirts</a></li>
                       <li><a href="#">Shorts</a></li>
                        <li><a href="#">Pants and Leggings</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Girls' Clothing</header>
                    <ul class="mega-links">
                      <li><a href="#">All Clothing</a></li>
                      <li><a href="#">Tops and T-Shirts</a></li>
                      <li><a href="#">Hoodies and Sweatshirts</a></li>
                       <li><a href="#">Shorts</a></li>
                        <li><a href="#">Pants and Leggings</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shop By Sports</header>
                    <ul class="mega-links">
                      <li><a href="#">Running</a></li>
                      <li><a href="#">Football</a></li>
                      <li><a href="#">Basketball</a></li>
                      <li><a href="#">Gym and Training</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="desktop-item">Customise</a>
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">Customise</label>
              <div class="mega-box">
                <div class="content">
                   <div class="row">
                    <header>Featured</header>
                    <ul class="mega-links">
                      <li><a href="#">Nike By You New</a></li>
                      <li><a href="#">Releases</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Nike By You</header>
                    <ul class="mega-links">
                      <li><a href="#">Men</a></li>
                      <li><a href="#">Women</a></li>
                     
                    </ul>
                  </div>
                  <div class="row">
                    <header> By Sports</header>
                    <ul class="mega-links">
                       <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Running</a></li>
                      <li><a href="#">Football</a></li>
                      <li><a href="#">Basketball</a></li>
                      <li><a href="#">Gym and Training</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="desktop-item">Sales</a>
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">Sales</label>
              <div class="mega-box">
                <div class="content">
                      <div class="row">
                    <header>Featured</header>
                    <ul class="mega-links">
                      <li><a href="#">Shop All Sale</a></li>
                     
                    </ul>
                  </div>
                  <div class="row">
                    <header>Men's Sale</header>
                    <ul class="mega-links">
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Clothing</a></li>
                     
                    </ul>
                  </div>
                  <div class="row">
                    <header>Women's Sale</header>
                    <ul class="mega-links">
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Clothing</a></li>
                     
                    </ul>
                  </div>
                  <div class="row">
                    <header> Kid's Sale</header>
                    <ul class="mega-links">
                     <li><a href="#">Shoes</a></li>
                      <li><a href="#">Clothing</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
             </ul>
      
         <div class ="d-none d-lg-block" >
         <a href="favorites.html"> <i class="fa fa-heart-o "  aria-hidden="true"style={{fontSize:"24px"}}> </i></a>
             
    </div>
    <div class = "d-none d-lg-block">
         <a href="bag.html"> <i class="fa fa-shopping-bag " aria-hidden="true" style={{fontSize:"24px"}}></i></a>
     </div>
      
          <label for="menu-btn" class="btn menu-btn"><i class="fa fa-bars"></i></label>
        </div>
      
      </nav>
  )
}
export default MainNav;