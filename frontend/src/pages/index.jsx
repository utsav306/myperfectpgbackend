import AppDownloadSection from '@/components/AppPart'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingHero'
import PopularPGSection from '@/components/PopularPg'
import StudentSuccessSection from '@/components/StudentSuccess'
import React from 'react'

const index = () => {
  return (
    <>
    <LandingPage></LandingPage>
    <PopularPGSection></PopularPGSection>
    <StudentSuccessSection></StudentSuccessSection>
 
    <AppDownloadSection></AppDownloadSection>

    <Footer></Footer>
    </>
  )
}

export default index