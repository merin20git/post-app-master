
import React, { useState } from 'react'
import PostNavbar from './PostNavbar'

const SearchPost = () => {
 const [input, changeInput] = useState(
        { title: "" }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(input)
    }


  return (
    <div>
        <PostNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">title</label>

                            <input type="text" className="form-control" name='title' value={input.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<button className="btn btn-success" onClick={readValues}>Search</button>                       

                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPost