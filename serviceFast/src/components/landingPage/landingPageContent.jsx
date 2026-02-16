import React from 'react'
import Services from './services.jsx'
import OpinionCards from './opinionCards.jsx';
import Ubicacion from './ubicacion.jsx';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function LandingPageContent()  {
  return (
    <>
    <Services/>
    <OpinionCards/>
    <Ubicacion/>
    </>)
}
export default LandingPageContent;