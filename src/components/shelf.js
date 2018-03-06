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
        axios.get(`http://localhost:3030/api/:?shelf=${this.props.match.params.shelfletter}`).then(
            res => {
                
                this.setState({shelf: res.data });

                console.log(this.state.shelf)
            }
            
        )
        
    }


    render(){
        var {shelfletter} = this.props.match.params;
        var {shelf} = this.state;

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
                   
                { shelf.length === 2 ?
                        <div>{<Link to={`/bin/${shelfletter}/1`}><button className="bincontents"></button></Link>}
                        </div> : <Link to='/create'><button className="shelfButt"></button></Link> }
                   
                    <Link to={`/bin/${shelfletter}/1`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/2`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/3`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/4`}><button className="bincontents"></button></Link>

                    <Link to={`/bin/${shelfletter}/5`}><button className="bincontents"></button></Link>
                    { this.state.shelf[0] ?
                        <div>{this.state.shelf[0].item } {this.state.shelf[0].price } 
                        </div> : null}
                </div>
                
            </div>
        )

    }

}