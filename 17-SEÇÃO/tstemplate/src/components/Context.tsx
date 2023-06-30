import React, { useContext } from 'react'

import { AppContext } from '../App'


const Context = () => {
  const details = useContext(AppContext);

  return (
    <>
      {details && (
        <div>
          <h3>Time: {details.team}</h3>
          <h3>País: {details.country}</h3>
          <h3>Champions League: {details.championsLeague}</h3>
        </div>
      )}
    </>
  )
}

export default Context