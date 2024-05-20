import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div><footer class="footer">
    <div id='footer-sec1' class="footer-section">
        <h1 class="footer-heading">ABOUT US</h1>
        <p class="footer-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id aut magnam, quia inventore nesciunt ex temporibus hic! Maiores similique ipsam ducimus earum porro.</p>
        <p class="footer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p class="footer-text">+915476984387</p>
        <p class="footer-text">random123@gmail.com</p>
    </div>
    <div id='footer-sec2' class="footer-section">
        <h1 class="footer-heading">CONTACT</h1>
        <p class="footer-text">Twitter</p>
        <p class="footer-text">LinkedIn</p>
        <p class="footer-text">Instagram</p>
        <p class="footer-text">Facebook</p>
    </div>
    <div id='footer-sec3' class="footer-section">
        <h1 class="footer-heading">OUR SERVICES</h1>
        <p class="footer-text">FHD</p>
        <p class="footer-text">Offers</p>
        <p class="footer-text">Fresh food</p>
    </div>
    <div id='footer-sec4' class="footer-section">
        <h1 class="footer-heading">NEWS LETTER</h1>
        <p class="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet tenetur soluta magnam expedita.</p>
        <div class="footer-input">
            <input type="text" placeholder="Message"/>
            <button class="footer-button">SEND</button>
        </div>
        <div class="footer-social">
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-linkedin"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-facebook"></i></span>
        </div>
    </div>
</footer>
</div>
  )
}
