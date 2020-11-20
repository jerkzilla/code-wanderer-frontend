import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Wander from '../components/Wander'
import { useMemo } from 'react'
import { Route } from "react-router-dom";

export default class WandersContainer extends Component {
   
    // state = {
    //  wanderLink: []

    // };



    // handleClick = (wanders) => {
    // const wanderLink =   wanders.shuffle(wanders)
    //     //  const wanderLink = wanders.first.link
    //         // return wanders.first.link
    //         this.setState({wanderLink: wanderLink[0]})
    //     }
       

        // let random = Math.floor(Math.random() * 9);
        // this.setState({...this.props.wanders[random]})
        // let wander = {this.props.wanders[Math.floor(Math.random() * wanders.length)]}
        // return wander
    // }
 
    render() {
        // const history = useHistory()
        return (
            <>
            <button ><a class="Thx" href= {this.props.wanders[1].link}>WANDER
                </a></button>
                     
            </>
        )
    }

}