import React from "react"
import buttonStyle from "./donatebtn.module.css"

export default ({children}) => (
  <div class="buttons navbar-item">
    <span className={buttonStyle.donatebutton}
       class="button"><a href={children}>Donate</a></span>
  </div>
)
