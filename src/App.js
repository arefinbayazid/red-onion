import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Homepage></Homepage>}></Route>
        <Route path = '/home' element = {<Homepage></Homepage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
