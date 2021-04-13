import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { H4, P } from '../../../theme/Typography'
import Section from './shared/Section'

const ContactWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);

  & > * {
    ${cardBasicStyle}
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
const MapStyles = styled.article`
  grid-row: 1/-1;
  grid-column: 2/-1;
`
const AderesStyles = styled.article`
  padding: 3rem;
  grid-row: 1 / span 2;
  grid-column: 1/1;
`
const WorkingHoursStyles = styled.article`
  padding: 3rem;
  grid-row: 3 / span 2;
  grid-column: 1/1;
`

const Contact = () => {
  return (
    <Section heading={CONSTS.contactHeading}>
      <ContactWrapper>
        <MapStyles></MapStyles>
        <AderesStyles>
          <H4>{CONSTS.fullTitle}</H4>
          <div>
            {CONSTS.adress.map((adres) => (
              <p key={adres}>{adres}</p>
            ))}
          </div>
          <div>
            <P>
              email:{' '}
              {CONSTS.emails.map((email, i) => (
                <span key={email}>
                  {i !== 0 && <>,</>} {email}
                </span>
              ))}
            </P>
            <P>
              tel:{' '}
              {CONSTS.telephones.map((tel, i) => (
                <span key={tel}>
                  {i !== 0 && <>,</>} {tel}
                </span>
              ))}
            </P>
          </div>
        </AderesStyles>
        <WorkingHoursStyles>
          <H4>Godziny Pracy</H4>
          {CONSTS.openHours.map(({ days, hours }) => (
            <P key={days}>
              <p>{days}:</p>
              <p>{hours}</p>
            </P>
          ))}
        </WorkingHoursStyles>
      </ContactWrapper>
    </Section>
  )
}

export default Contact
