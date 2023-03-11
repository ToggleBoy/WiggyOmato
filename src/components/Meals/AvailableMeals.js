import React from "react";
import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Sausage & Egg",
    description: "Cumberland Sausage, Fried egg, Chips",
    price: 12.95,
  },
  {
    id: "m6",
    name: "Wholetail Scampi",
    description: "Chips, salad, peas & sauce",
    price: 12.59,
  },
  {
    id: "m7",
    name: "Ham & Egg",
    description: "Chips, Fried egg & salad",
    price: 10.99,
  },
  {
    id: "m8",
    name: "Chicken Supreme",
    description: "Cheddar and bacon sauce",
    price: 18.99,
  },
  {
    id: "m9",
    name: "Squash Tagine",
    description: "With red Onion, wild rice & salad",
    price: 14.99,
  },
  {
    id: "m10",
    name: "Battered Chicken Strips",
    description: "Chips, BBQ dip & onion rings",
    price: 15.99,
  },

];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
        id ={meal.id}
        key={meal.id}
        name ={meal.name}
        description ={meal.description}
        price = {meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
