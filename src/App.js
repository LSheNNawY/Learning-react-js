import React from 'react';
import Welcome from './components/WelcomeStatelessComponent'
import ClassComponent from './components/ClassComponent'
import EventComponent from './components/EventComponent'
import ListsComponent from './components/ListsComponent'
import FormComponent from './components/FormComponent'
import FormikAndYupComponent from './components/FormComponentUsingFormikAndYup'
import UsersComponents from "./components/api/UsersComponents";

function App() {
    let name = 'salah';
    let show = true;
    return (
        <div className="App">
            {/* stateless component */}
            <Welcome name={name} show={show}/>
            <hr/>
            {/* class component */}
            <ClassComponent laptopModel="Dell G3 3590"/>
            <hr/>
            <EventComponent/>
            <hr/>
            <ListsComponent/>
            <hr/>
            <FormComponent/>
            <hr/>
            <h2>Using formik and yup </h2>
            <FormikAndYupComponent/>
            {/*getting users via ajax request*/}
            <UsersComponents />
        </div>
    );
}

export default App;
