import Map from '../components/Map'
import geojson from '../sample.json'

const HomeScreen = () => {

  return (
    <>
    <Map data={geojson} />

    </>
  )
}

export default HomeScreen