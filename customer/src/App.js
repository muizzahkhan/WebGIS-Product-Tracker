import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />

      <main>
      <Routes>
        <Route path='/' element={<HomeScreen/>} exact />
      </Routes>


      </main>

    </Router>
  );
}

export default App;
