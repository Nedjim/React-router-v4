import React from 'react';
import { NavLink, Switch, Route} from 'react-router-dom';
import Course1 from './Courses/Course1';
import Course2 from './Courses/Course2';
import Course3 from './Courses/Course3';

const Courses = () => (
    <div>
        <h1>Courses</h1>
        <nav>
            <NavLink to='/courses/course1'>Course 1</NavLink>
            <NavLink to='/courses/course2'>Course 2</NavLink>
            <NavLink to='/courses/course3'>Course 3</NavLink>
        </nav>
        <Switch>
            <Route path='/courses/course1' component={Course1}/>
            <Route path='/courses/course2' component={Course2}/>
            <Route path='/courses/course3' component={Course3}/>
        </Switch>
    </div>
);

export default Courses;