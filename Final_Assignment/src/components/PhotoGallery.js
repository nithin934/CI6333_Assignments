import axios from 'axios';
import {useEffect,useState} from 'react';
export default function PhotoGallery(){
const [photos,setPhotos]=useState([]);
const [page,setPage]=useState(1);
useEffect(()=>{axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`).then(r=>setPhotos(r.data));},[page]);
return (<div>
<h3>Photo Gallery</h3>
<div className='row'>{photos.map(p=>(
<div key={p.id} className='col-md-4 mb-3'>
<img loading='lazy' src={p.download_url} className='img-fluid' alt=''/>
</div>))}
</div>
<button className='btn btn-secondary me-2' disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button>
<button className='btn btn-secondary' onClick={()=>setPage(page+1)}>Next</button>
</div>);
}