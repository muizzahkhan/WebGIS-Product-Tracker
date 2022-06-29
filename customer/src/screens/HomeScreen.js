import Map from '../components/Map'
import geojson from '../sample.json'

const HomeScreen = () => {
  return (
    <>
    <Map ownerData={geojson} />
    </>
  )
}

export default HomeScreen