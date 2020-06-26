import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const notFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>     
        <div>
            <Header />
            <Switch>
                <Route path="/" component={expenseComponent} exact={true}/>
                <Route path="/create" component={addExpensePage}/>
                <Route path="/edit" component={editExpensePage}/>
                <Route path="/help" component={helpPage}/>
                <Route component={notFoundPage}/>
            </Switch>

        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('appDiv'));