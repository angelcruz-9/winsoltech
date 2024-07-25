import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './components/layout/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
