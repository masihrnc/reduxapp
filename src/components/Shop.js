import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state';

const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Deposits/Withdraw your Money</h2>
     *\ <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>

      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
    
    </div>
  )
}

export default Shop
