import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";


function LatestCardList() {

    const [Lcard, setLcard] = useState("")

    const url = "https://floran-book-api.herokuapp.com/latest/"


    useEffect(() => {
        axios.get(url).then(
            (resss) => {
                setLcard(resss.data)
            }
        ).catch(
            err => console.log(err)
        )
    }, [])


    if (Lcard) {
        return (
            <>

                <div className="row">

                    {
                        Lcard.map((value) => (
                            <Card cardid={value.id} book={value.name} author={value.author} content={value.description} img={value.cover} price={value.price} pages={value.pages} />
                        ))
                    }


                </div>
            </>

        );
    } else {
        return <center><div class="loader"></div></center>
    }






}

export default LatestCardList;