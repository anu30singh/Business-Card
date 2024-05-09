import React from 'react'
import './MainContent.css'
import me from './assets/me.jpeg'
//import twitter from './assets/twitter.png'
//import Linkedin from './assets/linkedin.svg'
//import Mail from './assets/Mail.svg'
//import github from './assets/github.svg'

export default function MainContent() {
    return (
        <>
          <div className='container'>
          <div className='img-container'>
                <img className='main-img' src={me} alt="me" />
          </div>

          <div className="sub-container">
            <h2 className="name">Anushka Singh</h2>
            <h4 className="role">Frontend Developer | UX/UI Designer</h4>
          <div className="connect">
            <a href="anushka30singh07@gmail.com" className='Mail'>Email</a>
            <a href="https://www.linkedin.com/in/anushka30singh/" className='Linkedin'>Linkedin</a>
          </div>
          <div className="about">
            <h3>About</h3>
            <p> I am an aspiring full stack developer , I am constantly learning and adopting new technologies and knowledge related to my field</p>
          </div>
          <div className="interest">
            <h3>Interest</h3>
            <p>Music , Technology, Sports , History. I love connecting with new people , give a shout at anushka30singh07@gmail.com</p>
          </div>
         
          </div>
          
     </div>   
        </>
    )
    
}

