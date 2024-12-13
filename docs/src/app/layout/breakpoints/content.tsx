const Content = () => {
    return(
        <div className="bg-body list-view-vertical padding--small brSmooth">
                        <h1 className="title">Breakpoints</h1>
                        <h2 className="subtitle">Control how your app looks in different devicess</h2>
                        <p className="text-regular">
                            Breakpoints are the points at which the layout of your app changes based on the screen size or orientation of the device. They help you create responsive and adaptive designs that work well on different devices. Breakpoints are usually defined by the device width, such as 320px, 768px, or 1024px. However, this approach can be limiting and inconsistent, as different devices may have different aspect ratios, pixel densities, or resolutions.
                            <br/>
                            In Patterns UI, breakpoints are defined by the aspect ratio of the device, such as 16:9, 11:21, or 1:1. This approach is unique and innovative, as it targets the shape of the device instead of the width. This way, you can create truly responsive layouts that adapt to any device, regardless of its size or resolution.
                            <br/><br/>
                            <span className="code--inline bg-muted-dark text-muted">
                                !!important - sometimes square breakpoints will not necessarily mean targetted to square screens but rather everything between portrait and landscape aspect ratios!!
                            </span>
                            <br/>
                        </p>

                        <br/>

                        <h2 className="subtitle">Breakpoints in Patterns UI</h2>
                        <p className="text-regular">
                            Patterns UI provides three types of breakpoints that correspond to three common types of device shapes: portrait, landscape, and square. Each breakpoint has a class name that ends with <span className="code--inline bg-muted-dark text-muted">-sm</span>, <span className="code--inline bg-muted-dark text-muted">-ld</span>, or <span className="code--inline bg-muted-dark text-muted">-sq</span>. These classes can be applied to any element to change its style or behavior based on the device aspect ratio. The types of breakpoints in Patterns UI are:
                            <br/>
                            <ul>
                                <li>
                                    <strong>Portrait Breakpoint: </strong>
                                    This breakpoint applies to devices that have a portrait orientation, such as phones or tablets. The aspect ratio range for this breakpoint is from 0.29 to 0.58. The class name for this breakpoint is <span className="code--inline bg-muted-dark text-muted">-sm</span>.
                                </li>
                                <li>
                                    <strong>Landscape Breakpoint: </strong>
                                    This breakpoint applies to devices that have a landscape orientation, such as desktops, laptops, or TVs. The aspect ratio range for this breakpoint is from 1.25 to 2.33. The class name for this breakpoint is <span className="code--inline bg-muted-dark text-muted">-ld</span>.
                                </li>
                                <li>
                                    <strong>Square Breakpoint:</strong>
                                    This breakpoint applies to devices that have a square shape, such as watches or hubs. The aspect ratio range for this breakpoint is from 0.8 to 1.2. The class name for this breakpoint is <span className="code--inline bg-muted-dark text-muted">-sq</span>.
                                </li>
                            </ul>
                        </p>

                        <br />

                        <h2 className="subtitle">col-width-0-* classes</h2>
                        <p className="text-regular">
                            The <span className="inlineColde">col-width-0-*</span> classes are special classes that can be used to hide columns from view based on the device aspect ratio. These classes can be applied to any column element to set its display property to none. This way, you can control which columns are visible or hidden on different devices. The <span className="inlineColde">col-width-0-*</span> classes are:
                            <br/>
                            <ul>
                                <li>
                                    <strong>col-width-0-sm: </strong>
                                    This class hides the column on portrait devices. It sets the display property to none when the aspect ratio is between 0.29 and 0.58.
                                </li>
                                <li>
                                    <strong>col-width-0-ld: </strong>
                                    This class hides the column on landscape devices. It sets the display property to none when the aspect ratio is between 1.25 and 2.33.
                                </li>
                                <li>
                                    <strong>col-width-0-sq:</strong>
                                    This class hides the column on square devices. It sets the display property to none when the aspect ratio is between 0.8 and 1.2.
                                </li>
                            </ul>
                        </p>

                        <br />

                        <h2 className="subtitle">Truly responsive pages</h2>
                        <p className="text-regular">
                            You can use a combination of the breakpoint classes and the <span className="inlineColde">col-width-0-*</span> classes to create truly responsive pages that adapt to any device shape. You can use the breakpoint classes to change the style or behavior of any element based on the device aspect ratio. You can use the <span className="inlineColde">col-width-0-*</span> classes to hide or show columns based on the device aspect ratio. Here are some examples of how to use these classes to create truly responsive pages:
                            <br/>
                            <div className="code--block bg-muted-dark text-muted">
                                <p className="code--language bg-body-dark text-body">HTML</p>
                                <p className="code--text">
                                    {'<div class="page-view">\n'}
                                    {'  <div class="row-center grid-row">\n'}

                                    {'    <div class="col-width-15-sm col-width-0-ld col-width-0-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "purple"}}>\n'}
                                    {'        <p>This is a portrait/mobile screen type.</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-0-sm col-width-15-ld col-width-0-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "orange"}}>\n'}
                                    {'        <p>This is a landscape/desktop screen type.</p>\n'}
                                    {'      </div>\n'}
                                    {'    </div>\n'}
                                    {'    <div class="col-width-0-sm col-width-0-ld col-width-15-sq">\n'}
                                    {'      <div class="content-view" style={{backgroundColor: "brickred"}}>\n'}
                                    {'        <p>This is a square/hub screen type.</p>\n'}
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
                                        <div className="row-center grid-row">
                                            <div className="col-width-15-sm col-width-0-ld col-width-0-sq">
                                                <div className="content-view" style={{backgroundColor: "purple"}}>
                                                    <p>This is a portrait/mobile screen type.</p>
                                                </div>
                                            </div>
                                            <div className="col-width-0-sm col-width-15-ld col-width-0-sq">
                                                <div className="content-view" style={{backgroundColor: "orange"}}>
                                                    <p>This is a landscape/desktop screen type.</p>
                                                </div>
                                            </div>
                                            <div className="col-width-0-sm col-width-0-ld col-width-15-sq">
                                                <div className="content-view" style={{backgroundColor: "brickred"}}>
                                                    <p>This is a square/hub screen type.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </p>
                            </div>
                            The above example shows a truly responsive page which takes upto full row width and has different content and background color based on different screen sizes/types.
                        </p>

                        <br/><br/>
                        <a href="./gutters"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Prev: Gutters</button></a>&nbsp;&nbsp;&nbsp;
                        <a href="./aligners"><button className="padding--small bg-accent-dark text-accent no-border border--smoother">Next: Aligners</button></a>
                        <br/><br/>
                    </div>
    );
}

export default Content;