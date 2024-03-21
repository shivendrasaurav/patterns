const Content = () => {
    return(
        <div className="withPrimaryBackground listViewVertical paddingSmall">
                        <h1 className="title">Aligners</h1>
                        <h2 className="subtitle">Align adapt justify</h2>
                        <p className="text">
                            Aligners are a set of classes that help you align content and objects in your app. They allow you to control the horizontal and vertical alignment of text, images, divs, and other elements. They also allow you to adjust the spacing and distribution of elements in a grid. Aligners are useful for creating consistent and responsive layouts that adapt to different screen sizes and orientations.
                            <br/>
                        </p>

                        <br/>

                        <h2 className="subtitle">Text align</h2>
                        <p className="text">
                            The <span className="inlineCode">.ta*</span> classes are used to align text within an element. They set the <span className="inlineCode">text-align</span> property to one of the following values: <span className="inlineCode">left</span>, <span className="inlineCode">right</span>, <span className="inlineCode">center</span>, or <span className="inlineCode">justify</span>. To use a text align class in HTML, you need to add the class to the element that contains the text. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <p class="taJustify" style="background: #6cacac">This text is justified.</p>\n'}
                                    {'  <p class="taLeft" style="background: #acacac">This text is aligned to the left.</p>\n'}
                                    {'  <p class="taCenter" style="background: #ac6cac">This text is centered.</p>\n'}
                                    {'  <p class="taRight" style="background: #acac6c">This text is aligned to the right.</p>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    <div className="pageView">
                                        <div className="gridRow rowCenter">
                                            <div className="colWd-12-ld colWd-12-sq colWd-12-sm">
                                                <p className="taJustify" style={{background: "#6cacac"}}>This text is justified.</p>
                                                <p className="taLeft" style={{background: "#acacac"}}>This text is aligned to the left.</p>
                                                <p className="taCenter" style={{background: "#ac6cac"}}>This text is centered.</p>
                                                <p className="taRight" style={{background: "#acac6c"}}>This text is aligned to the right.</p>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example shows how to use the text align classes to align text in different ways.
                        </p>

                        <br />

                        <h2 className="subtitle">Horizontal object align</h2>
                        <p className="text">
                            The <span className="inlineCode">.obj*</span> classes are used to align objects, such as images, divs, or other elements, horizontally within a parent element. To use a horizontal object align class in HTML, you need to add the class to the object element and make sure the parent element has the <span className="inlineCode">objAligner</span> class set to <span className="inlineCode">relative</span>. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="contentView ">\n'}
                                    {'  <img src="https://www.invrz.com/icon.png" class="objLeft" alt="Logo" />\n'}
                                    {'  <img src="https://www.invrz.com/icon.png" class="objCenter" alt="Logo" />\n'}
                                    {'  <img src="https://www.invrz.com/icon.png" class="objRight" alt="Logo" />\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    <div className="pageView">
                                        <div className="gridRow rowCenter">
                                            <div className="colWd-12-ld colWd-12-sq colWd-12-sm">
                                                <div className="contentView objAligner" style={{position: "relative"}}>
                                                    <img src="https://www.invrz.com/icon.png" className="objLeft imgIcon" alt="Logo" />
                                                    <img src="https://www.invrz.com/icon.png" className="objCenter imgIcon" alt="Logo" />
                                                    <img src="https://www.invrz.com/icon.png" className="objRight imgIcon" alt="Logo" />
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
                        <p className="text">
                            The <span className="inlineCode">.rowLeft</span>, <span className="inlineCode">.rowRight</span> and <span className="inlineCode">.rowCenter</span> classes are used to align columns horizontally within a grid row. To use horizontal grid align classes in HTML, you need to add the class to the <span className="inlineCode">.gridRow</span> element that contains the grid items. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow rowLeft colHi-1" style="background: #acac6c">\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">left</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="gridRow rowCenter colHi-1" style="background: #ac6cac">\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">center</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="gridRow rowRight colHi-1" style="background: #6cacac">\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">right</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                    <p className="previewRender">
                                        <div className="pageView">
                                            <div className="gridRow rowLeft colHi-1" style={{background: "#acac6c"}}>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">left</p>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>
                                            </div>
                                            <div className="gridRow rowCenter colHi-1" style={{background: "#ac6c6a"}}>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">center</p>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>
                                            </div>
                                            <div className="gridRow rowRight colHi-1" style={{background: "#6cacac"}}>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">right</p>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>
                                                <p className="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>
                                            </div>
                                        </div>
                                </p>
                            </div>
                            This example shows how to use the horizontal grid align classes to align grid items horizontally in different ways within a grid row.
                        </p>

                        <br />

                        <h2 className="subtitle">Vertical grid align</h2>
                        <p className="text">
                            The <span className="inlineCode">.rowTop</span>, <span className="inlineCode">.rowBottom</span> and <span className="inlineCode">.rowMiddle</span> classes are used to align columns vertically within a grid row. To use vertical grid align classes in HTML, you need to add the class to the <span className="inlineCode">.gridRow</span> element that contains the grid items. For example:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow colHi-2 rowTop" style="background: #acac6c">\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">top</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="gridRow colHi-2 rowMiddle" style="background: #ac6cac">\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">middle</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'  <div class="gridRow colHi-3 rowBottom" style="background: #6cacac">\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">bottom</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>\n'}
                                    {'    <p class="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    <div className="pageView">
                                        <div className="gridRow colHi-2 rowTop" style={{background: "#acac6c"}}>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">top</p>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>
                                        </div>
                                        <div className="gridRow colHi-2 rowMiddle" style={{background: "#ac6c6a"}}>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">middle</p>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>
                                        </div>
                                        <div className="gridRow colHi-2 rowBottom" style={{background: "#6cacac"}}>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">bottom</p>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">aligned</p>
                                            <p className="colWd-2-ld colWd-2-sm colWd-2-sq">columns</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            This example shows how to use the vertical grid align classes to align grid items vertically in different ways within a grid row.
                        </p>

                        <br />

                        <h2 className="subtitle">Mixed Aligners</h2>
                        <p className="text">
                            Patterns UI allows you to mix different types of aligners to align grids and objects however necessary. You can use the <span className="inlineCode">.ta*</span>, <span className="inlineCode">.obj*</span>, and <span className="inlineCode">.row*</span> classes together to create various combinations of horizontal and vertical alignment for text, images, divs, and other elements within a grid to create flexible and responsive layouts that adapt to different screen sizes and orientations.
                            <br/>
                            Here is an example of a grid where the <span className="inlineCode">.rowGrid</span> has a height of <span className="inlineCode">.colHi-2</span> and the columns are centrally aligned with text centrally aligned as well. The row, column, and text have different background colors to make them easier to differentiate:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="gridRow colHi-2 rowCenter" style="background: #acac6c">\n'}
                                    {'    <p class="colWd-8-ld colWd-8-sm colWd-8-sqtaCenter" style="background: #ac6cac">this text is centrally aligned inside a centrally aligned row</p>\n'}
                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    <div className="pageView">
                                        <div className="gridRow colHi-2 rowCenter rowMiddle" style={{background: "#acac6c"}}>
                                            <p className="colWd-8-ld colWd-8-sm colWd-8-sqtaCenter" style={{background: "#ac6cac"}}>this text is centrally aligned inside a centrally aligned row</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <br/>
                            This example shows how to use the mixed aligners to align grids and objects in different ways.
                        </p>

                        <br/><br/>
                        <a className="buttonLink" href="./breakpoints">Prev: Breakpoints</a>
                        <a className="buttonLink" href="./grids">Next: Grids</a>
                        <br/><br/>
                    </div>
    );
}

export default Content;