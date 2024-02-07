import "../globals.css";
import "../source/main.css";
import DocsSideNav from "../templates/docsSideNav";
import DocsTopNav from "../templates/docsTopNav";

const Views = () => {

    return(
        <div className="pageView">
            <div className="gridRow rowHi-1 rowCenter">
                <DocsTopNav />
            </div>
            <div className="gridRow rowHi-8 rowCenter">
                <div className="colWd-3">
                    <DocsSideNav />
                </div>
                <div className="colWd-10">
                    <div className="withPrimaryBackground contentWrapper paddingSmall">
                        <h1>Views</h1>
                        <h2>The basic building blocks</h2>
                    </div>
                </div>      
            </div>
        </div>
    );

}

export default Views;