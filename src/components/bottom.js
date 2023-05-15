import '../home.css'
import { useDispatch, useSelector } from 'react-redux';
function Bottom() {
  const count = useSelector(state => state.index);
  const dispatch = useDispatch();
  const change = (params) => {
    dispatch({ type: 'CHANGE',index:params });
  };
  return (
    <div className="tab-bar">
      <div className={`${count===1 ? 'tab-bar-item-active' : 'tab-bar-item'}`} onClick={() => change(1)}></div>
      <div className={`${count===2 ? 'tab-bar-item-active' : 'tab-bar-item'}`} onClick={() => change(2)}></div>
      <div className={`${count===3 ? 'tab-bar-item-active' : 'tab-bar-item'}`} onClick={() => change(3)}></div>
      <div className={`${count===4 ? 'tab-bar-item-active' : 'tab-bar-item'}`} onClick={() => change(4)}></div>
    </div>
  );
}

export default Bottom;