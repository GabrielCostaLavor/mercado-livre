import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import { Benefits } from '../components/Benefits'
import { CategorysPopularity } from '../components/CategorysPopularity'
import { CheckBanner } from '../components/CheckBanner'
import { CheckBanner2 } from '../components/CheckBanner2'
import { DealsDay } from '../components/DealsDay'
import { Footer } from '../components/Footer'
import { FooterTop } from '../components/FooterTop'
import { LojaBanner } from '../components/LojaBanner'
import { PaymentMethods } from '../components/PaymentMethods'
import { SingInBenefits } from '../components/SingInBenefits'

const Home: NextPage = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
    <Box as='section'>
      <Banner />
      <PaymentMethods />
      <DealsDay />
      <SingInBenefits />
      <Benefits />
      <CheckBanner />
      <LojaBanner />
    </Box>
    <Box as='section'>
      <CheckBanner2 />
      <CategorysPopularity />
    </Box>
    <FooterTop/>
    </>
  )
}

export default Home
