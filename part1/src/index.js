import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* 1.1
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}
const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = () => {
  return (
    <div>
      <Part name="Fundamentals of React" exercises={10} />
      <Part name="Using props to pass data" exercises={7} />
      <Part name="State of a component" exercises={14} />
    </div>
  )
}

const Total = () => {
  return (
    <p>Number of exercises {10 + 7 + 14}</p>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  const name = 'Peter'
  const age = 10

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: "Fundamentals of React",
      exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <h1>Greeting</h1>
      <Hello name="Mayo" age={26 + 10} />
      <Hello name={name} age={age} />

      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
*/


/* 1.2
const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  console.log('render...')
  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text="zero" /> 
      <Button handleClick={decreaseByOne} text='minus' /> 
    </div>
  )
}
*/

/* 1.3
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: { props.allClicks.join(' ') }
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRigth] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRigth(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
*/
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)

  // const handleClick = () => {
  //   console.log('clicked the button')
  //   setValue(0)
  // }

  const setToValue = (newValue) => {
    setValue(newValue)
  }


  const hello = (who) => () => {
    console.log('hello', who)
  }

  return (
    <div>
      <Display value={value} />
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('world')}>button</button>
      {/* <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button> */}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)