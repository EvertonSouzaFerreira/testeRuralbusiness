import React from 'react'
import logo from '../../imgs/logo-mobile.png'

import {Head} from './HeaderStyled'

function Header() {
  return (
    <Head>
      <img src={logo} alt="" />
    </Head>
  )
}

export default Header