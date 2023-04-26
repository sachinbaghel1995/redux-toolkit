import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
  const show=useSelector(state=>state.showCounter)
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const increaseBy5Handler=()=>{
    dispatch(counterActions.increase(5))
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      {show &&<button>{counter}</button>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseBy5Handler}>incrementby5</button>
        <button onClick={toggleCounterHandler}>togglecounter</button>
      </div>
    </main>
  );
};

export default Counter;
