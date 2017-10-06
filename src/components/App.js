import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';
import NotFound from './NotFound';
import Teachers from './Teachers';
import Featured from './Featured';

const App = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/courses' component={Courses}/>
                <Route exact path='/teachers' component={Teachers}/>
                <Route path='/teachers/:topic/:fname-:lname' component={Featured}/>
                <Route path='/contact' render={ () => <Contact title='Contactez moi'/> }/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default App;