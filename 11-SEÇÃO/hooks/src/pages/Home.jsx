import React from 'react'
import HookUseReducer from '../components/HookUseReducer'
//hooks
import HookUseState from '../components/HookUseState'

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
    </div>
  )
}

export default Home