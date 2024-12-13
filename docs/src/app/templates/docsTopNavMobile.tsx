import "../globals.css";
import "../source/main.css";

const DocsTopNavMobile = () =>{

    return(
        <div className="navbar col-width-0-ld col-width-15-sm">
            <div className="navbar-group align-left">
                <p className="navbar-brand">invrz patterns</p>
            </div>
            <div className="navbar-group align-right">
                <p className="navbar-item">Docs</p>
                <p className="navbar-item">Get Started</p>
                <p className="navbar-item">Open Source</p>                        
            </div>
        </div>
    );

}

export default DocsTopNavMobile;