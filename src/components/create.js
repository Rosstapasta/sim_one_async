import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './download.png';

export default class Create extends  Component{
    render(){
        return (
            <div>
                    <div className="head2">

                    <div id="homehead2" className="homehead">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>

                    <div id="shelfhead2" className="homehead">
                        <Link to={`/shelf/${this.props.match.params.shelfletter}`} style={{ textDecoration: 'none' }}><div className="something">Shelf { this.props.match.params.shelfletter }</div></Link>
                    </div>

                    <div id="binhead" className="homehead">
                        <div>Add to Bin { this.props.match.params.num }</div>
                    </div>

                    </div>

                    <div id="createbody" className="body">

                        <p className="createtext">Name</p>
                        <input className="createinput"></input>
                        <p className="createtext">Price</p>
                        <input className="createinput" placeholder="$0"></input>
                        <button className="createbutt">+ Add to inventory</button>

                    </div>
                
            </div>
        )
    }
}