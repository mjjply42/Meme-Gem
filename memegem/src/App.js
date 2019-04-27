import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render()  {
    return (
      <div className="container">
        <div className="main-section">
          <Header />
          <Form />
        </div>
      </div>
    
    )
  }
}

export default App;
