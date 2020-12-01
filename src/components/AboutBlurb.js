import React from "react"
import logo from '../img/logo/VerticalLogo_Blue.svg'

export default ({children}) => (
  <div class="box">
    <div class="columns">
      <div class="column is-one-quarter">
        <img src={logo} />
      </div>
      <div class="column is-three-quarters">
        {children}
      </div>
    </div>
  </div>
)
