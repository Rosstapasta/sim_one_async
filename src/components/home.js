import React, { Component } from 'react';
import './comp.css';
import { Link } from 'react-router-dom';
import logo from './download.png';

export default class Home extends  Component{

    render(){
        return (
            <div>

                <div className="homehead">
                    <img className="image" src={logo} alt="logo"/>
                    <p className="headtext">Shelfie</p>
                </div>

                    <div className="body">

                        <Link to="/shelf/A">
                            <button className="shelfButt">Shelf A</button>
                        </Link>

                        <Link to="/shelf/B">
                            <button className="shelfButt">Shelf B</button>
                        </Link>

                        <Link to="/shelf/C">
                            <button className="shelfButt">Shelf C</button>
                        </Link>

                        <Link to="/shelf/D">
                            <button className="shelfButt">Shelf D</button>
                        </Link>

                    </div>
            </div>
        )
    }
}