import React from "react";
import AppNavbar from "./components/AppNavbar";
import ChildrenList from "./components/ChildrenList";
import ChildrenModal from './components/ChildrenModal';
import { Container } from 'reactstrap';

import {Provider} from 'react-redux';
import store from './store';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Provider store={ store} >
            <div className="App">
                <AppNavbar/>
                <Container>
                    <ChildrenModal />
                    <ChildrenList/>
                </Container>
            </div>
        </Provider>
    );
}

export default App;
