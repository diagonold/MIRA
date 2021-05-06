import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NewInspection from './components/NewInspection'



// class App extends Component {
//     render() {
//       return (
//       <Router>
//           <div>
//             <h2>Welcome to React Router Tutorial</h2>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <ul className="navbar-nav mr-auto">
//               <li><Link to={'/'} className="nav-link"> Login </Link></li>
//               <li><Link to={'/home'} className="nav-link">home</Link></li>
//               <li><Link to={'/newinspection'} className="nav-link">About</Link></li>
//             </ul>
//             </nav>
//             <hr />
//             <Switch>
//                 <Route exact path='/' component={Login} />
//                 <Route path='/home' component={Home} />
//                 <Route path='/newinspection' component={NewInspection} />
//             </Switch>
//           </div>
//         </Router>
//       );
//     }
// }


ReactDOM.render(
    // HTML code that will be displayed in the HTML element
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/create" component={NewInspection}/>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="/login" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);





