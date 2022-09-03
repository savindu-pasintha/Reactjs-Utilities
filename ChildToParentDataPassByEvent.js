import React from 'react'

export default function ChildToParentDataPassByEvent() {
  const Parent = (props) => {
    const [chlid_data, setChild_data] = React.useState('parent_data')
    const clickMethod = (data) => {
      console.log(data)
      setChild_data(data)
    }

    return (
      <>
        <Child click_me={(e) => clickMethod(e)} />
        {chlid_data}
      </>
    )
  }
  const Child = (props) => {
    return (
      <button onClick={(e) => props?.click_me('child_to_parent data passed.')}>
        click
      </button>
    )
  }
  return <Parent />
}
