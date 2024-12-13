const Content = () => {
    return(
        <div className="bg-body list-view-vertical padding--small">
                        <h1 className="title">Views</h1>
                        <h2 className="subtitle">The basic building blocks</h2>
                        <p className="text-regular">
                            Views in Patterns UI are fundamental components that serve as the basic building blocks for constructing user interfaces. These views provide structural elements and layout options for organizing content within an application. There are different types of views you can use in invrz patterns which are:
                            <br/>
                            <ul className="padding--small">
                                <li>
                                    <strong>Page view:</strong> 
                                    A view that occupies the entire screen or a portion of it. It can contain any other type of view inside it. It is the main wrapper for any other view type.
                                </li>
                                <li>
                                    <strong>Content view:</strong> 
                                    A view that takes up 100% of the height and width of its parent view. It can contain any content, such as text, images, buttons, etc. It is useful for displaying simple content without any scrolling or nesting.
                                </li>
                                <li>
                                    <strong>Scroll view horizontal:</strong> 
                                    A view that allows horizontal scrolling of its content. It can contain any content, such as text, images, buttons, etc. It is useful for creating carousels, sliders, or tabs.
                                </li>
                                <li>
                                    <strong>Scroll view vertical:</strong> 
                                    A view that allows vertical scrolling of its content. It can contain any content, such as text, images, buttons, etc. It is useful for creating lists, cards, or forms.
                                </li>
                                <li>
                                    <strong>Nested views:</strong> 
                                    A combination of different types of views inside each other. It can create complex layouts and interactions. It is useful for creating grids, columns, rows, or stacks.
                                </li>
                            </ul>
                        </p>

                        <br/>

                        <h2 className="subtitle">Page View</h2>
                        <p className="text-regular">
                            A page view is a view that occupies the entire viewport and scrolls to show its content. A page view is useful for creating web pages that have a lot of content or need to adapt to different screen sizes.
                            <br/>
                            To create a page view, you need to use the <span className="code--inline bg-muted-dark text-muted">.page-view</span> class on a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <!-- page content goes here -->\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        {'<!-- page content goes here -->\n'}
                                    </div>
                                </p>
                            </div>
                        </p>

                        <br />

                        <h2 className="subtitle">Content View</h2>
                        <p className="text-regular">
                            A content view is a view that takes up 100% of the height and width of its parent view. It can contain any content, such as text, images, buttons, etc. It is useful for displaying simple content without any scrolling or nesting. To use a content view in HTML, you need to add the class <span className="code--inline bg-muted-dark text-muted">.content-view</span> to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="content-view padding--small">\n'}
                                    {'    <!-- page content goes here -->\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        <div className="content-view padding--small">
                                            {'<!-- page content goes here -->'}
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </p>

                        <br />

                        <h2 className="subtitle">Scroll View Horizontal</h2>
                        <p className="text-regular">
                            A scroll view horizontal is a view that allows horizontal scrolling of its content. It can contain any content, such as text, images, buttons, etc. It is useful for creating carousels, sliders, or tabs. To use a scroll view horizontal in HTML, you need to add the class <span className="code--inline bg-muted-dark text-muted">.list-view-horizontal</span> to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="list-view-horizontal padding--small">\n'}
                                    {'    <div id="1">Element 1</div>\n'}
                                    {'    <div id="2">Element 2</div>\n'}
                                    {'    <div id="3">Element 3</div>\n'}
                                    {'    <div id="4">Element 4</div>\n'}
                                    {'    <div id="5">Element 5</div>\n'}
                                    {'    <div id="1">Element 6</div>\n'}
                                    {'    <div id="2">Element 7</div>\n'}
                                    {'    <div id="3">Element 8</div>\n'}
                                    {'    <div id="4">Element 9</div>\n'}
                                    {'    <div id="5">Element 10</div>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                     <div className="list-view-horizontal padding--small">
                                       <div id="1" className="paddingSmall">Element 1</div>
                                       <div id="2" className="paddingSmall">Element 2</div>
                                       <div id="3" className="paddingSmall">Element 3</div>
                                       <div id="4" className="paddingSmall">Element 4</div>
                                       <div id="5" className="paddingSmall">Element 5</div>
                                       <div id="1" className="paddingSmall">Element 6</div>
                                       <div id="2" className="paddingSmall">Element 7</div>
                                       <div id="3" className="paddingSmall">Element 8</div>
                                       <div id="4" className="paddingSmall">Element 9</div>
                                       <div id="5" className="paddingSmall">Element 10</div>
                                     </div>
                                    </div>
                                </p>
                            </div>
                        </p>

                        <br />

                        <h2 className="subtitle">Scroll View Vertical</h2>
                        <p className="text-regular">
                            A scroll view vertical is a view that allows vertical scrolling of its content. It can contain any content, such as text, images, buttons, etc. It is useful for creating lists, cards, or forms. To use a scroll view vertical in HTML, you need to add the class <span className="code--inline bg-muted-dark text-muted">.list-view-vertical</span> to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="list-view-vertical padding--small">\n'}
                                    {'    <div id="1">Element 1</div>\n'}
                                    {'    <div id="2">Element 2</div>\n'}
                                    {'    <div id="3">Element 3</div>\n'}
                                    {'    <div id="4">Element 4</div>\n'}
                                    {'    <div id="5">Element 5</div>\n'}
                                    {'    <div id="1">Element 6</div>\n'}
                                    {'    <div id="2">Element 7</div>\n'}
                                    {'    <div id="3">Element 8</div>\n'}
                                    {'    <div id="4">Element 9</div>\n'}
                                    {'    <div id="5">Element 10</div>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="gridRow col-height-2">
                                        <div className="page-view">
                                            <div className="list-view-vertical padding--small">
                                                <div id="1" className="paddingSmall">Element 1</div>
                                                <div id="2" className="paddingSmall">Element 2</div>
                                                <div id="3" className="paddingSmall">Element 3</div>
                                                <div id="4" className="paddingSmall">Element 4</div>
                                                <div id="5" className="paddingSmall">Element 5</div>
                                                <div id="1" className="paddingSmall">Element 6</div>
                                                <div id="2" className="paddingSmall">Element 7</div>
                                                <div id="3" className="paddingSmall">Element 8</div>
                                                <div id="4" className="paddingSmall">Element 9</div>
                                                <div id="5" className="paddingSmall">Element 10</div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </p>

                        <br />

                        <h2 className="subtitle">Nested Views</h2>
                        <p className="text-regular">
                            Nested views are a combination of different types of views inside each other. It can create complex layouts and interactions. It is useful for creating grids, columns, rows, or stacks. To use nested views in HTML, you need to nest <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> elements with different view classes. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="row-center grid-row">\n'}
                                    {'    <div class="col-width-3-ld list-view-vertical">\n'}
                                    {'      <!-- 3 Column Content -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-9-ld list-view-vertical">\n'}
                                    {'      <!-- 9 Column Content -->\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-3-ld list-view-vertical">\n'}
                                    {'      <!-- 3 Column Content -->\n'}
                                    {'    </div>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                      <div className="row-center grid-row">
                                        <div className="col-width-3-ld list-view-vertical">
                                          {'<!-- 3 Column Content -->'}
                                        </div>
                                        <div className="col-width-9-ld list-view-vertical">
                                          {'<!-- 9 Column Content -->'}
                                        </div>
                                        <div className="col-width-3-ld list-view-vertical">
                                          {'<!-- 3 Column Content -->'}
                                        </div>
                                      </div>
                                    </div>
                                </p>
                            </div>
                            <br/>
                            This example creates a nested view with a page view as the outermost wrapper, a grid row with two columns inside it, a scroll view vertical in the first column, and another page view in the second column. You can use any combination of view classes to create different nested views.
                            <br/>
                            Fun Fact, the above example mimics the layout of invrz patterns docs.
                        </p>

                        <br/><br/>
                        <a href="./columns"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Next: Columns</button></a>&nbsp;&nbsp;&nbsp;
                        <br/><br/>
                    </div>
    );
}

export default Content;