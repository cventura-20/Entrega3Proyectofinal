import React, { Component } from 'react';
import Navegacion from './navegacion';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-header">
                <Navegacion/>
            </div>
         );
    }
}
 
export default Header;