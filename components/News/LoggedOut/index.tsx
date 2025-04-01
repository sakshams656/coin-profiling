import React from 'react'
import { container, buttons, textContainer, title, description } from './styles'
import Image from 'next/image'
import AssetsImg from '@public/images'
import { Button, utils } from 'zebpay-ui'
import NOOB from '@constants/noob'
import ShimmerWrapper from '@components/Shared/ShimmerWrapper/ShimmerWrapper'

const LoggedOutBanner = ({ loading = false }) => {
  return (
    <div css={container}>
      <div>
        <ShimmerWrapper height={64} width={64} isLoading={loading} typeLightdDark>
            <Image
                src={AssetsImg.ic_tb_gradient}
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                quality={100} />
          <Image src={AssetsImg.i_logout} alt='logout' width={64} height={64}/>
        </ShimmerWrapper>
      </div>
      <div css={textContainer}>
        <ShimmerWrapper height={28} width={220} isLoading={loading} typeLightdDark>
          <span css={title}>Get started with Zebpay!</span>
        </ShimmerWrapper>
        <ShimmerWrapper height={48} width={255} isLoading={loading} typeLightdDark>
          <span css={description}>Sign up or login to start trading without any restrictions.</span>
        </ShimmerWrapper>
      </div>
      <div css={buttons}>
        <ShimmerWrapper height={32} width={122} isLoading={loading} typeLightdDark>
          <Button 
            type='secondary' 
            onClick={NOOB} 
            size='medium' 
            style={{width: utils.remConverter(120)}}
          >
            LOGIN
          </Button>
        </ShimmerWrapper>
        <ShimmerWrapper height={32} width={122} isLoading={loading} typeLightdDark>
          <Button 
            type='primary' 
            onClick={NOOB} 
            size='medium' 
            style={{width: utils.remConverter(120)}}
          >
            SIGNUP
          </Button>
        </ShimmerWrapper>
      </div>
    </div>
  )
}

export default LoggedOutBanner
