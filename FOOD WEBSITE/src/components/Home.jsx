import Hero from "./Hero";
import FoodCard from "./FoodCard";

function Home(){

return(
<>
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

</>
)

}

export default Home;