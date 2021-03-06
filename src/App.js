import React, {Component} from 'react';
import './App.css';
import Search from "./components/Search";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {connect, Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import { fetchData, clearData } from './redux/actions/actions';

class App extends Component {
    
    state = {
        searchPhrase: '',
        footerText: 'TV Maze API'
    };

    input = (event) => {
        this.setState({searchPhrase: event.target.value});
        this.props.fetch(event.target.value);
    };

    clearSearch = () => {
        this.setState({searchPhrase: ''});
        this.props.clear();
    };

    
    render() {
        const {Router, location, store} = this.props;
        return (
            <Provider store={store}>
                <Router location={location}>
                    <Switch>
                        <Route path="/" exact render={props => <Search searchPhrase={this.state.searchPhrase} input={this.input}/>} />
                        <Route path="/result" render={props => <Result
                            searchPhrase={this.state.searchPhrase}
                            clearSearch={this.clearSearch}
                            result={this.props.result}
                            error={this.props.error}
                            isLoading={this.props.isLoading}
                            input={this.input}
                            />}
                         />
                        <Route path="/footer" render={props => <Footer text={this.state.footerText}/>} />
                        <Route component={Error}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = state => ({
    result: state.reducer.result,
    error: state.reducer.error,
    isLoading: state.reducer.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetch: (query) => dispatch(fetchData(query)),
    clear: () => dispatch(clearData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
