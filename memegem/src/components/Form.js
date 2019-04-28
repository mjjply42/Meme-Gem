import React, { Component } from 'react'
import image from '../mordor-meme.jpg'
import './component-style.css'

class Form extends Component   {
    constructor()   {
        super()
        this.state = {
            top: "",
            bottom: "",
            memeArr: [],
            meme: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ memeArr: memes })
                const rand_id = Math.floor(Math.random() * Math.floor(this.state.memeArr.length))
                this.setState({meme: this.state.memeArr[rand_id].url})
            })
    }

    handleChange(event)
    {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render()    {
        return (
            <form className="form-container" autoComplete="off">
                <input className="form-control left-input" name="top" onChange={this.handleChange}/>
                <input className="form-control right-input" name="bottom" onChange={this.handleChange}/>
                <br />
                <button type="button" className="btn btn-primary download" name="button">Save Meme!</button>
                <div className="meme-container">
                    <h2 className="top-text">{this.state.top}</h2>
                    <img className="meme-image"src={this.state.meme}></img>
                    <h2 className="bottom-text">{this.state.bottom}</h2>
                </div>
            </form>
        )
    }
}


export default Form