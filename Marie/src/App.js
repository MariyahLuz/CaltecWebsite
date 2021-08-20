import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Developer from 'pages/Developer';
import Gallery from 'pages/Gallery';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

// Custom CSS Style Sheet
import 'assets/styles/custom.css';

function App() {
    return (
        <Switch>
            
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/developer" component={Developer} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/" component={Landing} />
        </Switch>
    );
}

export default App;
