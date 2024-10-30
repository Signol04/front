import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_camisas } from "../../../Data/mens_camisas";

const HomePage = () => {
  return (
    <div>
        <MainCarousel></MainCarousel>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_camisas} sectionName={"Camisas de Hombre"}/>
            <HomeSectionCarousel data={mens_camisas} sectionName={"Zapatillas de Hombre"}/>
            <HomeSectionCarousel data={mens_camisas} sectionName={"Polos de Hombre"}/>
            <HomeSectionCarousel data={mens_camisas} sectionName={"Mujer Calzado"}/>
            <HomeSectionCarousel data={mens_camisas} sectionName={"Mujer"}/>
        </div>
    </div>
  )
}

export default HomePage