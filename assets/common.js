/*
 * Student Name: Aakanksha Pharande
 * Student ID: 041075173 
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 1
 * Assignment: 4 
 * Date Submitted: 11/12/2022
 */


/* 
 * Navigation Bar (Header Section) 
 * This section will provide a user the ability to move between different pages.
 * This navigation bar should be same across all pages.
 */
/*
 * Source: https://www.youtube.com/watch?v=At4B7A4GOPg
 * Author: Web Dev Simplified
 * Date Retrieved: 2022-11-20
 */
var nav = `
<a href = "#main" class= "skip">Skip to main content</a>
<nav class="navbar">
    <div id="logo-container"> 
    <a id="logo" href="index.html">
        <img src="images/logo.png" alt="Image by (HER Closet Boutique , n.d.)" title= "Her Closet logo" />
    </a>
    </div>
    <a href="#" class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    </a>
    <div class="navbar-links">
    <div id="search_box">
        <input type="text" placeholder="Search...">
    </div>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="contact-us.html">Contact Us</a></li>
    </ul>
    </div>
</nav>
`;

/* 
 * Footer Section  
 * This section will provide user with some additional 
 * navigation and links to privacy and T&C.
 * This footer section should be the same across all pages.
 */
var footer = `
<div class="footer">
    <h3> her closet </h3>
    <ul class="links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="contact-us.html">Contact Us</a></li>
        <li><a href="terms.html">Terms & Conditions</a></li>
        <li><a href="privacy.html">Privacy Policy</a></li>
    </ul>
    <div class="footer-copyright">
        <h5>Copyright &copy; 2022 Her Closet. designed by Aakanksha</h5>
    </div>
</div>
`;

let headerElem = document.getElementById("header");
if (headerElem) {
    headerElem.innerHTML= nav;
}

let footerElem = document.getElementById("footer");
if (footerElem) {
    footerElem.innerHTML= footer;
}

const toggleButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})