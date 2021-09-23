import './style.css'

import { Component } from 'react'

export class Input extends Component {
    render(){
         const {value, onChange} = this.props;
        return(
    <input type="search"
              value={value}
              onChange={onChange}  
              placeholder="Search"
    >

    </input> 
        )}
}