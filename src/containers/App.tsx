import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import { loadData, IExampleData } from "../actions/ExampleActions";
import { Segment, Loader, Header } from "semantic-ui-react";

class App extends Component<{ data: IExampleData[]; loadData: () => void }> {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <Segment className="app">
          <Loader active content="loading data" />
        </Segment>
      );
    } else {
      return (
        <Segment className="app">
          {data.map((element: IExampleData, index: number) => {
            return <Header key={index}>{element.value}</Header>;
          })}
        </Segment>
      );
    }
  }
}

// TODO make the return type an interface

const mapStateToProps = (state: IAppState): object => {
  return {
    data: state.exampleState.data
  };
};

const mapActionCreatorsToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ loadData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(App);
