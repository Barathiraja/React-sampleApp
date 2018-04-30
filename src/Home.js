import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ padding: "2rem" }}>
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src={require("./profile.jpg")}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Barathiraja</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    @barathirajaOfficial
                                </h6>
                                <a className="card-link text-muted">Tweets</a>
                                <a className="card-link text-muted">Following</a>
                                <a className="card-link text-muted">Followers</a>
                            </div>
                        </div>
                        <div style={{ padding: "4px" }} />
                        <div className="card" style={{ width: "18rem", height: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Trends for you</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    #IthuNammaPride
                                </h6>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    #HpyBdaySachin
                                </h6>
                                <h6 className="card-subtitle mb-2 text-muted">#loveAll</h6>
                                <h6 className="card-subtitle mb-2 text-muted">#BanSomething</h6>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    #saveSomething
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "30rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Barathiraja</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    @barathirajaOfficial
                                </h6>
                                <p className="card-text">
                                    வாழ்க்கையை மிகுந்த தன்னம்பிக்கையோடு எதிர்கொள்ள, csk
                                    இன்னிங்ஸ்களே போதும் போல.
                                </p>
                                <a href="#" className="card-link">
                                    Like <i className="fa fa-heart-o" />
                                </a>
                                <a href="#" className="card-link">
                                    Retweet <i className="fa fa-retweet" />
                                </a>
                                <a href="#" className="card-link">
                                    Reply <i className="fa fa-reply" />
                                </a>
                            </div>
                        </div>
                        <div style={{ padding: "2px" }} />
                        <div className="card" style={{ width: "30rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Bill Gates</h5>
                                <h6 className="card-subtitle mb-2 text-muted">@billgates</h6>
                                <p className="card-text">
                                    Vaccines are a miracle. We have a shared responsibility to
                                    ensure that all children, no matter where they live, have a
                                    shot at life. #VaccinesWork
                                </p>
                                <a href="#" className="card-link">
                                    Like <i className="fa fa-heart-o" />
                                </a>
                                <a href="#" className="card-link">
                                    Retweet <i className="fa fa-retweet" />
                                </a>
                                <a href="#" className="card-link">
                                    Reply <i className="fa fa-reply" />
                                </a>
                            </div>
                        </div>
                        <div style={{ padding: "2px" }} />
                        <div className="card" style={{ width: "30rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Elon Musk</h5>
                                <h6 className="card-subtitle mb-2 text-muted">@elonmusk</h6>
                                <p className="card-text">
                                    Tesla batteries are currently live & delivering power at 662
                                    locations in Puerto Rico. Team is working 24/7 to activate
                                    several hundred more.
                                </p>
                                <a href="#" className="card-link">
                                    Like <i className="fa fa-heart-o" />
                                </a>
                                <a href="#" className="card-link">
                                    Retweet <i className="fa fa-retweet" />
                                </a>
                                <a href="#" className="card-link">
                                    Reply <i className="fa fa-reply" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="offset-1 col-2">
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Who to follow{" "}
                                    <span className="text-muted" style={{ fontSize: "12px" }}>
                    .Refresh .View all
                  </span>
                                </h5>
                                {/*<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>*/}
                                {/*<a href="#" className="card-link">Card link</a>*/}
                                <div>
                                    <img
                                        src={require("./profile.jpg")}
                                        style={{ height: "50px" }}
                                        alt="..."
                                        className="rounded-circle"
                                    />
                                    <a>
                                        &nbsp;&nbsp;<b>SpaceX</b>
                                        <span className="text-muted">@spacex</span>
                                    </a>{" "}
                                    <span>&nbsp;&nbsp;</span>
                                    <button className="btn-sm btn-secondary">follow</button>
                                </div>
                                <hr />
                                <div>
                                    <img
                                        src={require("./profile.jpg")}
                                        style={{ height: "50px" }}
                                        alt="..."
                                        className="rounded-circle"
                                    />
                                    <a>
                                        &nbsp;&nbsp;<b>TimCook</b>
                                        <span className="text-muted">@tim_cook</span>
                                    </a>{" "}
                                    <span>&nbsp;&nbsp;</span>
                                    <button className="btn-sm btn-secondary">follow</button>
                                </div>
                                <hr />
                                <div>
                                    <img
                                        src={require("./profile.jpg")}
                                        style={{ height: "50px" }}
                                        alt="..."
                                        className="rounded-circle"
                                    />
                                    <a>
                                        &nbsp;&nbsp;<b>NASA</b>
                                        <span className="text-muted">@Nasa</span>
                                    </a>{" "}
                                    <span>&nbsp;&nbsp;</span>
                                    <button className="btn-sm btn-secondary">follow</button>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <p className="card-text">
                                    © 2018 TwitterAboutHelp CenterTermsPrivacy policyCookiesAds
                                    infoBrandBlogStatusAppsJobsAdvertiseMarketingBusinessesDevelopers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
