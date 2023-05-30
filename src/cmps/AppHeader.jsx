import { Link, NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
    return (
        <header className="app-header">
            <section className="container">
                <NavLink to="/" className="logo">Mr.BitCoin</NavLink>
                <nav>
                    <NavLink exact to="/signup" title="signup"><i className="fa-solid fa-arrow-right-to-bracket"></i></NavLink>  
                    <NavLink exact to="/" title="home"><i className="fa-solid fa-house"></i></NavLink>  
                    <NavLink exact to="/chart" title="chart"><i className="fa-solid fa-chart-line"></i></NavLink>  
                    <NavLink to="/contact" title="users"><i className="fa-solid fa-user"></i></NavLink>
                    <Link to="/contact/edit" title="add a user"><i className="fa-solid fa-user-plus"></i></Link>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)