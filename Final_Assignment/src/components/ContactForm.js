import {useState} from 'react';
export default function ContactForm(){
const [f,setF]=useState({n:'',e:'',d:'',m:''});
const today=new Date().toISOString().split('T')[0];
const submit=e=>{e.preventDefault();console.log(f);setF({n:'',e:'',d:'',m:''});};
return (<form onSubmit={submit}>
<input required className='form-control mb-2' placeholder='Name' value={f.n} onChange={e=>setF({...f,n:e.target.value})}/>
<input required type='email' className='form-control mb-2' placeholder='Email' value={f.e} onChange={e=>setF({...f,e:e.target.value})}/>
<input required type='date' min={today} className='form-control mb-2' value={f.d} onChange={e=>setF({...f,d:e.target.value})}/>
<textarea className='form-control mb-2' placeholder='Message' value={f.m} onChange={e=>setF({...f,m:e.target.value})}/>
<button className='btn btn-success'>Submit</button>
</form>);
}