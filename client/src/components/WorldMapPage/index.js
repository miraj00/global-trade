import React ,{useState,useMemo } from 'react';
import WorldMap from 'react-world-map';
import Select from 'react-select'
// import countryList from 'react-select-country-list'



function WorldMapPage() {
  const [selected, onSelect] = useState();
  return (
   <div style={{display:'flex'}}>
      <div className="margin10" > <WorldMap selected={ selected } onSelect={ onSelect } />  </div>
          
    </div>
  );
  }

export default WorldMapPage;
