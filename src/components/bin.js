import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './download.png';

export default class Bin extends  Component{
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
                        <div>Bin { this.props.match.params.num }</div>

                    </div>

                </div>
                
                    <div className="binbod">

                        <div className="binplacehold"></div>

                        <div className="imgspot"></div>

                        <div className="therest">

                            <p className="createtext">Name</p>
                            <input className="createinput"></input>
                            <p className="createtext">Price</p>
                            <input className="createinput" placeholder="$0"></input>

                            <div className="binbuttons">
                                <button className="binbutt">Edit</button>
                                <button className="binbutt">Delete</button>
                            </div>

                        </div>


                    </div>

                
                
            </div>
        )
    }

}