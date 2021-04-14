import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api'
import { GOOGLE_MAPS } from 'gatsby-env-variables'
import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../../theme/CONSTS'
import { ReactComponent as BigLogo } from '../../../../images/logo_knarent.svg'
import { P } from '../../../../theme/Typography'

const containerStyle = {
  width: '100%',
  height: '100%',
}
const InfoWindowStyles = styled.div`
  padding: 1.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: space-between;
  align-items: flex-start;
`
const LinkStyles = styled.a`
  padding: 0.6rem 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  align-self: stretch;
  text-align: center;
`
const position = CONSTS.mapCenter
const link =
  'https://www.google.com/maps/place/Wypo%C5%BCyczalnia+sprz%C4%99tu+budowlano-ogrodniczego+Knarent/@50.3732841,19.7912093,16z/data=!4m5!3m4!1s0x0:0x28a737f6c2e567b2!8m2!3d50.373889!4d19.794068'

const Map = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: `${GOOGLE_MAPS}`,
  })
  if (loadError) {
    return <div>Nie możemy załadować mapy</div>
  }
  const { adress } = CONSTS

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={14}>
        <Marker position={position} />
        <InfoWindow position={position}>
          <InfoWindowStyles>
            <BigLogo />

            <div>
              {adress.map((adres) => (
                <P key={adres}>{adres}</P>
              ))}
            </div>
            <LinkStyles href={link} target="_blank">
              Sprawdź dojazd
            </LinkStyles>
          </InfoWindowStyles>
        </InfoWindow>
      </GoogleMap>
    )
  )
}

export default React.memo(Map)
