// import the react and react dom libraries to get access to them
import React from 'react'
import ReactDOM from 'react-dom'
 
// Create a react component
// A react component is a fn or class
// It uses jsx to show me html
// It handles the feedback from the user from events
const App = () => {
    const buttonText = {text:'click me'};

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name
            </label>
            <input id = "name" type="text" />
            <button style = {{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
        </div>
    );
};

// This enables hot reloading
if (module.hot) {
    module.hot.accept();
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);