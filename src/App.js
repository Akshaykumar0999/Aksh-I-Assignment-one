
import './App.css';
import Home from './components/Home'
import AddCategories from './components/AddCategories';
import SubCategories from './components/SubCategories';
import Categories from './components/Categories'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" Component={Home}/>
        <Route exact path='/add-category' Component={AddCategories} />
        <Route exact path='/sub-categories' Component={SubCategories} />
        <Route exact path='/categories' Component={Categories} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
