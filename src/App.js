import React from 'react';
import Welcome from './components/WelcomeStatelessComponent'
import ClassComponent from './components/ClassComponent'
import EventComponent from './components/EventComponent'
import ListsComponent from './components/ListsComponent'
import FormComponent from './components/FormComponent'
import FormikAndYupComponent from './components/FormComponentUsingFormikAndYup'


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
        </div>
    );
}

export default App;
