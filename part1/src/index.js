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

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }

    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }

    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)