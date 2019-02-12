import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from '../reducers';
import { loadWords } from '../actions/WordActions';

class App extends Component<{ words: object[] | null, loadWords: () => void }> {
    componentDidMount() {
        this.props.loadWords();
    }
    render() {
        const { words } = this.props;
        console.log(words);
        return(
            <div className="colex-app">
                HI
            </div>
        )
    }
}

// TODO make the return type an interface

const mapStateToProps = (state: IAppState): object => {
    return {
        words: state.words
    }
}

const mapActionCreatorsToProps = (dispatch: Dispatch) => {
    return bindActionCreators({loadWords}, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(App);