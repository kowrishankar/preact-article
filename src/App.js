import { h, Component } from 'preact';
import './App.css';
import News from './containers/news/News';
import Router from 'preact-router';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/news">news</a></li>
                </ul>
                <Router>
                    <News path="/news" component={News}/>
                </Router>
            </div>
        );
    }
}

export default App;
