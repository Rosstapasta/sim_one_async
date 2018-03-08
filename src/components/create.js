import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from './download.png';
import axios from 'axios';


export default class Create extends  Component{

    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            redirect: false,
        }

        this.nameInput = this.nameInput.bind(this);
        this.priceInput = this.priceInput.bind(this);
        this.createInv = this.createInv.bind(this);

    }
    
    createInv(){

        axios.post(`http://localhost:3030/api/?shelf=${this.props.match.params.shelfletter}`, {
            bin: this.props.match.params.num,
            item: this.state.name,
            price: this.state.price

        }).then( res => this.setState({ redirect: true })  )

       

    }

    nameInput(val){
        this.setState({ name: val})
    }

    priceInput(val){
        this.setState({price: val})
    }

    render(){

        var letter = this.props.match.params.shelfletter;

        if(this.state.redirect === true){

           return <Redirect push to={`/shelf/${letter}`}/>
        }

        console.log(this.props)

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
                        <input className="createinput" onChange={(e) => this.nameInput(e.target.value)}></input>

                        <p className="createtext">Price</p>
                        <input className="createinput" placeholder="$0" onChange={(e) => this.priceInput(e.target.value)}></input>

                       <button className="createbutt" onClick={() => this.createInv()}>+ Add to inventory</button>

                    </div>
                
            </div>
        )
    }
}