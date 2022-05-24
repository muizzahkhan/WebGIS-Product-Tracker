import Map from '../components/Map'
import geojson from '../sample.json'
import AdmControl from '../components/AdmControl'

const AdminScreen = () => {
  return (
    <>
    <Map data={geojson} />
    </>
  )
}

export default AdminScreen