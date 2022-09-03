import React from 'react'

export const Micro1 = (props) => {
  return (
    <div style={props?.stylesTOcontainer}>
      {props?.title ? props?.title : 'MICRO-FRONTEND-1'}
    </div>
  )
}
