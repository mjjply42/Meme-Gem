import React, { Component } from 'react'
import './component-style.css'

class Header extends Component {
    
    render()    {
        return  (
            <div className="header">
                <h1 className="greeting">Hello</h1>
            </div>
        )
    }
}

export default Header