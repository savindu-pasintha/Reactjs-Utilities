import React from 'react'
import './Loading.css'
export default function Loading() {
  return (
    <div className="overlay">
    <div className="overlay__inner">
        <div className="overlay__content"><span className="spinner"></span></div>
    </div>
</div>
  )
}
