import React from 'react'
import "MainContent.css"
import me from './assets/me.jpeg'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.svg'
import mail from './assets/Mail.svg'
import github from './assets/github.svg'

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
          <div className='footer'>
                    <a href="https://twitter.com/Anushka3007"><img className='twitter' src={twitter} alt="twitter" /></a>
                    <a href="https://leetcode.com/u/anushka30singh/"><img className='leet' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC80lEQVRogc2avWsUQRjG342xsTCV8SNgxCRyBAkGiyiIhU0QBS0EbbQQFVFsbBS1sREs1D9ARIQUfiAKphHSCApiIRaGICh+oMRC4+kZTC5xfxazB+vezs7c7ezNPeWy7/P+nv2YuZk9kRYJWAt8QykEJlrVO7eADcAi9brim80ooF8DDzCd17/DBaROQJ+ITInIEs0p5SL75xLQByxornxNI745UwWst4A/45szVcA6C/izvjlTBfRawF/0zZkq1Dhvgr/kmzNVlld+HCh01GtKlle+pipwC+j0zS0iIkBPBNWoysBG3/CrmoSP340tvuBXAvM54GtaALa1M3xocU4VGG4VvM0z/xrYEasZQL24fzNq5oGhdoC/nlE/QvadmwMGi4LvNjQHuGnhMxSB6vQHWF0EfFZTgLEG/EoRqE5PWg1/uwnfAWBW4/fZFfwKzI/N3Rz+vUAlxfOBC/gA+GmAz90INTBMxzw/AMtcBBg3wD/K3eT/fluBTa7MlpM9AT120qgoAQ8z4Nt/Lwf4rYF/55vNKNTLq1OPRf0g8JR8v1LTNIt6MrpNACWNQcUy/JRj8KTuJfsml3hrNHy/TAFEpF9EShbn5dHO5IFkgBlNoc3Y/L1hnMZVtxRNBpjUFHZhWJAHQTAjIk7nhxRdruubPABURWRpSvH9IAj2mToA+0Xdat1+aDOaE5GxIAjMP/SAlxkv0WGHUMUI2JwRIAQO+mY0CnhrGM7aOwRqHZC1hg2jZ91FrxuoiaoCXHPhWTMeNdyFEDC+1IYez1J8z7nKIMAhixB7m/R+ofF87yxA1OiIRYjdDfh1AK8y/KacBoiaHrUIUTfNp/h0ApMGr13OA0TNj1mEGDXAvzF4nC8EPgZx3CLE6ZS6YeCrofZCofAxmBMGEFBbMR9R80nZ4vzWfnYCTlpA2crPZyfglAP4q17gYyEOoP8bQZZC2uU7MdAFPMfuWwDAJ2C7b+46ofY77wBfUIv6WqBF4AcwAexx3fcf7nz80kGV4ksAAAAASUVORK5CYII=" /></a>
                    <a href="https://github.com/"><img src={github} alt="github" /></a>
          </div>
     </div>   
        </>
    )
    
}

