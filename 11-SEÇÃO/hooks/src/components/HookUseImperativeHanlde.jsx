import { useRef } from 'react';

import SomeComponent from './SomeComponent';

const HookUseImperativeHanlde = () => {

  const componentRef = useRef();

  return (
    <div>
      <h2>HookUseImperativeHanlde</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()} >Validate</button>
      <hr />
    </div>
  )
}

export default HookUseImperativeHanlde