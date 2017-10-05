import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';

const App = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    </Router>
);

export default App;