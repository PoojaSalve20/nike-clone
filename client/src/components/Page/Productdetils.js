import React from 'react';

const Productdetails = () => {
    return(
        <div>
          <div className="container">
            <div className="row .">
              <div className="col-md-7 .">
                <div className="row .">
                  <div className="col-md-6 .">
                    <img style={{height:"auto", width:"100%"}} src="./img/nikeimgb.png"></img>
                  </div>
                  <div className="col-md-6 .">
                    <img style={{height:"auto", width:"100%"}} src="./img/nikeimgb.png"></img>
                  </div>
                </div>
                <br/>
                <div className="row .">
                  <div className="col-md-6 .">
                    <img style={{height:"auto", width:"100%"}} src="./img/nikeimgb.png"></img>
                  </div>
                  <div className="col-md-6 .">
                    <img style={{height:"auto", width:"100%"}} src="./img/nikeimgb.png"></img>
                  </div>
                </div>
              </div>
              <div className="col-md-5 .">
                  <div className="row .">
                      <div className="col-md-8  offset-md-1 .">
                        <p>Women's Slim-Fit <br/>
                          Traking Tank
                        </p>
                      </div>
                      <div className="  col-md-3 ">
                        <p>
                          ₹3,495
                          incl. of taxes and duties
                        </p>
                      </div>
                  </div>
                  <div className="row .">
                    <div className="col-md-11  offset-md-1">
                         <h2>Nike Dri-FIT ADV<br/> AURA</h2>
                    </div>
                  </div>
                  <div className="row .">
                    <div className="col-md-11 offset-md-1 .">
                          <p className="mt-2">Sustainable Materials</p>
                    </div>
                  </div>
                  <div className="row .">
                    <div className="col-8 col-md-8  offset-md-1 .">
                          <p>Select Size</p>
                    </div>
                    <div className="col-3 col-md-3 .">
                          <p>Size Guide</p>
                    </div>
                  </div>
                  <div>
                    <div className="row . p-1 pl-5">
                      <div className="col-2 col-md-2 .">
                      <button type="button" class="btn  text-center  justify-content-between  btn-outline-dark"style={{height: "48px",width: "60px"}}>S</button>   
                      </div>
                      <div className="col-2 col-md-2 .">
                      <button type="button" class="btn  text-center  justify-content-between  btn-outline-dark"style={{height: "48px",width: "60px"}}>S</button>
                      </div>
                      <div className="col-2 col-md-2 .">
                            <button type="button" class="btn  text-center  justify-content-between  btn-outline-dark"style={{height: "48px",width: "60px"}}>S</button>
                      </div>
                      <div className=" col-2 col-md-2 .">
                      <button type="button" class="btn  text-center  justify-content-between  btn-outline-dark"style={{height: "48px",width: "60px"}}>S</button>
                      </div>
                      <div className="col-2 col-md-2 .">
                      <button type="button" class="btn  text-center  justify-content-between  btn-outline-dark"style={{height: "48px",width: "60px"}}>S</button>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-12 col-md-10 offset-md-1 .">
                      <button className="btn btn-dark rounded-pill btn-lg btn-block pbtnaddbag"> Add to bag</button>
                    </div>
                  </div>
                  <div className="row . mt-3">
                    <div className="col-12 col-md-10 offset-md-1 .">
                      <button className="btn btn-light rounded-pill btn-lg btn-block">Favourite</button>
                    </div>
                  </div>
                  <div className="row . mt-5">
                    <div className="col-12 col-md-10 offset-md-1  .">
                      <p>
                      Matching effortless comfort with technical performance, the Nike Dri-FIT ADV Aura Tank ticks all the boxes.Soft, lightweight fabric (with plenty of stretch) wicks sweat and dries fast. It's also incredibly breathable with hits of mesh blended into a smooth and virtually seamless design.Feel confident knowing you can take on any workout in comfort.This product is made with at least 75% recycled nylon fibres.
                      </p>
                    </div>
                  </div>
                  <div className="row .">
                    <div className="col-12 col-md-10 offset-md-1  .">
                      <ul>
                        <li>Colour Shown: Ashen Slate</li>
                        <li>Style: DD05869-468</li>
                      </ul>
                    </div>
                  </div>
                  {/* accordion code */}
                  <div className="row .">
                    <div className="col-12 col-md-11   offset-md-1 .">
                    <div id="accordion">
                        <div class="card">
                          <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Size & Fit
                              </button>
                            </h5>
                          </div>

                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free Delivery and Return
                              </button>
                            </h5>
                          </div>
                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How This Was Made
                              </button>
                            </h5>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Reviews(0)
                              </button>
                            </h5>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Manufacturing & Import Info
                              </button>
                            </h5>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Accordian code */}
              </div>
            </div>
          </div>
        </div>
    )
}
export default Productdetails;