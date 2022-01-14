import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import LatestCardList from '../components/LatestCardList';



function CardList() {

    const [Cards, setCards] = useState("")
    const [Lcard, setLcard] = useState("")

    const url = "https://floran-book-api.herokuapp.com/"
    const url2 = "https://floran-book-api.herokuapp.com/latest/"


    useEffect(() => {
        axios.get(url2).then(
            (resss) => {
                setLcard(resss.data)
            }
        ).catch(
            err => console.log(err)
        )
    }, [])



    useEffect(() => {
        axios.get(url).then(
            (resss) => {
                setCards(resss.data.reverse())
            }
        ).catch(
            err => console.log(err)
        )
    }, [])




    console.log(Cards)
    if (Cards) {
        return (
            <>

                <div className="row">
                    <h1 className="center-text" id="heading-text">latest Books</h1>
                    {/* <LatestCardList /> */}

                    {
                        Lcard.map((value) => (
                            <Card cardid={value.id} book={value.name} author={value.author} content={value.description} img={value.cover} price={value.price} pages={value.pages} />
                        ))
                    }
                    {/* <Latestcard /> */}

                    <h1 className="center-text" id="heading-text">Other Books</h1>
                    {
                        Cards.map((value) => (
                            <Card cardid={value.id} book={value.name} author={value.author} content={value.description} img={value.cover} price={value.price} pages={value.pages} />
                        ))
                    }


                    {/* {
                        LatestC.map((value) => {
                            <Latestcard img={value.cover} book={value.name} author={value.author} />
                        })

                    } */}


                </div>
            </>

        );
    } else {
        return <p>.</p>
    }




}

export default CardList;