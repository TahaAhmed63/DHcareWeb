import React from 'react'

const ThemeButton = (props) => {
    const {btnText,btnRadious}=props
  return (
   <>
   <button
  style={{ backgroundColor: "#412a49", color: "#ffffff" ,borderRadius:btnRadious,border:'0px',outline:'none'}}
  className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-custom rounded-3  p-2"
>
{btnText}
</button>

   </>
  )
}

export default ThemeButton