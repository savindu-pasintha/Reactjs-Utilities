import React from 'react'

export const Micro2 = (props) => {
  var styles = props?.stylesTOcontainer
  return (
    <div style={styles}>{props?.title ? props?.title : 'MICRO-FRONTEND-2'}</div>
  )
}
