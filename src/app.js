import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const expenseComponent = () => (
    <div>
        hi! i am expense Component
    </div>
);

const addExpensePage = () => (
    <div>
        hi! i am expense page
    </div>
);

const routes = (
    <BrowserRouter>     
        <div>
            <Route path="/" component={expenseComponent} />
            <Route path="/create" component={addExpensePage}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('appDiv'));