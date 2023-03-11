import './App.css';
import * as React from 'react';
// import Home from './components/Home';
import { HomePanel } from './components/HomePanel';
import AllRoutes from './router/AllRoutes';


function App() {
  return (
    <div className="tokyo_tm_all_wrap">
      {/* routes */}
      {/* <Home /> */}
      <AllRoutes />

    </div>
  );
}

export default App;
