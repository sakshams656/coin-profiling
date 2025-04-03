import React from 'react'
import { container, title, description, textContainer } from './styles'
import Image from 'next/image'
import AssetsImg from '@public/images'


const LoggedOutScreen = () => {
  return (
    <div css={container}>
        <div>
            <Image src={AssetsImg.i_logout} alt='logout_icon' width={64} height={64}/>
        </div>
        <div css={textContainer}>
        <span css={title}>Get started with ZebPay!</span>
        <span css={description}>Sign up or login to start trading without any restrictions</span>
        </div>
      
    </div>
  )
}

export default LoggedOutScreen
