import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from "../Redux/Counterslice"

function Counter() {


  const count = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
              {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Counter;
