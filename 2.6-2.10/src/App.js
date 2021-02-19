import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    for (const person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        return
      }
    }

    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterBlur = (event) => {
    const filter = event.target.value
    const personsFilter = !filter
      ? persons
      : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

    setPersons(personsFilter)
  }

  return (
    <div>
      <div>
        filter shown with <input onBlur={handleFilterBlur} />
      </div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person} />)}
      </ul>
    </div>
  )
}

export default App