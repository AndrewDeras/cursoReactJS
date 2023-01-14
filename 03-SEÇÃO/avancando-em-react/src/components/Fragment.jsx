import React from 'react'

const Fragment = ({ propsFragment }) => {
  return (
    <>
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <h4>{propsFragment}</h4>
    </>
  )
}

export default Fragment