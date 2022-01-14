import axios from "axios";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export class BlogDetail extends Component {
    state = {
        'BookDetails': ''
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const url = `https://floran-book-api.herokuapp.com/${id}`

        const fetchBookDetail = () => {
            axios.get(url).then(
                (res) => {
                    this.setState({
                        BookDetail: res.data
                    })
                }
            ).catch(
                err => console.log(err)
            )
        }
        fetchBookDetail()
    }

    render() {

        let bookdetail = this.state.BookDetail
        if (!bookdetail) {
            return <center><div class="loader"></div></center>
        }
        else {
            return (
                <div className='text-center row py-3 px-5 mb-5 border m-auto mt-5' id="detailscard">
                    <div className="col-12"><h1 className=''>{bookdetail.name}</h1></div>

                    <div className="col-12"> <img src={bookdetail.cover} alt="" /></div>

                    <div className="col-12 my-3"><h3 className='card-text '>By: {bookdetail.author}</h3></div>

                    <div className="col-12"><p> {bookdetail.description} </p></div>

                    <div className="col-6 pb-4">Price: {bookdetail.price} /-</div>
                    <div className="col-6 pb-4">Pages: {bookdetail.pages} </div>
                    <Link to="/"><Button variant="contained" className='w-25 m-auto' color="" disableElevation>Back</Button></Link>
                </div>
            );
        }
    }
}

export default BlogDetail;