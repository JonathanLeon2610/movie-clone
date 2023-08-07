import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/views/Home';
import MovieDetails from './Components/views/MovieDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/MovieDetails" element={<MovieDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
