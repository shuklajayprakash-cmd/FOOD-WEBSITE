import Navbar  from "./components/Navbar";
import Hero from  "./components/Hero";
import FoodCard from "./components/FoodCard";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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

      <About />

      <Footer />
    </>
  );
}

export default App;