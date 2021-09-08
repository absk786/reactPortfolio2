import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import './App.css';
import Nav from "./Components/Nav";
import Footer from "./Components/footer";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'  />
        <Route component={Projects} path='/projects'  />
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
