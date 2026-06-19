import "./App.css";
import { useState, useEffect } from "react";
import Navbar  from "./components/Navbar";
import Hero from  "./components/Hero";
import FoodCard from "./components/FoodCard";
import About from "./components/About";
import Footer from "./components/Footer";
 import { supabase } from "./supabase";
 

import "./App.css";
 
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
   const {data} =  await supabase.from('Product').select("*")
setNames(data)
   setName("")
   
  }

    async function deleteName(id){
  
   await supabase.from("Product").delete().eq("id",id)
   fetchName()
  }
  useEffect(()=>{
   fetchName();
  },[])


  return (
    <>
      <Navbar />

      <Hero />

      <section className="foods">
        <h2>Featured Dishes</h2>

        <div className="food-grid">
          <FoodCard
            title="Burger"
            price="₹149"
            image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          />

          <FoodCard
            title="Pizza"
            price="₹299"
            image="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          />

          <FoodCard
            title="Pasta"
            price="₹199"
            image="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
          />
 
        </div>
      </section>

      
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


      <About />

      <Footer />
    </>
  );
}

export default App;