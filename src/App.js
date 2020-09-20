import React from 'react';
import Welcome from './components/WelcomeStatelessComponent'
import ClassComponent from './components/ClassComponent'
import EventComponent from './components/EventComponent'
import ListsComponent from './components/ListsComponent'
import FormComponent from './components/FormComponent'


function App() {
  let name = 'salah';
  let show = true;
  return (
    <div className="App">
      {/* stateless component */}
      <Welcome name={name} show={show} />
      <hr />
      {/* class component */}
      <ClassComponent laptopModel="Dell G3 3590" />
      <hr />
      <EventComponent />
      <hr />
      <ListsComponent />
      <hr />
      <FormComponent />
    </div>
  );
}

export default App;
