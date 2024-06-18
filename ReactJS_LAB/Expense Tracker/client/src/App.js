import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewData from './components/ViewData';
import AddExpence from './components/AddExpence';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<ViewData></ViewData>}> </Route>
        <Route path="/add" element ={<AddExpence></AddExpence>}> </Route>
      </Routes>

      </BrowserRouter>
 
    </div>
  );
}

export default App;
