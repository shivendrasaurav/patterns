import "../globals.css";
import "../source/main.css";

const Views = () => {

    return(
        <div className="pageView">
            <div className="gridRow rowHi-1 rowCenter">
                <div className="navBar colWd-13">
                    <div className="itemGroup onLeft">
                        <p className="navBrand solid">invrz patterns</p>
                    </div>
                    <div className="itemGroup onRight">
                        <p className="navItem underline">Docs</p>
                        <p className="navItem underline">Get Started</p>
                        <p className="navItem underline">Open Source</p>                        
                    </div>
                </div>
            </div>
            <div className="gridRow rowHi-9 rowCenter">
                <div className="colWd-3">
                    <p>side navigation</p>
                </div>
                <div className="colWd-10">
                    <p>main content here</p>
                </div>      
            </div>
        </div>
    );

}

export default Views;