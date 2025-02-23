import { Container, Row, Col } from 'react-bootstrap'

function PageNotFound() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <h1 className='text-center display-1'>404</h1>
                        <h2 className='text-center'>Page Not Found</h2>
                        <p className='text-center'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageNotFound
