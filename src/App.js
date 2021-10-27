import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import AddEvent from './components/AddEvent/AddEvent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
