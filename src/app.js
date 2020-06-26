import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const expenseComponent = () => (
    <div>
        hi! i am expense Dashboard Component
    </div>
);

const addExpensePage = () => (
    <div>
        hi! i am add expense component
    </div>
);

const editExpensePage = () => (
    <div>
        hi! this is edit expense component
    </div>
)

const helpPage = () => (
    <div>
        This is the helpPage component.
    </div>
)

const routes = (
    <BrowserRouter>     
        <div>
            <Route path="/" component={expenseComponent} exact={true}/>
            <Route path="/create" component={addExpensePage}/>
            <Route path="/edit" component={editExpensePage}/>
            <Route path="/help" component={helpPage}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('appDiv'));