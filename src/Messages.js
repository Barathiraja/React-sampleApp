import React, { Component } from "react";

class Messages extends Component {
    render() {
        return (
            <div style={{padding: "30px"}}>
            <div  className="container-fluid">
                <div className="row">

                    <div className="offset-2 col-md-8">
                        <div className="card mb-3">
                            {/*<img className="card-img-top" src=".../100px180/" alt="Card image cap" />*/}
                            <div className="card-body">
                                <h5 className="card-title">Direct Messages  <button className="btn btn-sm btn-outline-secondary pull-right">new message</button>
                                </h5>
                                <hr/>
                                <div>
                                    <img src={require('./profile.jpg')} style={{height:"50px"}} alt="..." className="rounded-circle" />
                                    <a>&nbsp;&nbsp;<b>TimCook</b><span className="text-muted">@tim_cook</span></a> <span>&nbsp;&nbsp;</span>
                                    <p className="pull-right">Mar 01</p>
                                    <p style={{paddingLeft:"4rem"}}>Bye Barathi</p>                                </div>
                                <hr/>
                                <div>
                                    <img src={require('./profile.jpg')} style={{height:"50px"}} alt="..." className="rounded-circle" />
                                    <a>&nbsp;&nbsp;<b>TimCook</b><span className="text-muted">@tim_cook</span></a> <span>&nbsp;&nbsp;</span>
                                    <p className="pull-right">Mar 05</p>
                                    <p style={{paddingLeft:"4rem"}}>You: Hello machi</p>                                </div>
                                <hr/>
                                <div>
                                    <img src={require('./profile.jpg')} style={{height:"50px"}} alt="..." className="rounded-circle" />
                                    <a>&nbsp;&nbsp;<b>TimCook</b><span className="text-muted">@tim_cook</span></a> <span>&nbsp;&nbsp;</span>
                                    <p className="pull-right">Apr 27</p>
                                    <p style={{paddingLeft:"4rem"}}>will meet you Barathi!</p>                                </div>
                                <hr/>
                                <div>
                                    <img src={require('./profile.jpg')} style={{height:"50px"}} alt="..." className="rounded-circle" />
                                    <a>&nbsp;&nbsp;<b>TimCook</b><span className="text-muted">@tim_cook</span></a> <span>&nbsp;&nbsp;</span>
                                    <p className="pull-right">Apr 27</p>
                                    <p style={{paddingLeft:"4rem"}}>You: Hello</p>
                                </div>
                                <hr/>
                                <div>
                                    <img src={require('./profile.jpg')} style={{height:"50px"}} alt="..." className="rounded-circle" />
                                    <a>&nbsp;&nbsp;<b>TimCook</b><span className="text-muted">@tim_cook</span></a> <span>&nbsp;&nbsp;</span>
                                    <p className="pull-right">May 13, 2017</p>
                                    <p style={{paddingLeft:"4rem"}}>Nothing Much</p>                                </div>
                                <hr/>
                                {/*<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                    </div>

            </div>
            </div>
            </div>
        );
    }
}

export default Messages;