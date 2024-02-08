import "../../globals.css";
import "../../source/main.css";
import DocsSideNav from "../../templates/docsSideNav";
import DocsTopNav from "../../templates/docsTopNav";
import Content from "./content";

const Columns = () => {

    return(
        <div className="pageView">
            <div className="gridRow colHi-1 rowCenter">
                <DocsTopNav />
            </div>
            <br/>
            <div className="gridRow rowCenter">
                <div className="colWd-3-ld colWd-0-sm colHi-auto">
                    <DocsSideNav />
                </div>
                <div className="colWd-10-ld colWd-13-sm colHi-auto">
                    <Content />
                </div>      
            </div><br/><br/>
        </div>
    );

}

export default Columns;