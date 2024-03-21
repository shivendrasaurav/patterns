const Content = () => {
    return(
        <div className="withPrimaryBackground listViewVertical paddingSmall brSmooth">
                        <h1 className="title">Grids</h1>
                        <h2 className="subtitle">Define your app’s layout</h2>
                        <p className="text">
                            Grids are a system of creating and organizing layouts for your app. They help you divide the space into rows and columns, and arrange your content and objects in a consistent and responsive way. Grids are important for creating user-friendly and accessible designs that work well on different devices and screen sizes. There are many types of grids that can be used for different purposes and effects, such as 2 column, 3 column, or bento grids.
                            <br/>
                            To make a grid in Patterns UI, you need to follow these steps:
                            <br/>
                            <ol type="1">
                                <li>
                                    <strong>Define a view:</strong>
                                    A view is a rectangular area on the screen that displays some content. Views are the basic building blocks of any user interface in Patterns UI. You can use any type of view, such as page view, content view, or scroll view, to create a grid. To use a view in HTML, you need to add the class for a view type to a <span className="inlineCode">{"<div>"}</span> element, where view type is the name of the view, such as .pageView or .contentView.
                                </li>
                                <li>
                                    <strong>Add a row:</strong>
                                        A row is a horizontal division of a grid. It can contain one or more columns inside it. To add a row in HTML, you need to add the class <span className="inlineCode">.gridRow</span> to a <span className="inlineCode">{"<div>"}</span> element inside the view element. You can also use variations of the row class to create different effects, such as <span className="inlineCode">.rowLeft</span>, <span className="inlineCode">.rowRight</span>, or <span className="inlineCode">.rowCenter</span>.
                                </li>
                                <li>
                                    <strong>Add columns:</strong>
                                    A column is a vertical division of a grid. It can contain any content or object inside it. To add a column in HTML, you need to add the class <span className="inlineCode">.colWd-*</span> to a <span className="inlineCode">{"<div>"}</span> element inside the row element, where <span className="inlineCode">*</span> is a number from 1 to 15. This number indicates how much space the column takes in a row. The total space in a row is 15 units, so you can use any combination of column classes that add up to 15 or less.
                                </li>
                            </ol>
                            <br/>
                        </p>

                        <br/>

                        <h2 className="subtitle">2 Column Grid</h2>
                        <p className="text">
                            A 2 column grid is a grid that has two columns in each row. It is a simple and common layout that can be used for various purposes, such as displaying text and images, creating sidebars or menus, or comparing two items. Many websites or apps use a 2 column grid for their design, such as Medium, Wikipedia, or Gmail. Patterns UI docs is also based on a 2 column grid, where the left column shows the navigation menu and the right column shows the content.
                            <br/>
                            Here is an example implementation of a 2 column grid where the columns are of height <span className="inlineCode">.colHi-2</span> and unit sizes of 4 and 6 with some text written inside of columns:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="rowCenter gridRow colHi-2">\n'}

                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 1st column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-6-sm colWd-6-ld colWd-6-sq">\n'}
                                    {'      <div class="contentView" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 2nd column taking 6 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    
                                    <div className="pageView">
                                      <div className="rowCenter gridRow colHi-2">

                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "purple"}}>
                                            <p className="objMiddle taCenter">This is 1st column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="colWd-6-sm colWd-6-ld colWd-6-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "orange"}}>
                                            <p className="objMiddle taCenter">This is 2nd column taking 6 units of space</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                </p>
                            </div>
                        </p>

                        <br/>

                        <h2 className="subtitle">3 Column Grid</h2>
                        <p className="text">
                            A 3 column grid is a grid that has three columns in each row. It is a more complex and versatile layout that can be used for various purposes, such as displaying multiple items, creating categories or sections, or showing different views or perspectives. Many websites or apps use a 3 column grid for their design, such as Pinterest, YouTube, or Twitter.
                            <br/>
                            Here is an example implementation of a 3 column grid where the columns are of height <span className="inlineCode">.colHi-2</span> and unit sizes of 4, 4 and 4 with some text written inside of columns:
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    {'  <div class="rowCenter gridRow colHi-2">\n'}

                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 1st column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 2nd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}                                    
                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 3rd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    
                                    <div className="pageView">
                                      <div className="rowCenter gridRow colHi-2">

                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "orange"}}>
                                            <p className="objMiddle taCenter">This is 1st column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "purple"}}>
                                            <p className="objMiddle taCenter">This is 2nd column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "orange"}}>
                                            <p className="objMiddle taCenter">This is 3rd column taking 4 units of space</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                </p>
                            </div>
                        </p>

                        <br/>

                        <h2 className="subtitle">Bento Grid</h2>
                        <p className="text">
                            A bento grid is a grid that has different numbers and sizes of columns in each row. It is a new and trendy layout that can be used for various purposes, such as displaying diverse and dynamic content, creating visual interest or hierarchy, or showing different levels of detail or information. Many websites or apps use a bento grid for their design, such as Spotify, Netflix, or Instagram.
                            <br/>
                            Here is an example implementation of a bento grid where all rows are centrally aligned and this is how the rows lay:
                            <br/>
                            <ul>
                                <li>
                                row 1 - height 2, 2 columns of units 6 and 6
                                </li>
                                <li>
                                row 2 - height 2, 1 column of unit 12
                                </li>
                                <li>
                                row 3 - height 2, 3 columns of units 4, 4, and 4
                                </li>
                            </ul>
                            <br/>
                            <div className="codeBlock">
                                <p className="codeLanguage">HTML</p>
                                <p className="codeText">
                                    {'<div class="pageView">\n'}
                                    
                                    {'  <div class="rowCenter gridRow colHi-2">\n'}

                                    {'    <div class="colWd-6-sm colWd-6-ld colWd-6-sq">\n'}
                                    {'      <div class="contentView objAligner" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 1st column taking 6 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-6-sm colWd-6-ld colWd-6-sq">\n'}
                                    {'      <div class="contentView objAligner" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 2nd column taking 6 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    
                                    {'  <div class="rowCenter gridRow colHi-2">\n'}

                                    {'    <div class="colWd-12-sm colWd-12-ld colWd-12-sq">\n'}
                                    {'      <div class="contentView objAligner" style={{backgroundColor: "green"}}>\n'}
                                    {'        <p class="objMiddle objCenter taCenter">This is 1st column taking 12 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}

                                    {'  <div class="rowCenter gridRow colHi-2">\n'}

                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView objAligner" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 1st column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView objAligner" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 2nd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}                                    
                                    {'    <div class="colWd-4-sm colWd-4-ld colWd-4-sq">\n'}
                                    {'      <div class="contentView objAligner" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="objMiddle taCenter">This is 3rd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="previewBlock">
                                <p className="previewTitle">Preview</p>
                                <p className="previewRender">
                                    
                                    
                                <div className="pageView">
                                    
                                      <div className="rowCenter gridRow colHi-2">

                                        <div className="colWd-6-sm colWd-6-ld colWd-6-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "orange"}}>
                                            <p className="objMiddle taCenter">This is 1st column taking 6 units of space</p>
                                          </div>
                                        </div>
                                        <div className="colWd-6-sm colWd-6-ld colWd-6-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "purple"}}>
                                            <p className="objMiddle taCenter">This is 2nd column taking 6 units of space</p>
                                          </div>
                                        </div>

                                      </div>

                                      <div className="rowCenter gridRow colHi-2">

                                        <div className="colWd-12-sm colWd-12-ld colWd-12-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "green"}}>
                                            <p className="objMiddle objCenter taCenter">This is 1st column taking 12 units of space</p>
                                          </div>
                                        </div>

                                      </div>

                                      <div className="rowCenter gridRow colHi-2">

                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "purple"}}>
                                            <p className="objMiddle taCenter">This is 1st column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "orange"}}>
                                            <p className="objMiddle taCenter">This is 2nd column taking 4 units of space</p>
                                          </div>
                                        </div>                           
                                        <div className="colWd-4-sm colWd-4-ld colWd-4-sq">
                                          <div className="contentView objAligner" style={{backgroundColor: "purple"}}>
                                            <p className="objMiddle taCenter">This is 3rd column taking 4 units of space</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                </p>
                            </div>
                            This example creates a bento grid where each row has a different number and size of columns, and all rows are aligned to the center
                        </p>

                        <br/><br/>
                        <a className="buttonLink" href="./aligners">Prev: Aligners</a>
                        <br/><br/>
                    </div>
    );
}

export default Content;