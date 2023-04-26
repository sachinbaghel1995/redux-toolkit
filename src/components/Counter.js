import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
  const show=useSelector(state=>state.showCounter)
  const incrementHandler=()=>{
    dispatch({type:'increment',})
  }
  const decrementHandler=()=>{
    dispatch({ type:'decrement' })
  }
  const increaseBy5Handler=()=>{
    dispatch({type:'increase',amount:5})
  }
  const decreaseBy5Handler=()=>{
    dispatch({type:'decrease',amount:5})
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      {show && <button onClick={toggleCounterHandler}>{counter}</button>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseBy5Handler}>incrementby5</button>
        <button onClick={decreaseBy5Handler}>decrementby5</button>
      </div>
    </main>
  );
};

export default Counter;
