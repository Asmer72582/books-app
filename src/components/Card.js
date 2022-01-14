import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {


    return (
        <>


            <div className="col-lg-3 my-3">
                <Link to={"/detail/" + props.cardid} underline="none" color="inherit">
                    <div class="card text-center" id='jadu'>
                        <img src={props.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" id='title'>{props.book} </h5>
                            <p class="card-text" id='content'>{props.content}</p>
                            <p>By: {props.author}</p>
                            <Link to={"/detail/" + props.cardid} underline="none"><Button variant="contained" color="" disableElevation>Read More</Button></Link>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
}

export default Card;
