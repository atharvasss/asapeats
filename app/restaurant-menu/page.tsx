import MenuPage from '../components/MenuPage'

const restaurantMenuItems = [
 {
   name: "Butter Chicken",
   description: "Tender chicken in a creamy tomato sauce",
   price: "$18.99",
   category: "Mains"
 },
 {
   name: "Vegetable Biryani",
   description: "Fragrant rice dish with mixed vegetables",
   price: "$16.99",
   category: "Mains"
 },
 {
   name: "Garlic Naan",
   description: "Flatbread with garlic and herbs",
   price: "$3.99",
   category: "Breads"
 },
 {
   name: "Mango Lassi",
   description: "Refreshing yogurt drink with mango",
   price: "$4.99",
   category: "Drinks"
 },
 // Add more menu items as needed
]

export default function RestaurantMenu() {
 return <MenuPage title="Restaurant Menu" menuItems={restaurantMenuItems} />
}

