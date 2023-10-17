import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigatebyUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
     <Col></Col>
     <Col lg={5}>
       <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
       <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam quae consequuntur deleniti voluptatibus debitis ratione. Quasi, totam ex corporis, tenetur saepe in cum harum culpa voluptatem voluptatum explicabo modi.</p>
       <button onClick={()=>navigatebyUrl('/home')} className='btn btn-info mt-5'>Get Started</button>
     </Col>
     <Col></Col>
     <Col lg={5}>
       <img className='img-fluid ms-2' width={'400px'} src="https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6.gif" alt="landing" />
     </Col>
    </Row>
    <div className="container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
      <h3>Features</h3>
      <div className="cards  mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://img1.picmix.com/output/stamp/normal/1/8/4/4/2374481_b18b1.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.gifer.com/XiPx.gif" />
      <Card.Body>
        <Card.Title>Categories</Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/31/12/81/31128181420688cf4eda6579ef7dfcc9.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    </div>
    
    <div className="container border rounded border-secondary p-5 mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
      <div className="content col-lg-5">
        <h3 className='mb-5 text-warning'>Simble,Fast And Powerful</h3>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span><span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi soluta voluptate quasi dolore recusandae dolores blanditiis ipsam minus reiciendis corporis eos officia, </span></h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categories Videos</span><span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi soluta voluptate quasi dolore recusandae dolores blanditiis ipsam minus reiciendis corporis eos officia, </span></h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span><span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi soluta voluptate quasi dolore recusandae dolores blanditiis ipsam minus reiciendis corporis eos officia, </span></h6>

      </div>
      <div className="video col-lg-6">
      <iframe width="100%" height="387" src="https://www.youtube.com/embed/szvt1vD0Uug" title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default LandingPage