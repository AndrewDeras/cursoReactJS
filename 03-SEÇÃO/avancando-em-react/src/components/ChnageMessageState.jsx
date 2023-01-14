import React from 'react'

const ChnageMessageState = ({ handleMessage }) => {
  const msg = ['oi', 'olá', 'oi, tudo bem?'];
  return (
    <div>
      <button onClick={()=>handleMessage(msg[0])} >1</button>
      <button onClick={()=>handleMessage(msg[1])} >2</button>
      <button onClick={()=>handleMessage(msg[2])} >3</button>
    </div>
  )
}

export default ChnageMessageState