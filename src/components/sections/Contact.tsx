import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { H4 } from '../../../theme/Typography'
import ContactInfo from '../shared/ContactInfo'
import Map from '../shared/Map'
import Section from '../shared/Section'
import { AderesStyles, ContactWrapper, MapStyles, WorkingHoursStyles } from './Contact.style'

const Contact = () => {
  const { contactHeading, fullTitle, openHours } = CONSTS

  return (
    <Section id="kontakt" heading={contactHeading}>
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
