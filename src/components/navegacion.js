import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import IcoNav from '../Assets/img/Ico.png';
import '../Styles/index.css';

class Navegacion extends React.Component{
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="fondonav navbar navbar-expand-lg navbar-dark ">
                <a className="navbar-brand" href="#section">
                   
                    Inicio
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#section"><span className={this.getNavLinkClass("/")}><NavLink to="/">Inicio</NavLink></span> <span className="sr-only">(current)</span></a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Escuela
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#section">
                                    <span className={this.getNavLinkClass("/escuela")}><NavLink to="/escuela">Nueva</NavLink></span>
                                </a>
                               
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Personal
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#section">
                                    <span className={this.getNavLinkClass("/personal")}><NavLink to="/personal">Alta</NavLink></span>
                                </a>
                               
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Alumnos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#section">
                                    <span className={this.getNavLinkClass("/alumnos")}><NavLink to="/alumnos">Alta</NavLink></span>
                                </a>
                                
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Carreras
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#section">
                                    <span className={this.getNavLinkClass("/Carreras")}><NavLink to="/Carreras">Asignar</NavLink></span>
                                </a>
                                
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Materias
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#section">
                                    <span className={this.getNavLinkClass("/materias")}><NavLink to="/materias">Asignar</NavLink></span>
                                </a>
                               
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Reportes
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#section">
                                    <span className={this.getNavLinkClass("/reportes")}><NavLink to="/reportes">Por Maestro</NavLink></span>
                                </a>
                               
                            </div>
                        </li>

                    </ul>
                    
                </div>
            </nav>
        )
    }
};

Navegacion = withRouter(Navegacion);
export default Navegacion;
