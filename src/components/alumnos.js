import React from 'react';
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

class Alumnos extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className = "app-alumnos">
                <h1>ALUMNOS</h1>
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
export default Alumnos;