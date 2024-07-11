const DocsTopNav = () =>{

    return(
        <div className="navBar colWd-13-ld colWd-13-sm">
            <div className="itemGroup onLeft">
                <a href="/" className="noDecoration"><p className="navBrand textLight">patterns</p></a>
            </div>
            <div className="itemGroup onRight">
                <a href="/layout/views" className="noDecoration"><p className="navItem colWd-0-sm">Docs</p></a>
                <a href="/" className="noDecoration"><p className="navItem colWd-0-sm">Get Started</p></a>
                <a href="https://github.com/invrz/patterns/" target="_blank" className="noDecoration"><p className="navItem colWd-0-sm">Open Source</p></a>
                <p className="navItem colWd-0-ld">|||</p>
            </div>
        </div>
    );

}

export default DocsTopNav;