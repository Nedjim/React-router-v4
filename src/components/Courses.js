import React from 'react';
import { NavLink, Switch, Route, Redirect} from 'react-router-dom';
import Course1 from './Courses/Course1';
import Course2 from './Courses/Course2';
import Course3 from './Courses/Course3';
import NotFound from './NotFound';

const Courses = ({match}) => (
    <div>
        <h1>Courses</h1>
        <nav>
            <NavLink to={`${match.url}/course1`}>Course 1</NavLink>
            <NavLink to={`${match.url}/course2`}>Course 2</NavLink>
            <NavLink to={`${match.url}/course3`}>Course 3</NavLink>
        </nav>
        <Switch>
            <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/course1`}/> }/>
            <Route path={`${match.path}/course1`} component={Course1}/>
            <Route path={`${match.path}/course2`} component={Course2}/>
            <Route path={`${match.path}/course3`} component={Course3}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default Courses;