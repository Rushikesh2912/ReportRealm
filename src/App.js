import './App.css';
import NavBar from './components/Nav';
import React, { useState } from 'react'
import News from './components/News';
import Footer from './components/Footer'
import {
 HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  const pageSize = 9;

  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <NavBar />
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} category={'general'} />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} category={'business'} />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} category={'entertainment'} />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} category={'general'} />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} category={'health'} />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} category={'science'} />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} category={'sports'} />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} category={'technology'} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
export default App;