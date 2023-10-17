import React, { useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e)=>{
    const {value} = e.target
    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
  }
  const handleUpload =async ()=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url ||!embedLink){
      toast.warning("please fil the form completely")
    }else{
      //make api call
      const response = uploadVideo(video)
      
      if(response.status>=200 && response.status<300){
        //set server response
        setUploadVideoServerResponse(response.data)
        handleClose()
        toast.success(`'${response.data.caption}' video uploaded successfuly!!!`)
      }else{
        
       toast.error("Cannot perform the operation now..Please try again later...")
      }
    }
  }
  return (
    <>
    <div className='d-flex align-item-center'>
      <h5>Upload New Video</h5>
      <button className='btn fs-4' onClick={handleShow} style={{marginTop:"-1.2%"}}><i className="fa-solid fa-circle-plus"></i></button>
      
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details...!!</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink}/>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add