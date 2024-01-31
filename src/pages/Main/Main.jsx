import { Home } from '../Home/Home'
import SectionAbout from '../../components/SectionAbout/SectionAbout'
import SectionTeam from '../../components/SectionTeam/SectionTeam'
import Pricing from '../../components/SectionPricing/SectionPricing'
import SectionTestimonial from '../../components/SectionTestimonial/SectionTestimonial'
import SectionGallery from '../../components/SectionGallery/SectionGallery'

export function Main() {
  
  return (
    <>
      <Home />
      <SectionAbout />
      <SectionTeam />
      <Pricing />
      <SectionGallery />
      <SectionTestimonial />
    </>
  )
  
}