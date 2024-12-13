import "../../globals.css";
import "../../source/main.css";
import DocsSideNav from "../../templates/docsSideNav";
import DocsTopNav from "../../templates/docsTopNav";
import Content from "./content";

const Grids = () => {

    return(
        <div className="page-view">
            <div className="grid-row col-height-1 row-center">
                <DocsTopNav />
            </div>
            <br/>
            <div className="grid-row row-center">
                <div className="col-width-2-ld col-width-0-sm col-height-auto">
                    <DocsSideNav />
                </div>
                <div className="gutterWd-1"></div>
                <div className="col-width-10-ld col-width-13-sm col-height-auto">
                    <Content />
                </div>      
            </div><br/><br/>
        </div>
    );

}

export default Grids;