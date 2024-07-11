import "./globals.css";
import "./source/main.css";
import DocsTopNav from "./templates/docsTopNav";

const Home = () =>{

  return(
    <div className="pageView">
        <div className="gridRow colHi-1 rowCenter">
            <DocsTopNav />
        </div>
        <br/>
        <div className="gridRow rowCenter rowMiddle">
            <div className="colWd-12-ld colWd-12-sm colHi-8">
              <h1>Invrz Patterns - Alpha</h1><br/>
              <p>Invrz Patterns is a new age UI Library to help developers build webpages faster. It minimizes use of CSS by including a lot of utlility classes such as <span className="inlineCode bgDark">.taCenter</span> which can be used to align any text to center of parent element without worrying about underlying CSS.</p><br/>
              <p>The Idea is to make a UI library which is as dynamic as possible with inbuilt responsive patterns but still keep things from getting out of hands. Not only focus on atomic classes like underlining and making text bold but also provide elegant yet dynamic solutions to problems like grids and layouts.</p><br/>
              <p>Invrz Patterns is still under construction but it is ready with complete solution for making a responsive and dynamic grid system which you can check out in this alpha release. Invrz Patterns is platform agnostic as it uses classes to set styles and can be released using npm by using following command: </p>
              <p className="codeBlock paddingSmall bgDark borderSmoother">npm install patterns-ui</p><br/>
              <p>After installation you can head over to docs and start making awesome grids.</p><br/>
              <p><a href="/layout/views"><button className="paddingSmall bgBrand noBorders borderSmoother">Docs - Alpha</button></a></p><br/><br/>
            </div>
        </div><br/><br/>
    </div>
  );

}

export default Home;

//https://www.npmjs.com/package/patterns-ui