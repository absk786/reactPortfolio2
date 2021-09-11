import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import './App.css';
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/footer";
import ContactForm from "./Components/Contact/index";
import { Redirect } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Switch >
        <Route exact path='/' render = {()=> { return (<Redirect to='/'/>)}}/>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={Projects} path='/projects'  />
        <Route component={ContactForm} path='/contact'/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
