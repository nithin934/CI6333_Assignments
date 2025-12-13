import {useSelector,useDispatch} from 'react-redux';
import {useState} from 'react';
export default function ReduxTodo(){
const [task,setTask]=useState('');
const {tasks,completed}=useSelector(s=>s);
const d=useDispatch();
return (<div>
<h3>Redux ToDo</h3>
<input className='form-control' value={task} onChange={e=>setTask(e.target.value)}/>
<button className='btn btn-primary mt-2' onClick={()=>d({type:'ADD_TASK',payload:task})}>Add Task</button>
<ul className='list-group mt-3'>
{tasks.map((t,i)=>(<li key={i} className='list-group-item'>{t}
<button className='btn btn-success btn-sm float-end ms-2' onClick={()=>d({type:'COMPLETE_TASK',payload:i})}>Complete</button>
<button className='btn btn-danger btn-sm float-end' onClick={()=>d({type:'DELETE_TASK',payload:i})}>Delete</button>
</li>))}
</ul>
<h5 className='mt-3'>Completed Tasks</h5>
<ul className='list-group'>{completed.map((c,i)=><li key={i} className='list-group-item'>{c}</li>)}</ul>
</div>);
}