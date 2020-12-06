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

/* 1.4
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
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
*/

/* exercise 1.1 - 1.11
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const Statistics = (props) => {
  if (!(props.good || props.neutral || props.bad)) {
    return <div>No feedback given</div>
  }

  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all || 0
  const positive = (props.good / all) * 100 || 0
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>netural</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (val, level) => () => {
    switch(level) {
      case 'good': setGood(val); break
      case 'netural': setNeutral(val); break
      case 'bad': setBad(val); break
    }
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={setToValue(good + 1, 'good')} text='good' />
      <Button handleClick={setToValue(neutral + 1, 'netural')} text='netural' />
      <Button handleClick={setToValue(bad + 1, 'bad')} text='bad' />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

*/
const Anecdote = ({ text, votes=0 }) => {
  return (
    <div>    
      <div>
        {text}
      </div>
      <div>
        has {votes} votes
      </div>
    </div>    
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [mostVotes, setMostVotes] = useState(0)

  const next = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    while (random === selected) {
      random = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(random)
  }

  console.log('smida--->', votes)
  const vote = () => {
    const seletedVoteCount = votes[selected] || 0
    setVotes({
      ...votes,
      [selected]: seletedVoteCount + 1
    })

    if (!votes[mostVotes] || seletedVoteCount + 1 > votes[mostVotes]) {
      setMostVotes(selected)
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />
      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Anecdote text={props.anecdotes[mostVotes]} votes={votes[mostVotes]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)