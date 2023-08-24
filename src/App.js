
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LinkComponent from './Component/LinkComponent';
import RouteComponent from './Component/RouteComponent';

function App() {
  return (
    <>
    <BrowserRouter>
      <LinkComponent/>
      <RouteComponent/>
    </BrowserRouter>
    </>
  );
}

export default App;
