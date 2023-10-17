import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../components/VideoCard'
import { getAllVideos } from '../services/allAPI'
function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setdeleteVideoStatus] = useState(false)
  const getAllUploadedVideos = async ()=>{
    const {data} = await getAllVideos()
    setAllVideos(data)
  }
  useEffect(()=>{
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])
 
  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayData={video} setdeleteVideoStatus={setdeleteVideoStatus}/>
          </Col>
        ))
        :
        <p className='fw-bolder fs-5 text-danger'>Nothing To Display!!!</p>
      }
      
    </Row>
    </>
  )
}

export default View