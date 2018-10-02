import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import GalleryApp from './GalleryApp';
import logo from './logo.svg';
import './index.css';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        BTCN02 - Reactjs + Axios
                    </p>
                </header>
                <div className="container">
                    <GalleryApp/>
                </div>

            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));