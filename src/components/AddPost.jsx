import React, { useState } from 'react'
import PostNavbar from './PostNavbar'

const AddPost = () => {

const[input,changeInput]=useState(
        { id:"",quote:"",author:""}
    )

    const inputHandler=(event)=>{
        changeInput( {...input,[event.target.name]:event.target.value} )
    }

    const readValues=()=>{
        console.log(input)
    }

  return (
    <div>
        <PostNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">UserID</label>
                            <input type="text" className="form-control" name='UserID' value={input.UserID} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" name='title' value={input.title} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">body</label>
                            <input type="text" className="form-control" name='body' value={input.body} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost