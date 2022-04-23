This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


## Updates
* @propname: value => to be when you need to control the selected date state of the calendar from another parent component
* @propname: disablePastDays => disabling and enabling teh past days 

## react-horizontal-strip-datepicker

A stable horizontal date picker with the option to scroll for web
![Example](https://i.imgur.com/BaNEgIS.png?1)

### Installation

Run `npm i git+https://github.com/Mwebia-Dennis/react-horizontal-datepicker.git`

### Usage

Import:

`import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";`

and use as:

```javascript
<ReactHorizontalDatePicker
  selectedDay={onSelectedDay}
  enableScroll={true}
  enableDays={80}
  enableDaysBefore={2}
  value={new Date()}
  disablePastDays={true}
/>
```

Available Props are

| Prop               | Type     | Default | Description                                |
| ------------------ | -------- | ------- | ------------------------------------------ |
| enableScroll       | Boolean  | false   | Set List to be scrollable                  |
| selectedDay        | Function |         | Function to get the selected Day           |
| enableDays         | Number   | 90      | Number of days to render from current date |
| enableDaysBefore   | Number   | 0     | Number of days to render before current date |
| value              | Date     | new Date()| a date to control the selected date |
| disablePastDays     | Boolean   | true     | disbale days in the past |


enableDays has no effect if enableScroll is true.

Example:

```javascript
import React from 'react'

import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker'
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css'

const App = () => {
  const onSelectedDay = (d) => {
    console.log(d)
  }

  return (
    <ReactHorizontalDatePicker
      selectedDay={onSelectedDay}
      enableScroll={true}
      enableDays={180}
      enableDaysBefore={2}
      value={new Date()}
      disablePastDays={true}
    />
  )
}

export default App
```
