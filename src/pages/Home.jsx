import HeroCarousel from "../components/Home/HeroCarousel"
import Impact from "../components/Home/Impact"
import OurProgammes from "../components/Home/OurProgammes"
import AchievementGoals from "../components/Home/AchievementGoals"
import Stories from "../components/Home/Stories"
import SupportACause from "../components/Home/SupportACause"
import Partners from "../components/Home/Partners"
import Testimonials from "../components/Home/Testimonials"
import Awards from "../components/Home/Awards"
import EmpanelmentAndAccreditations from "../components/Home/EmpanelmentAndAccreditations"

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Impact />
      <OurProgammes />
      {/* <AchievementGoals /> */}
      <Stories />
      <SupportACause />
      <Partners /> 
      <Testimonials />
      {/* <Awards />
      <EmpanelmentAndAccreditations /> */}
    </div>
  )
}

export default Home

