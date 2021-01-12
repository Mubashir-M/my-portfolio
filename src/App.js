import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import NavBar from './components/NavBar'

const App = () => { 
  return (
    <div >
        
        <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route component = {Home} path = '/' exact/>
            <Route component = {About} path = '/about'/>
            <Route component = {Projects} path = '/projects/'/>
            <Route component = {Resume} path = '/resume'/>
            <Route component = {Contacts} path = '/contacts'/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
