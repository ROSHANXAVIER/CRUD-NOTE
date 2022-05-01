import React from 'react'
import './hello.css';
import './hello.scss'
import {FaLinkedin,FaGithub  } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
function hello() {
  return (
    <div className='cen'>
      <div className='title'>
        E-NOTE
      </div>
      <div class="imgLoader"></div>

<div class="container">
  <div class="credit">
    KEEP NOTES OF YOUR LIFE
    <p></p>
    <p>A web application which is built using MERN stack .
      The user is able to create , search , update and delete notes.
    </p>
    <div>
                <a href="https://www.linkedin.com/in/roshan-xavier-1ab097214/"><FaLinkedin  className='links' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/><FaLinkedin/></a>
                <a href="g.htm"><FaGithub className='links' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/><FaGithub/></a>
                <a href="m.htm"><MdMail className='links' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/><MdMail/></a>
                <a href="tel:9447567495"><BsFillTelephoneFill className='links'/><BsFillTelephoneFill/></a>
            </div>
  </div>

  <div class="book">
    <div class="gap"></div>
    <div class="pages">
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
    </div>
    <div class="flips">
      <div class="flip flip1">
        <div class="flip flip2">
          <div class="flip flip3">
            <div class="flip flip4">
              <div class="flip flip5">
                <div class="flip flip6">
                  <div class="flip flip7"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default hello