import React from "react"
import buttonStyle from "./donatebtn.module.css"

export default ({children}) => (
  <div class="buttons has-addons navbar-item">
    <span className={buttonStyle.donatebutton}
      class="button"><a href={children}>$1</a></span>
    <span className={buttonStyle.donatebutton}
       class="button"><a href={children}>$5</a></span>
    <span className={buttonStyle.donatebutton}
       class="button"><a href={children}>$__</a></span>
    <span className={buttonStyle.donatebutton}
       class="button"><a href={children}>Donate</a></span>
  </div>
)
