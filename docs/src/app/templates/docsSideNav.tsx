import "../globals.css";
import "../source/main.css";

const DocsSideNav = () => {

    return(
        <div className="sideNav scrollViewVert withPrimaryBackground paddingSmall">
            <div className="itemGroup onTop">
                <p className="navTitle">Layout</p>
                <a href="/views" className="navItem noDecoration">Views</a>
                <a href="/grids" className="navItem noDecoration">Grids</a>
            </div>
            
        </div>
    );

}

export default DocsSideNav;