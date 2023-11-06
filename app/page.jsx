"use client"

import CountButton from "./CountButton"
import CountButton2 from "./CountButton2"
import FakeStoreApi from "./FakeStoreApi"

export default function Page() {
    const imgStyle = {
      width: '300px',
      height: '150px',    
    }
    
    return (
      <div>
        <CountButton /> 
        <CountButton2 />
        <a href="https://github.com/ShaneCost/demoReact">Link to GitHub Repo</a>
        <FakeStoreApi />
      </div>
    )
  }