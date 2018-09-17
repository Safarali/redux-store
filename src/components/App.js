import React, { Fragment, Component } from "react";
import { store } from '../store';
import HelloWorld from "../components/HelloWorld";
import ButtonGroup from '../components/ButtonGroup';

class App extends Component {
  render() {
    return (
        <Fragment>
            <HelloWorld tech={store.getState().tech} />
            <ButtonGroup technologies={["React", "Elm", "React-Redux"]}/>
        </Fragment>
    );
  }
}
export default App;
