import React from 'react'

// children is  keyword
function ParentContext({ children }) {
    return (<>{children}<children /></>)
  }

function Child({level, children }) {
    switch (level) {
        case 1:
          return <h1>{children} I am a from Child() </h1>;
        case 2:
          return <h2>{children}</h2>;
        case 3:
          return <h3>{children}</h3>;
        case 4:
          return <h4>{children}</h4>;
        case 5:
          return <h5>{children}</h5>;
        case 6:
          return <h6>{children}</h6>;
        default:
          throw Error('Unknown level: ' + level);
      }
}  

export default function PrarentToChildDataPassByContextTree() {
  return (
  <ParentContext>
    <Child  level={1}>h1</Child>
    <Child  level={2}>h2</Child>
    <Child  level={2}>h3</Child>
 </ParentContext>
)

}


