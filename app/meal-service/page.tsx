import MenuPage from '../components/MenuPage'

const mealServiceItems = [
 {
   name: "Weekly Curry Box",
   description: "5 different curries for the week",
   price: "$59.99",
   category: "Meal Plans"
 },
 {
   name: "Vegetarian Delight",
   description: "7 days of vegetarian meals",
   price: "$49.99",
   category: "Meal Plans"
 },
 {
   name: "Protein Pack",
   description: "High-protein Indian meals for fitness enthusiasts",
   price: "$69.99",
   category: "Meal Plans"
 },
 {
   name: "Family Feast",
   description: "Large portions for family dinners",
   price: "$79.99",
   category: "Meal Plans"
 },
 // Add more meal service items as needed
]

export default function MealService() {
 return <MenuPage title="Meal Service" menuItems={mealServiceItems} />
}

