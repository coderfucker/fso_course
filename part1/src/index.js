import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <p>Hello {props.name}, you are {props.age} years old</p>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
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

  const course = 'Half Stack application development'

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