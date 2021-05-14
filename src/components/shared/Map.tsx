import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent.svg'
import CONSTS from '../../../theme/CONSTS'
import { P } from '../../../theme/Typography'
import { InfoWindowStyles, LinkStyles } from './Map.style'

type MapProps = {
  infoWindow?: boolean
  disableDefaultUI?: boolean
  zoom?: number
}

//must be a normal object because of google map API
const containerStyle = {
  width: '100%',
  height: '100%',
}

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
