import React from 'react';
import  './App.css'
import ReactHorizontalDatePicker from './ReactHorizontalDatePicker';

function App() {
 
  const onSelectedDay = (d) =>{
      console.log(d)
  };

  return (
    <ReactHorizontalDatePicker value={new Date()}
    enableDaysBefore={10} selectedDay={onSelectedDay} enableScroll={true} enableDays={180} disablePastDays={false}  /> 
  );
}

export default App;
