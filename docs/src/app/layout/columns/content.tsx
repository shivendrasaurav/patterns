const Content = () => {
    return(
        <div className="withPrimaryBackground scrollVertical paddingSmall">
                        <h1 className="title">Columns</h1>
                        <h2 className="subtitle">Shape up your app’s partition</h2>
                        <p className="text">
                            
                            <span className="highlighted">
                            invrz patterns comes out of the box with max column partitions as 15, which can be changed as per requirements by editing the <span className="inlineCode">$partitions</span> value in <span className="inlineCode">variables.scss</span> file according to your needs. For this documentation we will stick to the default 15 column layout but the general rules will be same for any number of <span className="inlineCode">$partitions</span> you set.
                            </span><br/><br/>

                            Columns are the vertical divisions of a grid structure in each row defined using <span className="inlineCode">.gridRow</span>. They help you create responsive and flexible layouts for your app. Each column has a class name that starts with <span className="inlineCode">.colWd-*</span> followed by a number from 1 to 15(default max). This number indicates how much space the column takes in a row. For example, <span className="inlineCode">.colWd-9-ld</span> means the column takes 9 units of space in a row in a large display. <br/>
                            The total space in a row is 15 units by default, so you can use any combination of column classes that add up to 15 or less. To use a column in HTML, you need to add the column class to a <span className="inlineCode">{"<div>"}</span> element inside a <span className="inlineCode">.gridRow</span> element. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow rowCenter">\n'}
                                    {'    <div class="colWd-9-ld" style="background: #0e0e0e">\n'}
                                    {'      <!-- page content goes here -->\n'}
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
                                            <div className="colWd-9-ld" style={{background: "#0e0e0e"}}>
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
                        <p className="text">
                            You can use multiple columns in a row to create different proportions and alignments for your content. You can use any combination of column classes that add up to 15 or less. For example, you can use <span className="inlineCode">.colWd-3-ld</span>, <span className="inlineCode">.colWd-6-ld</span>, and <span className="inlineCode">.colWd-3-ld</span> to create three columns that take 3, 6, and 3 units of space respectively. To use multiple columns in a row in HTML, you need to add multiple <span className="inlineCode">{"<div>"}</span> elements with different column classes inside a <span className="inlineCode">.gridRow</span> element. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow rowCenter">\n'}
                                    {'    <div class="colWd-3-ld" style="background: #ae0e0e">\n'}
                                    {'      <!-- column 1 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-6-ld" style="background: #0e0e0e">\n'}
                                    {'      <!-- column 2 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-3-ld" style="background: #0e0eae">\n'}
                                    {'      <!-- column 3  -->\n'}
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
                                            <div className="colWd-3-ld" style={{background: "#ae0e0e"}}>
                                                {'    <!-- column 1  -->\n'}
                                          </div>
                                            <div className="colWd-6-ld" style={{background: "#0e0e0e"}}>
                                                {'    <!-- column 2 -->\n'}
                                          </div>
                                            <div className="colWd-3-ld" style={{background: "#0e0eae"}}>
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
                        <p className="text">
                            
                            You can add as many columns as you want in a row, as long as the sum of their space units does not exceed 15(default max paritions). This is because the total space in a row is 15 units, and if you use more than that, the columns will overflow or wrap to the next line. You can use any combination of column classes that add up to 15 or less. For example, you can use <span className="inlineCode">.colWd-4-ld</span>,  <span className="inlineCode">.colWd-5-ld</span>, and  <span className="inlineCode">.colWd-6-ld</span> to create three columns that take 4, 5, and 6 units of space respectively. To add columns in a row in HTML, you need to add multiple  <span className="inlineCode">{"<div>"}</span> elements with different column classes inside a  <span className="inlineCode">.gridRow</span> element. For example:
                            <br/>
                            
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow rowCenter">\n'}
                                    {'    <div class="colWd-4-ld" style="background: #ae0e0e">\n'}
                                    {'      <!-- column size 4 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-5-ld" style="background: #0e0e0e">\n'}
                                    {'      <!-- column size 5 -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-6-ld" style="background: #0e0eae">\n'}
                                    {'      <!-- column size 6  -->\n'}
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
                                            <div className="colWd-4-ld" style={{background: "#ae0e0e"}}>
                                                {'    <!-- column size 4  -->\n'}
                                          </div>
                                            <div className="colWd-5-ld" style={{background: "#0e0e0e"}}>
                                                {'    <!-- column size 5 -->\n'}
                                          </div>
                                            <div className="colWd-6-ld" style={{background: "#0e0eae"}}>
                                                {'    <!-- column size 6 -->\n'}
                                          </div>
                                        </div>
                                    </div>

                                </p>
                            </div>
                            This example creates three columns that take 4, 5, and 6 units of space in a row, inside a grid row that is aligned centrally, inside a page view.
                        </p>

                        <br/><br/>
                        <a className="buttonLink" href="./views">Prev: Views</a>
                        <a className="buttonLink" href="./breakpoints">Next: Breakpoints</a>
                        <br/><br/>
                    </div>
    );
}

export default Content;