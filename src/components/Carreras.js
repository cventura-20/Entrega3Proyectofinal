import React from 'react';

import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
//import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class Carreras extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Carreras</h1>
                <Link to="/menu">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<ArrowBackIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
            </div>
         );
    }
}

export default Carreras;