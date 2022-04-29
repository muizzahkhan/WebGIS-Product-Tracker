import {Card, Container, Row, Col} from 'react-bootstrap'
import { MapContainer, TileLayer, Marker, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CustControl from './CustControl'
import { divIcon } from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'


const Map = ({data}) => {

  const iconMarkup = renderToStaticMarkup(<i class="fa-brands fa-angellist"></i>)
  const customMarkerIcon = divIcon({html: iconMarkup, iconSize: [20,20]})

  return (
    <div className='rowC'>
    <Card className='text-center top-space ' border='warning'>
      <MapContainer center={[31.522913958674234, 74.40951346602674]} zoom={15} >

      <LayersControl position="topright">

        <LayersControl.Overlay checked name="Terrain View">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Satellite View">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="XYZ View">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
          
      </LayersControl>

        {data.map(pts => (
          <Marker key={pts.id} position={[pts.gps.latitude, pts.gps.longitude]} icon={customMarkerIcon} ></Marker>
        ))}

      </MapContainer>
    </Card>
    
    <Card className='side-space'>
      <CustControl />
    </Card>
    </div>
    
  )
}

export default Map