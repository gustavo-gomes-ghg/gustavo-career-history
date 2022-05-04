import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Career from '../pages/career/Career';
import Contacts from '../pages/contact/Contacts';
import Projects from '../pages/projects/Projects';

const Routing = () => {

    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/career">Career</Link>
        </div>
        <div>
          <Link to="/projects">Personal Projects</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <hr/>
  
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
  
          <Route path="/career">
            <Career/>
          </Route>
  
          <Route path="/projects">
            <Projects/>
          </Route>
  
          <Route path="/contact">
            <Contacts/>
          </Route>
  
        </Switch>
      </Router>
    )
  }

export default Routing;
  