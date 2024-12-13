const Content = () => {
    return(
        <div className="bg-body list-view-vertical padding--small brSmooth">
                        <h1 className="title">Grids</h1>
                        <h2 className="subtitle">Define your app’s layout</h2>
                        <p className="text-regular">
                            Grids are a system of creating and organizing layouts for your app. They help you divide the space into rows and columns, and arrange your content and objects in a consistent and responsive way. Grids are important for creating user-friendly and accessible designs that work well on different devices and screen sizes. There are many types of grids that can be used for different purposes and effects, such as 2 column, 3 column, or bento grids.
                            <br/>
                            To make a grid in Patterns UI, you need to follow these steps:
                            <br/>
                            <ol type="1">
                                <li>
                                    <strong>Define a view:</strong>
                                    A view is a rectangular area on the screen that displays some content. Views are the basic building blocks of any user interface in Patterns UI. You can use any type of view, such as page view, content view, or scroll view, to create a grid. To use a view in HTML, you need to add the class for a view type to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element, where view type is the name of the view, such as .page-view or .content-view.
                                </li>
                                <li>
                                    <strong>Add a row:</strong>
                                        A row is a horizontal division of a grid. It can contain one or more columns inside it. To add a row in HTML, you need to add the class <span className="code--inline bg-muted-dark text-muted">.grid-row</span> to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element inside the view element. You can also use variations of the row class to create different effects, such as <span className="code--inline bg-muted-dark text-muted">.row-left</span>, <span className="code--inline bg-muted-dark text-muted">.row-right</span>, or <span className="code--inline bg-muted-dark text-muted">.row-center</span>.
                                </li>
                                <li>
                                    <strong>Add columns:</strong>
                                    A column is a vertical division of a grid. It can contain any content or object inside it. To add a column in HTML, you need to add the class <span className="code--inline bg-muted-dark text-muted">.col-width-*</span> to a <span className="code--inline bg-muted-dark text-muted">{"<div>"}</span> element inside the row element, where <span className="code--inline bg-muted-dark text-muted">*</span> is a number from 1 to 15. This number indicates how much space the column takes in a row. The total space in a row is 15 units, so you can use any combination of column classes that add up to 15 or less.
                                </li>
                            </ol>
                            <br/>
                        </p>

                        <br/>

                        <h2 className="subtitle">2 Column Grid</h2>
                        <p className="text-regular">
                            A 2 column grid is a grid that has two columns in each row. It is a simple and common layout that can be used for various purposes, such as displaying text and images, creating sidebars or menus, or comparing two items. Many websites or apps use a 2 column grid for their design, such as Medium, Wikipedia, or Gmail. Patterns UI docs is also based on a 2 column grid, where the left column shows the navigation menu and the right column shows the content.
                            <br/>
                            Here is an example implementation of a 2 column grid where the columns are of height <span className="code--inline bg-muted-dark text-muted">.col-height-2</span> and unit sizes of 4 and 6 with some text written inside of columns:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="row-center grid-row col-height-2">\n'}

                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 1st column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-6-sm col-width-6-ld col-width-6-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 2nd column taking 6 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    
                                    <div className="page-view">
                                      <div className="row-center grid-row col-height-2">

                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>
                                            <p className="object-align--middle object-align--center">This is 1st column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="col-width-6-sm col-width-6-ld col-width-6-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>
                                            <p className="object-align--middle object-align--center">This is 2nd column taking 6 units of space</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                </p>
                            </div>
                        </p>

                        <br/>

                        <h2 className="subtitle">3 Column Grid</h2>
                        <p className="text-regular">
                            A 3 column grid is a grid that has three columns in each row. It is a more complex and versatile layout that can be used for various purposes, such as displaying multiple items, creating categories or sections, or showing different views or perspectives. Many websites or apps use a 3 column grid for their design, such as Pinterest, YouTube, or Twitter.
                            <br/>
                            Here is an example implementation of a 3 column grid where the columns are of height <span className="code--inline bg-muted-dark text-muted">.col-height-2</span> and unit sizes of 4, 4 and 4 with some text written inside of columns:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="row-center grid-row col-height-2">\n'}

                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 1st column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 2nd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}                                    
                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 3rd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    
                                    <div className="page-view">
                                      <div className="row-center grid-row col-height-2">

                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>
                                            <p className="object-align--middle object-align--center">This is 1st column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>
                                            <p className="object-align--middle object-align--center">This is 2nd column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>
                                            <p className="object-align--middle object-align--center">This is 3rd column taking 4 units of space</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                </p>
                            </div>
                        </p>

                        <br/>

                        <h2 className="subtitle">Bento Grid</h2>
                        <p className="text-regular">
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
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    
                                    {'  <div class="row-center grid-row col-height-2">\n'}

                                    {'    <div class="col-width-6-sm col-width-6-ld col-width-6-sq">\n'}
                                    {'      <div class="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 1st column taking 6 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-6-sm col-width-6-ld col-width-6-sq">\n'}
                                    {'      <div class="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 2nd column taking 6 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    
                                    {'  <div class="row-center grid-row col-height-2">\n'}

                                    {'    <div class="col-width-12-sm col-width-12-ld col-width-12-sq">\n'}
                                    {'      <div class="content-view object-alignment-wrapper" style={{backgroundColor: "green"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 1st column taking 12 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}

                                    {'  <div class="row-center grid-row col-height-2">\n'}

                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 1st column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 2nd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}                                    
                                    {'    <div class="col-width-4-sm col-width-4-ld col-width-4-sq">\n'}
                                    {'      <div class="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p class="object-align--middle object-align--center">This is 3rd column taking 4 units of space</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}

                                    {'  </div>\n'}
                                    {'</div>'}
                                </p>
                            </div>
                            <br/>
                            <div className="preview--block bg-body-dark text-body">
                                <p className="preview--language bg-accent-dark text-accent">Preview</p>
                                <p className="preview--render">
                                    
                                    
                                <div className="page-view">
                                    
                                      <div className="row-center grid-row col-height-2">

                                        <div className="col-width-6-sm col-width-6-ld col-width-6-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>
                                            <p className="object-align--middle object-align--center">This is 1st column taking 6 units of space</p>
                                          </div>
                                        </div>
                                        <div className="col-width-6-sm col-width-6-ld col-width-6-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>
                                            <p className="object-align--middle object-align--center">This is 2nd column taking 6 units of space</p>
                                          </div>
                                        </div>

                                      </div>

                                      <div className="row-center grid-row col-height-2">

                                        <div className="col-width-12-sm col-width-12-ld col-width-12-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "green"}}>
                                            <p className="object-align--middle object-align--center">This is 1st column taking 12 units of space</p>
                                          </div>
                                        </div>

                                      </div>

                                      <div className="row-center grid-row col-height-2">

                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>
                                            <p className="object-align--middle object-align--center">This is 1st column taking 4 units of space</p>
                                          </div>
                                        </div>
                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "orange"}}>
                                            <p className="object-align--middle object-align--center">This is 2nd column taking 4 units of space</p>
                                          </div>
                                        </div>                           
                                        <div className="col-width-4-sm col-width-4-ld col-width-4-sq">
                                          <div className="content-view object-alignment-wrapper" style={{backgroundColor: "purple"}}>
                                            <p className="object-align--middle object-align--center">This is 3rd column taking 4 units of space</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                </p>
                            </div>
                            This example creates a bento grid where each row has a different number and size of columns, and all rows are aligned to the center
                        </p>

                        <br/><br/>
                        <a href="./aligners"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Prev: Aligners</button></a>&nbsp;&nbsp;&nbsp;
                        <br/><br/>
                    </div>
    );
}

export default Content;