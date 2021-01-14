import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Projects'
import SinglePost from './components/SinglePosts'
import Post from './components/Post'
import NavBar from './components/NavBar'

const App = () => { 
  return (
    <div >
        
        <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route component = {Home} path = '/' exact/>
            <Route component = {About} path = '/about'/>
            <Route component = {SinglePost} path = '/post/:slug'/>
            <Route component = {Post} path = '/post'/>
            <Route component = {Project} path = '/projects/'/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
