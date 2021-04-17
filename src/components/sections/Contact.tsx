import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { H4 } from '../../../theme/Typography'
import ContactInfo from '../shared/ContactInfo'
import Map from '../shared/Map'
import Section from '../shared/Section'

const ContactWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);

  & > article {
    ${cardBasicStyle}
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 767px) {
    }
  }
`
const MapStyles = styled.article`
  grid-row: 1/-1;
  grid-column: 2/-1;
  overflow: hidden;

  @media (max-width: 767px) {
    grid-column: 1/-1;
    grid-row: 3 / -1;
  }
`
const AderesStyles = styled.article`
  padding: 3rem;
  grid-row: 1 / span 2;
  grid-column: 1/1;

  @media (max-width: 767px) {
    grid-column: 1/-1;
    grid-row: 1 / span 1;
  }
`
const WorkingHoursStyles = styled.article`
  padding: 3rem;
  grid-row: 3 / span 2;
  grid-column: 1/1;

  @media (max-width: 767px) {
    grid-column: 1/-1;
    grid-row: 2 / span 1;
  }
`

const Contact = () => {
  const { contactHeading, fullTitle, openHours } = CONSTS

  return (
    <Section heading={contactHeading}>
      <ContactWrapper>
        <MapStyles>
          <Map infoWindow />
        </MapStyles>
        <AderesStyles>
          <H4>{fullTitle}</H4>
          <ContactInfo />
        </AderesStyles>
        <WorkingHoursStyles>
          <H4>Godziny Pracy</H4>
          {openHours.map(({ days, hours }) => (
            <div key={days}>
              <p>{days}:</p>
              <p>{hours}</p>
            </div>
          ))}
        </WorkingHoursStyles>
      </ContactWrapper>
    </Section>
  )
}

export default Contact
