import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ReduxTodo from "./components/ReduxTodo";
import CrudApi from "./components/CrudApi";
import ContactForm from "./components/ContactForm";
import PhotoGallery from "./components/PhotoGallery";

export default function App(){
return (
<Router>
<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
<div className="container">
<Link className="navbar-brand" to="/">Portfolio</Link>
<div className="navbar-nav">
<Link className="nav-link" to="/">Home</Link>
<Link className="nav-link" to="/about">About</Link>
<Link className="nav-link" to="/redux">Redux</Link>
<Link className="nav-link" to="/crud">CRUD</Link>
<Link className="nav-link" to="/contact">Form</Link>
<Link className="nav-link" to="/gallery">Gallery</Link>
</div>
</div>
</nav>
<div className="container mt-4">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/redux" element={<ReduxTodo/>}/>
<Route path="/crud" element={<CrudApi/>}/>
<Route path="/contact" element={<ContactForm/>}/>
<Route path="/gallery" element={<PhotoGallery/>}/>
</Routes>
</div>
</Router>
);
}