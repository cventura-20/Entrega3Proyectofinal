import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

class Materias extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>MATERIAS</h1>
                <Link to="/menu">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
            </div>
         );
    }
}
export default Materias;