import AboutUs from "@/components/aboutUs"
import FoodCategory from "@/components/foodCategory"
import Hero from "@/components/hero"
import MenuCom from "@/components/menu"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home(){
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
       <FoodCategory />
       <MenuCom />
       <Footer />
    </div>
  )
}
