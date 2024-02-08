import { Home } from '../Home/Home'
import SectionAbout from '../../components/SectionAbout/SectionAbout'
import SectionTeam from '../../components/SectionTeam/SectionTeam'
import Pricing from '../../components/SectionPricing/SectionPricing'
import SectionTestimonial from '../../components/SectionTestimonial/SectionTestimonial'
import SectionGallery from '../../components/SectionGallery/SectionGallery'
import SectionContact from '../../components/SectionContact/SectionContact'
import GoToTop from '../../components/GoToTop'

export function HomePage() {
  
  return (
    <>
      
      <Home />
      <SectionAbout />
      <SectionTeam />
      <Pricing />
      <SectionGallery />
      <SectionTestimonial />
      <SectionContact />
    </>
  )
  
}