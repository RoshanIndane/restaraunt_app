import axios from "axios";
import React, { useEffect, useState } from "react";



const Showrest=()=>{

const [show, setShow]=useState([]);
const [page, setPage]=useState(1);


useEffect(()=>{
    getdata(page)
},[page])


const getdata=()=>{
    axios.get(`http://localhost:7777/restaraunts?_page=${page}&_limit=5`).then((res)=>{
       // console.log(res.data)
       setShow(res.data)
    })
}

const handleasc=()=>{
    axios.get("http://localhost:7777/restaraunts").then((res)=>{
        setShow(res.data.sort((a,b)=>{return a.costfortwo-b.costfortwo}))
    })
}

const handledsc=()=>{
    axios.get("http://localhost:7777/restaraunts").then((res)=>{
        setShow(res.data.sort((a,b)=>{return b.costfortwo-a.costfortwo}))
    })
}

    return(
        
        





        <div>
            <h1>Restraunt List</h1>

            <div>
                <h3>Sort By Price</h3>
                <button onClick={handleasc}>ASC</button>
                <button onClick={handledsc}>DSC</button>
            </div>

            <div>
                <h3>Sort By Ratings</h3>
                <button onClick={()=>{axios.get("http://localhost:7777/restaraunts?rating=4").then((res)=>{setShow(res.data)})}}>4 & Above</button>
                <button onClick={()=>{axios.get("http://localhost:7777/restaraunts?rating=3").then((res)=>{setShow(res.data)})}}>3 & Above</button>
                <button onClick={()=>{axios.get("http://localhost:7777/restaraunts?rating=2").then((res)=>{setShow(res.data)})}}>2 & Above</button>
                <button onClick={()=>{axios.get("http://localhost:7777/restaraunts?rating=1").then((res)=>{setShow(res.data)})}}>1 & Above</button>
            </div>

            <div>
                <h3>Pagination</h3>
                <button disabled={page==1} onClick={()=>{setPage((page)=page-1)}}>PREV</button>
                <button onClick={()=>{setPage((page)=>page+1)}}>NEXT</button>
            </div>





            {
                show.map((e)=>
                <div className="maindiv"  key={e.id}>
                    <div>
                         <div className="firstbox">
                             <img src={e.src} />
                         </div>

                         <div className="secondbox">
                             <h2>{e.name}</h2>
                             <p>Cuisine: {e.cuisine}</p>
                             <p> Cost for Two: {e.costfortwo} </p>
                             <p>Min Order Value: {e.minorder}</p>
                             <p>Payment Methods: {e.payment_mtd.card?' card':''}
                                                 {e.payment_mtd.cash? 'cash':''}
                                                 {e.payment_mtd.upi? 'upi':''}
                             
                             </p>
                             <p>Ratings: {e.rating}</p>
                             <p>Votes: {e.votes}</p>
                             <p>Reviews: {e.reviews}</p>
                         </div>
                    </div>

                </div>

                )
}

        </div>
    )
}


export default Showrest