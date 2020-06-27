import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './Styles/App.css';


import Navegacion from './components/navegacion';
import Menu from './components/menu_component';
import Alumnos from './components/alumnos';
import Escuela from './components/escuela';
import Carreras from './components/Carreras';
import Materias from './components/materias';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Reportes from './components/reportes';



function App() {
  return (
      <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/alumnos" exact component={Alumnos} />
          <Route path="/Escuela" exact component={Escuela} />
          <Route path="/Carreras" exact component={Carreras} />
          <Route path="/Materias" exact component={Materias} />
          <Route path="/navegacion" exact component={Navegacion} />
          <Route path="/reportes" exact component={Reportes} />
          <Route path="/test" exact component={() => <h1>Principal</h1>} />
          <Route path="/mantenimiento" exact component={() => <h1>El usuario o la contraseña no es correcto</h1>} />
          <Route path="*" component={() => <h1>Fatality!! <p>Checa el codigo hay un error</p></h1>} />
        </Switch>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
