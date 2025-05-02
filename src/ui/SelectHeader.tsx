import React from 'react'
import downIcon from '../assets/images/down.png'


export default function SelectHeader({children, onClick}: {children: React.ReactNode, onClick: ()=> void }) {
  
  return (
    <div className='select_header' onClick={onClick}>
        {children}
      <img src={downIcon} alt="downIcon" className='select_header_arrow' />
    </div>
  )
}
