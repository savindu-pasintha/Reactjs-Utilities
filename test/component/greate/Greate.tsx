import React from 'react'

type greatProps = {
  title?: string
}

export const Greate = (props: greatProps) => {
  return <div>{`${'Great'}${props.title ? props.title : ''}`}</div>
}
