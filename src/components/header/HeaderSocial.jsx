import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com" target="_new">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/nawazprince" target="_new">
            <FaGithub/>
        </a>
    </div>
  )
}

export default HeaderSocial