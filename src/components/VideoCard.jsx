import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideo } from '../services/allAPI';
function VideoCard({displayData,setdeleteVideoStatus,insideCategory}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption,embedLink} = displayData
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoDetails = {
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
  }
  const handleDelete = async (id)=>{
    deleteAVideo(id)
    setdeleteVideoStatus(true)
  }

  const dragStarted = (e,id)=>{
    console.log("Drag started:"+id);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
    <Card className='mt-4' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
    <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          {
            insideCategory?"":<button onClick={()=>handleDelete(displayData?.id)} className='btn text-danger'><i className="fa-solid fa-trash text-danger"></i></button>

          }
        </Card.Title>
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height="365" src={`${displayData?.embedLink}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard

