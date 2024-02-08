import "../globals.css";
import "../source/main.css";

const DocsSideNav = () => {

    return(
        <div className="sideNav scrollViewVert withPrimaryBackground paddingSmall">
            <div className="itemGroup onTop">
                <p className="navTitle">Layout</p>
                <a href="/layout/views" className="navItem noDecoration">Views</a>
                <a href="/layout/columns" className="navItem noDecoration">Columns</a>
                <a href="/layout/breakpoints" className="navItem noDecoration">Breakpoints</a>
                <a href="/layout/aligners" className="navItem noDecoration">Aligners</a>
                <a href="/layout/grids" className="navItem noDecoration">Grids</a>
            </div>
            
        </div>
    );

}

export default DocsSideNav;