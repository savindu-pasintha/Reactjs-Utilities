import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const onIncrement = () => setCount(count + 1)
  const onDecrement = () => setCount(count - 1)

  return (
    <div>
      <code></code>
    </div>
  )
}
