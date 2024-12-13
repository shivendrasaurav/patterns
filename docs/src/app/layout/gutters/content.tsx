const Content = () => {
    return(
        <div className="bg-body list-view-vertical padding--small">
                        <h1 className="title">Gutters</h1>
                        <h2 className="subtitle">Give your columns some breathing space</h2>
                        <p className="text-regular">
                        <span className="highlighted">
                            invrz patterns comes out of the box with max gutter sizes till 60, which can be changed as per requirements by editing the <span className="code--inline bg-muted-dark text-muted">$gutters</span> value in <span className="code--inline bg-muted-dark text-muted">variables.scss</span> file according to your needs. For this documentation we will stick to the default 60 gutter sizes but the general rules will be same for any number of <span className="code--inline bg-muted-dark text-muted">$gutters</span> you set.
                        </span><br/><br/>

                        Gutters are essential for creating separations between grid columns, providing spacing and visual clarity in layouts. <br/>
                        You can use classes <span className="code--inline bg-muted-dark text-muted">.gutter-width-*</span> to add gutters of size <span className="code--inline bg-muted-dark text-muted">*</span> where  <span className="code--inline bg-muted-dark text-muted">*</span>  ranges from 1 to 60 by default. The larger the number, the bigger will be space between your columns. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row row-center">\n'}
                                    {'    <div class="col-width-6-ld text-align--center" style="background: #0e0e0e">\n'}
                                    {'      these columns have\n'}
                                    {'    </div>\n'}
                                    {'    <div class="gutter-width-1"></div>\n'}
                                    {'    <div class="col-width-6-ld text-align--center" style="background: #0e0e0e">\n'}
                                    {'      gutter of size 1\n'}
                                    {'    </div>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        <div className="grid-row row-center">
                                            <div className="col-width-6-ld text-align--center" style={{background: "#0e0e0e"}}>
                                                {'    these columns have gutter\n'}
                                            </div>
                                            <div className="gutter-width-1"></div>
                                            <div className="col-width-6-ld text-align--center" style={{background: "#0e0e0e"}}>
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
                        <a href="./columns"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Prev: Columns</button></a>&nbsp;&nbsp;&nbsp;
                        <a href="./breakpoints"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Next: Breakpoints</button></a>
                        <br/><br/>
                    </div>
    );
}

export default Content;