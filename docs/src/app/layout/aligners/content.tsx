const Content = () => {
    return(
        <div className="bg-body list-view-vertical padding--small">
                        <h1 className="title">Aligners</h1>
                        <h2 className="subtitle">Align adapt justify</h2>
                        <p className="text-regular">
                            Aligners are a set of classes that help you align content and objects in your app. They allow you to control the horizontal and vertical alignment of text, images, divs, and other elements. They also allow you to adjust the spacing and distribution of elements in a grid. Aligners are useful for creating consistent and responsive layouts that adapt to different screen sizes and orientations.
                            <br/>
                        </p>

                        <br/>

                        <h2 className="subtitle">Text align</h2>
                        <p className="text-regular">
                            The <span className="code--inline bg-muted-dark text-muted">.text-align--*</span> classes are used to align text within an element. They set the <span className="code--inline bg-muted-dark text-muted">text-align</span> property to one of the following values: <span className="code--inline bg-muted-dark text-muted">left</span>, <span className="code--inline bg-muted-dark text-muted">right</span>, <span className="code--inline bg-muted-dark text-muted">center</span>, or <span className="code--inline bg-muted-dark text-muted">justify</span>. To use a text align class in HTML, you need to add the class to the element that contains the text. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <p class="text-align--justify" style="background: #6cacac">This text is justified.</p>\n'}
                                    {'  <p class="text-align--left" style="background: #acacac">This text is aligned to the left.</p>\n'}
                                    {'  <p class="text-align--center" style="background: #ac6cac">This text is centered.</p>\n'}
                                    {'  <p class="text-align--right" style="background: #acac6c">This text is aligned to the right.</p>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        <div className="grid-row row-center">
                                            <div className="col-width-12-ld col-width-12-sq col-width-12-sm">
                                                <p className="text-align--justify" style={{background: "#6cacac"}}>This text is justified.</p>
                                                <p className="text-align--left" style={{background: "#acacac"}}>This text is aligned to the left.</p>
                                                <p className="text-align--center" style={{background: "#ac6cac"}}>This text is centered.</p>
                                                <p className="text-align--right" style={{background: "#acac6c"}}>This text is aligned to the right.</p>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example shows how to use the text align classes to align text in different ways.
                        </p>

                        <br />

                        <h2 className="subtitle">Horizontal object align</h2>
                        <p className="text-regular">
                            The <span className="code--inline bg-muted-dark text-muted">.object-align--*</span> classes are used to align objects, such as images, divs, or other elements, horizontally within a parent element. To use a horizontal object align class in HTML, you need to add the class to the object element and make sure the parent element has the <span className="code--inline bg-muted-dark text-muted">object-alignment-wrapper</span> class set to <span className="code--inline bg-muted-dark text-muted">relative</span>. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="content-view object-alignment-wrapper">\n'}
                                    {'  <img src="https://www.invrz.com/icon.png" class="object-align--left" alt="Logo" />\n'}
                                    {'  <img src="https://www.invrz.com/icon.png" class="object-align--center" alt="Logo" />\n'}
                                    {'  <img src="https://www.invrz.com/icon.png" class="object-align--right" alt="Logo" />\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        <div className="grid-row row-center">
                                            <div className="col-width-12-ld col-width-12-sq col-width-12-sm">
                                                <div className="content-view object-alignment-wrapper" style={{position: "relative"}}>
                                                    <img src="https://www.invrz.com/icon.png" className="object-align--left imgIcon" alt="Logo" />
                                                    <img src="https://www.invrz.com/icon.png" className="object-align--center imgIcon" alt="Logo" />
                                                    <img src="https://www.invrz.com/icon.png" className="object-align--right imgIcon" alt="Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example shows how to use the horizontal object align classes to align images horizontally in different positions within a parent element.
                        </p>

                        <br />

                        <h2 className="subtitle">Horizontal grid align</h2>
                        <p className="text-regular">
                            The <span className="code--inline bg-muted-dark text-muted">.row-left</span>, <span className="code--inline bg-muted-dark text-muted">.row-right</span> and <span className="code--inline bg-muted-dark text-muted">.row-center</span> classes are used to align columns horizontally within a grid row. To use horizontal grid align classes in HTML, you need to add the class to the <span className="code--inline bg-muted-dark text-muted">.grid-row</span> element that contains the grid items. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row row-left col-height-1" style="background: #acac6c">\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">left</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="grid-row row-center col-height-1" style="background: #ac6cac">\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">center</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="grid-row row-right col-height-1" style="background: #6cacac">\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">right</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                    <p className="preview--render">
                                        <div className="page-view">
                                            <div className="grid-row row-left col-height-1" style={{background: "#acac6c"}}>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">left</p>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>
                                            </div>
                                            <div className="grid-row row-center col-height-1" style={{background: "#ac6c6a"}}>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">center</p>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>
                                            </div>
                                            <div className="grid-row row-right col-height-1" style={{background: "#6cacac"}}>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">right</p>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>
                                                <p className="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>
                                            </div>
                                        </div>
                                </p>
                            </div>
                            This example shows how to use the horizontal grid align classes to align grid items horizontally in different ways within a grid row.
                        </p>

                        <br />

                        <h2 className="subtitle">Vertical grid align</h2>
                        <p className="text-regular">
                            The <span className="code--inline bg-muted-dark text-muted">.row-top</span>, <span className="code--inline bg-muted-dark text-muted">.row-bottom</span> and <span className="code--inline bg-muted-dark text-muted">.row-middle</span> classes are used to align columns vertically within a grid row. To use vertical grid align classes in HTML, you need to add the class to the <span className="code--inline bg-muted-dark text-muted">.grid-row</span> element that contains the grid items. For example:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row col-height-2 row-top" style="background: #acac6c">\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">top</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="grid-row col-height-2 row-middle" style="background: #ac6cac">\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">middle</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="grid-row col-height-3 row-bottom" style="background: #6cacac">\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">bottom</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>\n'}
                                    {'    <p class="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        <div className="grid-row col-height-2 row-top" style={{background: "#acac6c"}}>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">top</p>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>
                                        </div>
                                        <div className="grid-row col-height-2 row-middle" style={{background: "#ac6c6a"}}>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">middle</p>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>
                                        </div>
                                        <div className="grid-row col-height-2 row-bottom" style={{background: "#6cacac"}}>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">bottom</p>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">aligned</p>
                                            <p className="col-width-2-ld col-width-2-sm col-width-2-sq">columns</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example shows how to use the vertical grid align classes to align grid items vertically in different ways within a grid row.
                        </p>

                        <br />

                        <h2 className="subtitle">Mixed Aligners</h2>
                        <p className="text-regular">
                            Patterns UI allows you to mix different types of aligners to align grids and objects however necessary. You can use the <span className="code--inline bg-muted-dark text-muted">.text-align--*</span>, <span className="code--inline bg-muted-dark text-muted">.object-align--*</span>, and <span className="code--inline bg-muted-dark text-muted">.row-*</span> classes together to create various combinations of horizontal and vertical alignment for text, images, divs, and other elements within a grid to create flexible and responsive layouts that adapt to different screen sizes and orientations.
                            <br/>
                            Here is an example of a grid where the <span className="code--inline bg-muted-dark text-muted">.grid-row</span> has a height of <span className="code--inline bg-muted-dark text-muted">.col-height-2</span> and the columns are centrally aligned with text centrally aligned as well. The row, column, and text have different background colors to make them easier to differentiate:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="grid-row col-height-2 row-center" style="background: #acac6c">\n'}
                                    {'    <p class="col-width-8-ld col-width-8-sm col-width-8-sq text-align--center" style="background: #ac6cac">this text is centrally aligned inside a centrally aligned row</p>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    <div className="page-view">
                                        <div className="grid-row col-height-2 row-center row-middle" style={{background: "#acac6c"}}>
                                            <p className="col-width-8-ld col-width-8-sm col-width-8-sq text-align--center" style={{background: "#ac6cac"}}>this text is centrally aligned inside a centrally aligned row</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <br/>
                            This example shows how to use the mixed aligners to align grids and objects in different ways.
                        </p>

                        <br/><br/>
                        <a href="./breakpoints"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Prev: Breakpoints</button></a>&nbsp;&nbsp;&nbsp;
                        <a href="./grids"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Next: Grids</button></a>
                        <br/><br/>
                    </div>
    );
}

export default Content;