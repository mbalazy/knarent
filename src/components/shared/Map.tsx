import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api'
import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent.svg'
import { P } from '../../../theme/Typography'

type MapProps = {
  infoWindow?: boolean
  disableDefaultUI?: boolean
  zoom?: number
}

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

const Map = ({ infoWindow, disableDefaultUI, zoom = 14 }: MapProps) => {
  const { adress, linkToExternalMap, mapCenter } = CONSTS
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_MAPS}`,
  })
  if (loadError) {
    return <div>Błąd mapy, nie możemy jej w tej chwili wyświetlić. Przepraszamy :(</div>
  }

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={zoom}
        options={{ disableDefaultUI }}
      >
        <Marker position={mapCenter} />
        {infoWindow && (
          <InfoWindow position={mapCenter}>
            <InfoWindowStyles>
              <BigLogo />
              <div>
                {adress.map((adres) => (
                  <P key={adres}>{adres}</P>
                ))}
              </div>
              <LinkStyles href={linkToExternalMap} target="_blank">
                Sprawdź dojazd
              </LinkStyles>
            </InfoWindowStyles>
          </InfoWindow>
        )}
      </GoogleMap>
    )
  )
}

export default React.memo(Map)
