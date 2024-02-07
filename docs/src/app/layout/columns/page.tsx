import "../../globals.css";
import "../../source/main.css";
import DocsSideNav from "../../templates/docsSideNav";
import DocsTopNav from "../../templates/docsTopNav";

const Columns = () => {

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
                        <h1>Columns</h1>
                        <h2>Define your app{"'"}s layout</h2>
                    </div>
                </div>      
            </div>
        </div>
    );

}

export default Columns;