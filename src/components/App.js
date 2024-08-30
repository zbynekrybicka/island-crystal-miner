import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

import helloAction from '../actions/helloAction'
import incrementAction from '../actions/incrementAction'

import helloAtom from '../recoil/helloAtom'
import loaderAtom from '../recoil/loaderAtom'
import testValueAtom from '../recoil/testValueAtom'

function App() {
  const [ loader, setLoader ] = useRecoilState(loaderAtom)
  const testValueState = useRecoilState(testValueAtom)

  const setHello = useSetRecoilState(helloAtom)

  const helloValue = useRecoilValue(helloAtom)
  const [testValue] = testValueState

  return (
    <div className="App">
        {loader && <div className="loader">...</div>}
        {testValue}
        <button onClick={() => incrementAction(testValueState)}>Increment</button>
        <hr />
        {helloValue}
        <button onClick={() =>helloAction(setLoader, setHello)}>Hello</button>
    </div>
  );
}

export default App;
