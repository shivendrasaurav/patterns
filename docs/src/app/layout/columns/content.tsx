const Content = () => {
    return(
        <div className="bg-body list-view-vertical padding--small">
                        <h1 className="title">Columns</h1>
                        <h2 className="subtitle">Shape up your app’s partition</h2>
                        <p className="text-regular">
                            
                            <span className="highlighted">
                            invrz patterns comes out of the box with max column partitions as 15, which can be changed as per requirements by editing the <span className="code--inline bg-muted-dark text-muted">$partitions</span> value in <span className="code--inline bg-muted-dark text-muted">_variables.scss</span> partial file according to your needs. For this documentation we will stick to the default 15 column layout but the general rules will be same for any number of <span className="code--inline bg-muted-dark text-muted">$partitions</span> you set.
                            </span><br/><br/>

                            Columns are the vertical divisions of a grid structure in each row defined using <span className="code--inline bg-muted-dark text-muted">.grid-row</span>. They help you create responsive and flexible layouts for your app. Each column has a class name that starts with <span className="code--inline bg-muted-dark text-muted">.col-width-*</span> followed by a number from 1 to 15(default max). This number indicates how much space the column takes in a row. For example, <span className="code--inline bg-muted-dark text-muted">.col-width-9-ld</span> means the column takes 9 units of space in a row in a large display. <br/>
                            The total space in a row is 15 units by default, so you can use any combination of column classes that add up to 15 or less. To use a column in HTML, you need to add the column class to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element inside a <span className="code--inline bg-muted-dark text-muted">.grid-row</span> element. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row row-center">\n'}
                                    {'    <div class="col-width-9-ld" style="background: #0e0e0e">\n'}
                                    {'      <!-- page content goes here -->\n'}
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
                                            <div className="col-width-9-ld" style={{background: "#0e0e0e"}}>
                                                {'    <!-- page content goes here -->\n'}
                                          </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example creates a column that takes 9 units of space in a row, inside a grid row that is aligned centrally, inside a page view.
                        </p>

                        <br />

                        <h2 className="subtitle">Multiple columns in a row</h2>
                        <p className="text-regular">
                            You can use multiple columns in a row to create different proportions and alignments for your content. You can use any combination of column classes that add up to 15 or less. For example, you can use <span className="code--inline bg-muted-dark text-muted">.col-width-3-ld</span>, <span className="code--inline bg-muted-dark text-muted">.col-width-6-ld</span>, and <span className="code--inline bg-muted-dark text-muted">.col-width-3-ld</span> to create three columns that take 3, 6, and 3 units of space respectively. To use multiple columns in a row in HTML, you need to add multiple <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> elements with different column classes inside a <span className="code--inline bg-muted-dark text-muted">.grid-row</span> element. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row row-center">\n'}
                                    {'    <div class="col-width-3-ld" style="background: #ae0e0e">\n'}
                                    {'      <!-- column 1 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-6-ld" style="background: #0e0e0e">\n'}
                                    {'      <!-- column 2 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-3-ld" style="background: #0e0eae">\n'}
                                    {'      <!-- column 3  -->\n'}
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
                                            <div className="col-width-3-ld" style={{background: "#ae0e0e"}}>
                                                {'    <!-- column 1  -->\n'}
                                          </div>
                                            <div className="col-width-6-ld" style={{background: "#0e0e0e"}}>
                                                {'    <!-- column 2 -->\n'}
                                          </div>
                                            <div className="col-width-3-ld" style={{background: "#0e0eae"}}>
                                                {'    <!-- column 3 -->\n'}
                                          </div>
                                        </div>
                                    </div>

                                </p>
                            </div>
                            This example creates three columns that take 3, 6, and 3 units of space in a row, inside a grid row that is aligned centrally, inside a page view.
                        </p>

                        <br />

                        <h2 className="subtitle">Add your columns upto 15</h2>
                        <p className="text-regular">
                            
                            You can add as many columns as you want in a row, as long as the sum of their space units does not exceed 15(default max paritions). This is because the total space in a row is 15 units, and if you use more than that, the columns will overflow or wrap to the next line. You can use any combination of column classes that add up to 15 or less. For example, you can use <span className="code--inline bg-muted-dark text-muted">.col-width-4-ld</span>,  <span className="code--inline bg-muted-dark text-muted">.col-width-5-ld</span>, and  <span className="code--inline bg-muted-dark text-muted">.col-width-6-ld</span> to create three columns that take 4, 5, and 6 units of space respectively. To add columns in a row in HTML, you need to add multiple  <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> elements with different column classes inside a  <span className="code--inline bg-muted-dark text-muted">.grid-row</span> element. For example:
                            <br/>
                            
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row row-center">\n'}
                                    {'    <div class="col-width-4-ld" style="background: #ae0e0e">\n'}
                                    {'      <!-- column size 4 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-5-ld" style="background: #0e0e0e">\n'}
                                    {'      <!-- column size 5 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-6-ld" style="background: #0e0eae">\n'}
                                    {'      <!-- column size 6  -->\n'}
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
                                            <div className="col-width-4-ld" style={{background: "#ae0e0e"}}>
                                                {'    <!-- column size 4  -->\n'}
                                          </div>
                                            <div className="col-width-5-ld" style={{background: "#0e0e0e"}}>
                                                {'    <!-- column size 5 -->\n'}
                                          </div>
                                            <div className="col-width-6-ld" style={{background: "#0e0eae"}}>
                                                {'    <!-- column size 6 -->\n'}
                                          </div>
                                        </div>
                                    </div>

                                </p>
                            </div>
                            This example creates three columns that take 4, 5, and 6 units of space in a row, inside a grid row that is aligned centrally, inside a page view.
                        </p>

                        <br/><br/>
                        <a href="./views"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Prev: Views</button></a>&nbsp;&nbsp;&nbsp;
                        <a href="./gutters"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Next: Gutters</button></a>
                        <br/><br/>
                    </div>
    );
}

export default Content;