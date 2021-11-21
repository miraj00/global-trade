import React ,{useState } from 'react';
import WorldMap from 'react-world-map';


function YourMainComponent() {
  const [selected, onSelect] = useState();
  return (
    <>
      <h1> Hello World Map!</h1>
      <WorldMap selected={ selected } onSelect={ onSelect } />
    </>
  );
}
export default WorldMap;
