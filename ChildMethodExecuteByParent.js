import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const Child = forwardRef((props, ref) => {
  const [valFromParent, setValFromParent] = React.useState('')
  useImperativeHandle(ref, () => ({
    showAlert() {
      alert('Hello from Child Component')
    },
    showConsole() {
      console.log('Hello from Child Component')
    },
    executeChildMethod(dataFromParent) {
      setValFromParent(dataFromParent)
    },
  }))
  return <div>Child : {valFromParent}</div>
})

function ChildToParentDataPassByUseRef() {
  const childCompRef = useRef()
  return (
    <div>
      <button
        onClick={() =>
          childCompRef.current.executeChildMethod(
            "Parent Using Execute Child's function & pass to  Child by Ref",
          )
        }
      >
        Execute Child Method In Parent
      </button>
      <Child ref={childCompRef} />
    </div>
  )
}

export default ChildMethodExecuteByParent
