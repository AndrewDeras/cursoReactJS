import React from 'react'

type Props = {
  name: string;
}

const SecondComponent = ({ name }: Props) => {
  return (
    <div>
      <p>SecondComponent</p>
      <p>His name is : {name}</p>
    </div>
  )
}

export default SecondComponent