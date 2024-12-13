import "../globals.css";
import "../source/main.css";

const DocsTopNav = () =>{

    return(
        <div className="navbar col-width-15-ld col-width-15-sm bg-body-dark border--smooth padding--small">
            <div className="navbar-group align-left">
                <a href="/" className="no-decoration"><p className="navbar-brand bg-brand text-brand">invrz patterns</p></a>
            </div>
            <div className="navbar-group align-right">
                <a href="/layout/views" className="no-decoration"><p className="navbar-item col-width-0-sm text--light">Docs</p></a>
                <a href="/" className="no-decoration"><p className="navbar-item col-width-0-sm text--light">Get Started</p></a>
                <a href="https://github.com/invrz/patterns/" target="_blank" className="no-decoration text--light"><p className="navbar-item col-width-0-sm">Open Source</p></a>
                <p className="navbar-item col-width-0-ld">|||</p>
            </div>
        </div>
    );

}

export default DocsTopNav;