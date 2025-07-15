
import React, { useEffect, useState } from 'react'
import PostNavbar from './PostNavbar'
import axios from 'axios'


const ViewAllPost = () => {
  const[postData,changePost]=useState(
    [
       {
    "userId": 1,"id": 1,"title": "","body": " "}
    ]

  )

  const fetchDatafromAPI=()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response)=>{
        changePost(response.data)
      }
    ).catch()
  }
useEffect(()=>{fetchDatafromAPI()},[])
  return (
    <div>
      <PostNavbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">UserID</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    {postData.map(
      (value,index)=>{
        return(
          <tr>
      <td >{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>
        )
      }
    )}
    
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllPost