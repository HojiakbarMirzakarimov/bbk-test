import { ReactNode } from "react"

type props =  {
children:ReactNode
}

export default function BackBtn({children}:props) {
  return (
    <>
      <div className="back_btns_wrapper">
        {children}
      </div>
      <div className="back_btns_hr"></div>
    </>
  )
}
