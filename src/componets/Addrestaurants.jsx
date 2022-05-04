import axios from "axios";
import React, { useState } from "react";




const Addrestaurants=()=>{

    const [data, setData]= useState({
        name:'',
        cuisine:[],
        costfortwo:"",
        minorder:"",
        deliverytime:"",
        payment_mtd:{
            card:"false",
            cash:"false",
            upi:"false"
        },
        rating:"",
        votes:"",
        reviews:"",
        src:""

    })


    const handleChange=(e)=>{
        const {id,value}=e.target;

        if(id==="cuisine"){
            const val = value.split(",")
            setData({...data, [id]:val})
        }
        else if(id==="card" || id==="cash" || id==="upi"){
            if(value==="on"){
                setData({...data, payment_mtd:{
                    [id]:true
                }})
            }
            else{
                setData({...data, payment_mtd:{
                    [id]:false
                }})
            }

        }

        else{
            setData({...data, [id]:value})
        }
    }

    console.log(data);


    const OnAdd=()=>{

        axios.post("http://localhost:7777/restaraunts",{
            name:data.name, 
            cuisine:data.cuisine,
            costfortwo:data.costfortwo,
            minorder:data.minorder,
            deliverytime:data.deliverytime,
            payment_mtd:data.payment_mtd,
            rating:data.rating,
            votes:data.votes,
            reviews:data.reviews,
            src:data.src
        }).then((res)=>{
      // console.log(res.data);
            alert("Your Restaraunt added sucessfully!")
        })
    }




    return (
        <div>
            <form action="">

                <h1>Add Your Restaraunt Data</h1>

                <label htmlFor="">Restraunt Name: </label>
                <input type='text' id='name' onChange={(e)=> handleChange(e)} />

                <label htmlFor="">Cuisines: </label>
                <input type='text' id='cuisine' placeholder="Type multiple cuisine seperated by ',' " onChange={(e)=> handleChange(e)}/>

                <label htmlFor="">Cost For Two: </label>
                <input type='number' id='costfortwo' onChange={(e)=> handleChange(e)} />

                <label htmlFor="">Min Order Value: </label>
                <input type='number' id='minorder' onChange={(e)=> handleChange(e)}/>

                <label htmlFor="">Delivery Time: </label>
                <input type='text' id='deliverytime' onChange={(e)=> handleChange(e)}/>

                <label htmlFor="">Payment Methods: </label>
                <div>
                    <label htmlFor="">Card</label>
                    <input type='checkbox' id='card' onChange={(e)=> handleChange(e)}/>

                    <label htmlFor="">Cash</label>
                    <input type='checkbox' id='cash' onChange={(e)=> handleChange(e)}/>

                    <label htmlFor="">UPI</label>
                    <input type='checkbox' id='upi' onChange={(e)=> handleChange(e)}/>
                </div>

                <label htmlFor="">Rating: </label>
                <input type='number' id='rating' onChange={(e)=> handleChange(e)}/>

                <label>Votes: </label>
                <input type='number' id='votes' onChange={(e)=> handleChange(e)}/>

                <label htmlFor="">Reviews: </label>
                <input type='text' id='reviews' onChange={(e)=> handleChange(e)}/>

                <label>Upload Image: </label>
                <input type='text' id='src' placeholder='Paste URL address of Image' onChange={(e)=> handleChange(e)}/>

                <button onClick={()=>{
                    OnAdd()
                }}>ADD</button>



            </form>
        </div>
    )
}



export default Addrestaurants;