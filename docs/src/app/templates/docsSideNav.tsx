import "../globals.css";
import "../source/main.css";

const DocsSideNav = () => {

    return(
        <div className="sidenav list-view-vertical padding--small border--smooth">
            <div className="sidenav-group align-top">
                <p className="sidenav-title">Layout</p>
                <a href="/layout/views" className="sidenav-item no-decoration border--smoother">Views</a>
                <a href="/layout/columns" className="sidenav-item no-decoration border--smoother">Columns</a>
                <a href="/layout/gutters" className="sidenav-item no-decoration border--smoother">Gutters</a>
                <a href="/layout/breakpoints" className="sidenav-item no-decoration border--smoother">Breakpoints</a>
                <a href="/layout/aligners" className="sidenav-item no-decoration border--smoother">Aligners</a>
                <a href="/layout/grids" className="sidenav-item no-decoration border--smoother">Grids</a>
            </div>
            
        </div>
    );

}

export default DocsSideNav;