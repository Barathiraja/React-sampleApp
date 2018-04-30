import React, { Component } from "react";



class Friends extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.friendsList }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:5000/api/friends');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        console.log(body)

        return body;
    };

    


    render() {
        console.log(this.state.response)


        return (
            <div  className="container-fluid">
                {/*<form>*/}
                    {/*<div className="form-group">*/}
                        {/*<label htmlFor="exampleInputEmail1">Email address</label>*/}
                        {/*<input type="email" className="form-control" id="exampleInputEmail1"*/}
                               {/*aria-describedby="emailHelp" placeholder="Enter email" />*/}
                            {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with*/}
                                {/*anyone else.*/}
                            {/*</small>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                        {/*<label htmlFor="exampleInputPassword1">Password</label>*/}
                        {/*<input type="password" className="form-control" id="exampleInputPassword1"*/}
                               {/*placeholder="Password" />*/}
                    {/*</div>*/}
                    {/*<div className="form-check">*/}
                        {/*<input type="checkbox" className="form-check-input" id="exampleCheck1" />*/}
                            {/*<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
                    {/*</div>*/}
                    {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                {/*</form>*/}



                <div className="offset-md-2 col-md-7" style={{padding:"5rem"}}>

                <table className="table">
                <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>

                {/*{listItems}*/}
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default Friends;