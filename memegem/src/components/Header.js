import React, { Component } from 'react'
import './component-style.css'

class Header extends Component {
    
    render()    {
        return  (
            <div className="header">
                <h1 className="greeting">Meme Generator</h1>
            </div>
        )
    }
}

export default Header