import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './comp.css';
import logo from './download.png';
import axios from 'axios';

export default class Shelf extends  Component{
    constructor(){
        super()

        this.state = {
            shelf: []
        }
    }


    componentDidMount(){
        axios.get(`/api/?shelfletter=${this.props.match.params.shelfletter}`).then(
            res => {
                this.setState({shelf: res.data})
            }
        )
    }


    render(){
        var {shelfletter} = this.props.match.params
        return (
            <div>

                <div className="head2">

                    <div id="homehead2" className="homehead">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>

                    <div id="shelfhead" className="homehead">
                        <div>Shelf { this.props.match.params.shelfletter }</div>
                    </div>

                </div>

                <div className="body">

                    <Link to={`/bin/${shelfletter}/1`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/2`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/3`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/4`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/5`}><button className="bincontents"></button></Link>

                </div>
                
            </div>
        )
    }

}