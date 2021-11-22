import React ,{useState,useMemo } from 'react';
import WorldMap from 'react-world-map';
import Select from 'react-select'
import countryList from 'react-select-country-list'


function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

function YourMainComponent() {
  const [selected, onSelect] = useState();
  return (
    <>
      <h1> Hello World Map!</h1>
      <WorldMap selected={ selected } onSelect={ onSelect } />
      <Select options={options} value={value} onChange={changeHandler} />
      
    </>
  );
  }
}
export default WorldMap;
