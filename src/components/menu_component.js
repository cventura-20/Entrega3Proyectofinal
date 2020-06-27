import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './header_component';
import Content from './content_component';
import Footer from './footer_component';

class Menu extends Component{
    state = {  }
    render() { 
        return ( 
            <div>
                <Header name="Menu Principal" />
                <Content />
                <Footer />            
            </div>
         );
    }
}

export default Menu;
