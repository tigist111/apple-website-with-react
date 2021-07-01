import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer.js";
import Main from "./Components/Main/Main";
import Mac from "./Pages/Mac/Mac";
import Iphone from "./Pages/Iphone/Iphone";
import Productpage from "./Pages/Productpage/Productpage";
import Four04 from "./Pages/Four04/Four04.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./Assets/CSS/styles.css";
// import "./Assets/CSS/bootstrap.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/iphones" exact component={Iphone} />
        <Route path="/iphones/:pid" exact component={Productpage} />
        <Route path="/mac" exact component={Mac} />
        <Route path="/" exact component={Four04} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
