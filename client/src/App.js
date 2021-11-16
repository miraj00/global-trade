import React from 'react';
import Footer from './components/Footer';
import WorldMap from "./components/WorldMap";
import CountrySelector from "./components/map-list";
//import Cart from "./components/Cart";

 
function App() {
        return (
          <div><WorldMap />
              <CountrySelector />
             <Footer />
          </div>
        );
      }
export default App;
