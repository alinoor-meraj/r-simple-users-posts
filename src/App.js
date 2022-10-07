import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import SinglePost from './Component/SinglePost/SinglePost';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/post/:id" element={ <SinglePost /> } />
        <Route path="/*" element={ <NoMatch /> } />
      </Routes>
    </Router>

  );
}

export default App;
