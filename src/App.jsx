
// Importo recursos
import './App.css';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <div className="App" data-scroll-container>      
      <BrowserRouter>
          <AnimatedRoutes />       
      </BrowserRouter>
    </div>
  );
}

export default App;
