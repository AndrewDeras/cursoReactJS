import React from 'react'
// useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';
//hooks
import HookUseEffect from '../components/HookUseEffect';
import HookUseReducer from '../components/HookUseReducer';
import HookUseState from '../components/HookUseState';
import HookUSeRef from '../components/HookUSeRef';
import HookUSeCallBack from '../components/HookUSeCallBack';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHanlde from '../components/HookUseImperativeHanlde';
import HookCustom from '../components/HookCustom';

const Home = () => {

  const { contextValue } = useContext(SomeContext)
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUSeRef />
      <HookUSeCallBack />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHanlde />
      <HookCustom />
    </div>
  )
}

export default Home