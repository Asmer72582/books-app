import { Button, Input } from '@material-ui/core';
import { useState } from "react";
import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';


const Createcard = () => {


    const history = useHistory();
    const [Title, setTitle] = useState("")
    const [Author, setAuthor] = useState("")
    const [Content, setContent] = useState("")
    const [Image, setImage] = useState(null)
    const [Pages, setPages] = useState("")
    const [Price, setPrice] = useState("")

    const url = "https://floran-book-api.herokuapp.com/"
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    let publishBook = async () => {

        let formData = new FormData()
        if (Title !== "" && Content !== "" && Image !== null && Author !== "" && Pages !== "" && Price !== "") {

            formData.append("name", Title)
            formData.append("author", Author)
            formData.append("description", Content)
            formData.append("price", Price)
            formData.append("pages", Pages)
            formData.append("cover", Image)

            axios.post(url, formData, config).then(
                (res) => {
                    console.log("Hogaya hai")
                    console.log(res)
                }
            ).catch(
                err => console.log(err)
            )


            setTitle("")
            setContent("")
            setAuthor("")
            setPages("")
            setPrice("")
            setImage("")
            swal("Good job!", "You Have successfully Added A book", "success");
            history.push("/")

        } else {
            swal("Oops", "Fill All Details!", "error")
        }


    }
    return (
        <>

            <div className='form-card m-auto mt-3'>
                <form noValidate autoComplete="off">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Book Title</label>
                        {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <Input id="standard-basic" className="col-12" label="Standard" onChange={(e) => setTitle(e.target.value)} value={Title} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInput" className="form-label">Author</label>
                        {/* <input type="" className="form-control" id="exampleInputPassword1" /> */}
                        <Input id="standard-basic" className="col-12" label="Standard" onChange={(e) => setAuthor(e.target.value)} value={Author} />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInput" className="form-label">Description</label>
                        <textarea name="" className="form-control" rows="5" id="" onChange={(e) => setContent(e.target.value)} value={Content}></textarea>
                    </div>

                    <div className="mb-3 row">
                        <div className='col-4'>
                            <label for="exampleInput" className="form-label">Book Cover</label>
                            <input type="file" className="form-control" accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className='col-4'>
                            <label for="exampleInput" className="form-label">Price</label>
                            <Input id="standard-basic" className="col-12" label="Standard" onChange={(e) => setPrice(e.target.value)} value={Price} />
                        </div>
                        <div className='col-4'>
                            <label for="exampleInput" className="form-label">Pages</label>
                            <Input id="standard-basic" className="col-12" label="Standard" onChange={(e) => setPages(e.target.value)} value={Pages} />
                        </div>
                    </div>
                    <center><Button variant="contained" className='w-50 mt-4' color="" onClick={publishBook} disableElevation>Publish</Button></center>
                </form>
            </div>
        </>
    );
}

export default Createcard;
