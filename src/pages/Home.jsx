import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex  align-items-center justify-content-between ">
      <div className="add-videos">
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:"none",color:"white"}}>Watch History</Link>
    </div>

    <div className="container-fluid mt-5 mb-5  d-flex align-items-center justify-content-between">
      <div className="all-videos col-lg-8">
        <h2>All Videos</h2>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
      <div className='col-lg-1'></div>
       <div className="category col-lg-3" >
        <Category/>
       </div>
    </div>
    
    </>
  )
}

export default Home