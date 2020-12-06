const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  }
}

arto.greet()
setTimeout(arto.greet)
setTimeout(arto.greet.bind(arto))
