import React from "react"
import { TeamSection, FooterSection } from "../sections/gdg";
import PageWrapper from '../components/PageWrapper'

const About = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <TeamSection className="about-us-team-area" />
      <FooterSection />
    </PageWrapper>
  )
}

export default About
