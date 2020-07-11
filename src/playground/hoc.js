//higher order component (HOC) - a react component that renders other regular components.

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (       //regular component
    <div>
        <h1>Info</h1>
        <p>The info is: {props.name} {props.age} </p>
    </div>
)

//function
const withAdminWarning = (WrappedComponent) => {        //wrappedComponent contains all the components to be rendered(Info here).
    //what we are gonna return here is the HOC.
    return (props) => (      //stateless functional component.
        <div>
            { props.isAdmin && <p>This is private info. Please don't share</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props)=> (       //return HOC.
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to view the information</p> }            
        </div>
    )
}

const AdminInfo =  withAdminWarning(Info)      //args. include the components to be rendered. Hence this is HOC.
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} name="My name is Disha Tyagi." age="My age is 21." />, document.getElementById('appDiv'));
ReactDOM.render(<AuthInfo isAuthenticated={true} name="My name is Disha Tyagi." age="My age is 21." />, document.getElementById('appDiv'));