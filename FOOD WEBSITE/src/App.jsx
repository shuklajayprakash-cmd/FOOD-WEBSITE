import "./App.css";
import { useState, useEffect } from "react";
import Navbar  from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Hero from  "./components/Hero";
import FoodCard from "./components/FoodCard";
import About from "./components/About";
import Footer from "./components/Footer";
 import { supabase } from "./supabase";
 
 
function App() {
  
const [name, setName] = useState("");
const [names, setNames] = useState([]);

 async function addName() {

  await supabase
    .from("Product")
    .insert({
      name: name
    });

  fetchName();
  setName("");
}

  async function fetchName() {

const {data} = await supabase
.from('Product')
.select("*")

setNames(data)

}

    async function deleteName(id){
  
   await supabase.from("Product").delete().eq("id",id)
   fetchName()
  }
  useEffect(()=>{
   fetchName();
  },[])


 return (
<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/menu" element={<Menu />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />

</Routes>

<div className="customer-box">

      <input 
  placeholder="Enter Customer Name"
  value={name}
  onChange={(e)=>setName(e.target.value)}
/>

      <button onClick={addName}>
        Add Name
      </button>

      <button onClick={fetchName}>
        Refresh user
      </button>

      <hr />

      {names.map((n)=>(
        <h2 key={n.id}>
          {n.name}
          <button onClick={()=>deleteName(n.id)}>
            Delete
          </button>
        </h2>
      ))}

    </div>
 

<Footer />

 </BrowserRouter>
 );
}

export default App;