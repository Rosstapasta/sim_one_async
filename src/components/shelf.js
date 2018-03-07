import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './comp.css';
import logo from './download.png';
import axios from 'axios';


export default class Shelf extends  Component{
    constructor(){
        super()

        this.state = {
            shelf: [],
            bin1: [],
            bin2: [],
            bin3: [],
            bin4: [],
            bin5: []
        }
    }


    componentDidMount(){
        axios.get(`http://localhost:3030/api/?shelf=${this.props.match.params.shelfletter}`).then(
            res => {
                
                this.setState({shelf: res.data });


                var shelfy = this.state.shelf;

                for(var i=0; i<shelfy.length; i++){

                    if(shelfy[i].bin === 1){
                        this.setState({bin1: [shelfy[i]]})
                        
                    }else if(shelfy[i].bin === 2){
                        this.setState({bin2: [shelfy[i]]})
                        

                    }else if(shelfy[i].bin === 3){
                        this.setState({bin3: [shelfy[i]]})
                        
                    
                    }else if(shelfy[i].bin === 4){
                        this.setState({bin4: [shelfy[i]]})
                       
                    
                    }else if(shelfy[i].bin === 5){
                        this.setState({bin5: [shelfy[i]]})
                    
                    }
                }
                
                console.log(this.state)
            }
        )
    }


    render(){

        var {shelfletter} = this.props.match.params;

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
                

                    { this.state.bin1[0] ?
                        <div>{<Link to={`/bin/${shelfletter}/1`}><button id="binfull" className="bincontents">Bin 1</button></Link>}
                        </div> : <Link to={`/create/${shelfletter}/1`}><button id="inventory" className="shelfButt">+ Add inventory to bin</button></Link> } 

                    { this.state.bin2[0] ?
                        <div>{<Link to={`/bin/${shelfletter}/2`}><button id="binfull" className="bincontents">Bin 2</button></Link>}
                        </div> : <Link to={`/create/${shelfletter}/2`}><button id="inventory" className="shelfButt">+ Add inventory to bin</button></Link> } 

                    { this.state.bin3[0] ?
                        <div>{<Link to={`/bin/${shelfletter}/3`}><button id="binfull" className="bincontents">Bin 3</button></Link>}
                        </div> : <Link to={`/create/${shelfletter}/3`}><button id="inventory" className="shelfButt">+ Add inventory to bin</button></Link> } 

                    { this.state.bin4[0] ?
                        <div>{<Link to={`/bin/${shelfletter}/4`}><button id="binfull" className="bincontents">Bin 4</button></Link>}
                        </div> : <Link to={`/create/${shelfletter}/4`}><button id="inventory" className="shelfButt">+ Add inventory to bin</button></Link> } 

                    { this.state.bin5[0] ?
                        <div>{<Link to={`/bin/${shelfletter}/5`}><button id="binfull" className="bincontents">Bin 5</button></Link>}
                        </div> : <Link to={`/create/${shelfletter}/5`}><button id="inventory" className="shelfButt">+ Add inventory to bin</button></Link> } 
                        
                </div>
                
            </div>
        )

    }

}