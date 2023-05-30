import './assets/scss/global.scss'
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { ContactIndex } from './views/ContactIndex';
import { Home } from './views/Home';
import { AppHeader } from './cmps/AppHeader';
import { ContactDetails } from './views/ContactDetails'
import { ContactEdit } from './views/ContactEdit';
import { Chart } from './cmps/Chart'
import { Signup } from './views/Signup'
import UserDetails from './views/UserDetails'

function App() {
    return (
        <Router>
            <section className="main-app">
                <AppHeader />

                <main className="container">
                    <Switch>
                        <Route path="/contact/edit/:id?" component={ContactEdit} />
                        <Route path="/contact/:id" component={ContactDetails} />
                        <Route path="/contact" component={ContactIndex} />
                        <Route path="/chart" component={Chart} />
                        <Route path="/user" component={UserDetails} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/" component={Home} />
                    </Switch>
                </main>

                <footer>
                    <section className="container">
                        contactRights 2023 &copy;
                    </section>
                </footer>

            </section>
        </Router>
    )
}

export default App;
