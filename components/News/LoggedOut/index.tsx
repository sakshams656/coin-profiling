import React from 'react'
import { container, buttons, textContainer, title, description } from './styles'
import Image from 'next/image'
import AssetsImg from '@public/images'
import { Button, utils } from 'zebpay-ui'
import NOOB from '@constants/noob'

const LoggedOutBanner = () => {
  return (
    <div css={container}>
      <div>
        <Image src={AssetsImg.i_logout} alt='logout' width={64} height={64}/>
      </div>
      <div css={textContainer}>
        <span css={title}>Get started with Zebpay!</span>
        <span css={description}>Sign up or login to start trading without any restrictions.</span>
      </div>
      <div css={buttons}>
        <Button type='secondary' onClick={NOOB} size='medium' style={{width: utils.remConverter(120)}}>LOGIN</Button>
        <Button type='primary' onClick={NOOB} size='medium' style={{width: utils.remConverter(120)}}>SIGNUP</Button>
      </div>
    </div>
  )
}

export default LoggedOutBanner
