import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './download.png';
import axios from 'axios';

export default class Bin extends  Component{

    constructor(){
        super()

        this.state = {
            shelf: [],
            bin: [],
            input1: '',
            input2: 0,
            edit: false

        }

        this.inputChange1 = this.inputChange1.bind(this);
        this.inputChange2 = this.inputChange2.bind(this);
        this.editToggle = this.editToggle.bind(this);
        this.updateBin = this.updateBin.bind(this);
    }


    componentDidMount(){
        axios.get(`http://localhost:3030/api/?shelf=${this.props.match.params.shelfletter}`).then(
            res => {
                this.setState({shelf: res.data})

                var shelfy = this.state.shelf;
                for(var i = 0; i<shelfy.length; i++){
                    var biny = this.props.match.params.num;
                    if(shelfy[i].bin === parseInt(biny, 0)){

                        this.setState({bin: [shelfy[i]], input1: shelfy[i].item, input2: shelfy[i].price});
                    }
                }

                console.log(this.state)
            }
        )
    }

    
    updateBin(){
        axios.put(`http://localhost:3030/api/?shelf=${this.props.match.params.shelfletter}`, {

            bin: this.state.bin[0].bin,
            item: this.state.input1,
            price: this.state.input2

        }).then( res => {

            this.setState({shelf: res.data})

                var shelfy = this.state.shelf;
                for(var i = 0; i<shelfy.length; i++){
                    var biny = this.props.match.params.num;
                    if(shelfy[i].bin === parseInt(biny, 0)){

                        this.setState({bin: [shelfy[i]], input1: shelfy[i].item, input2: shelfy[i].price});
                    }
                }

                var ed = this.state.edit;
                this.setState({edit: !ed })

                console.log(this.state)

        })
    }




    inputChange1(val){
        this.setState({input1: val })
    }

    inputChange2(val){
        this.setState({input2: val})
    }

    editToggle(){
        var ed = this.state.edit;
        this.setState({edit: !ed })
    }


    render(){

        const {edit} = this.state;
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

                            <input className="createinput" onChange={ (e) => this.inputChange1(e.target.value)} value={this.state.input1} disabled={ this.state.edit === false }></input>

                            <p className="createtext">Price</p>

                            <input className="createinput" onChange={ (e) => this.inputChange2(e.target.value)} value={this.state.input2} disabled={this.state.edit === false}></input>


                            <div className="binbuttons">

                                    { edit  ? 

                                   <div>{ <button onClick={() => this.updateBin()}>save</button> }</div> 

                                    : <button className="binbutt" onClick={() => this.editToggle()}>Edit</button> }

                                    <button className="binbutt">Delete</button>

                            </div>

                        </div>

                    </div>

            </div>
        )
    }
}