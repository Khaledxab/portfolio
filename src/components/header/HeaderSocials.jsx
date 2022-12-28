import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="google.com" target="blank"><BsLinkedin/></a>
        <a href="google.com" target="blank"><FaGithub/></a>
        <a href="google.com" target="blank"></a>
    </div>
  )
}

export default HeaderSocials