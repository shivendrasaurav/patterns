import "../globals.css";
import "../source/main.css";

const DocsSideNav = () => {

    return(
        <div className="sideNav scrollViewVert bgBrand smoothEdge">
            <div className="itemGroup onTop">
                <p className="navTitle">Layout</p>
                <a href="/layout/views" className="navItem noDecoration smootherEdge">Views</a>
                <a href="/layout/columns" className="navItem noDecoration smootherEdge">Columns</a>
                <a href="/layout/gutters" className="navItem noDecoration smootherEdge">Gutters</a>
                <a href="/layout/breakpoints" className="navItem noDecoration smootherEdge">Breakpoints</a>
                <a href="/layout/aligners" className="navItem noDecoration smootherEdge">Aligners</a>
                <a href="/layout/grids" className="navItem noDecoration smootherEdge">Grids</a>
            </div>
            
        </div>
    );

}

export default DocsSideNav;