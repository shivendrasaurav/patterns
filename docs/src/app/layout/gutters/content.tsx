const Content = () => {
    return(
        <div className="withPrimaryBackground listViewVertical paddingSmall">
                        <h1 className="title">Gutters</h1>
                        <h2 className="subtitle">Give your columns some breathing space</h2>
                        <p className="text">
                        <span className="highlighted">
                            invrz patterns comes out of the box with max gutter sizes till 60, which can be changed as per requirements by editing the <span className="inlineCode">$gutters</span> value in <span className="inlineCode">variables.scss</span> file according to your needs. For this documentation we will stick to the default 60 gutter sizes but the general rules will be same for any number of <span className="inlineCode">$gutters</span> you set.
                        </span><br/><br/>

                        Gutters are essential for creating separations between grid columns, providing spacing and visual clarity in layouts. <br/>
                        You can use classes <span className="inlineCode">.gutterWd-*</span> to add gutters of size <span className="inlineCode">*</span> where  <span className="inlineCode">*</span>  ranges from 1 to 60 by default. The larger the number, the bigger will be space between your columns. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow rowCenter">\n'}
                                    {'    <div class="colWd-6-ld taCenter" style="background: #0e0e0e">\n'}
                                    {'      these columns have\n'}
                                    {'    </div>\n'}
                                    {'    <div class="gutterWd-1"></div>\n'}
                                    {'    <div class="colWd-6-ld taCenter" style="background: #0e0e0e">\n'}
                                    {'      gutter of size 1\n'}
                                    {'    </div>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    <div className="pageView">
                                        <div className="gridRow rowCenter">
                                            <div className="colWd-6-ld taCenter" style={{background: "#0e0e0e"}}>
                                                {'    these columns have gutter\n'}
                                            </div>
                                            <div className="gutterWd-1"></div>
                                            <div className="colWd-6-ld taCenter" style={{background: "#0e0e0e"}}>
                                                {'    of size 1 between them\n'}
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example creates two columns having width of size 6 on large displays and a gutter of size 1 between them. <br/><br/>
                        </p>

                        <br />

                        <br/><br/>
                        <a className="buttonLink" href="./views">Prev: Views</a>
                        <a className="buttonLink" href="./breakpoints">Next: Breakpoints</a>
                        <br/><br/>
                    </div>
    );
}

export default Content;