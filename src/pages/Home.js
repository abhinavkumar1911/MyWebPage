import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
function Home() {
    const [clickedBtn, setClickedBtn] = useState(null);

    const handleBack = () => {
        setClickedBtn('back');
        //alert("Back button clicked!");
        setTimeout(() => setClickedBtn(null), 1000);
    };

    const handleNext = () => {
        setClickedBtn('next');
       // alert("Next button clicked!");
        setTimeout(() => setClickedBtn(null), 1000);
    };

    const randomNum = Math.floor(Math.random() * 100);
    const gender = Math.random() > 0.5 ? 'men' : 'women';
    const imgUrl = `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`;

    return (
        <Container className="mt-5 pt-5">
            {/* Header Row */}
            <Row className="mt-4">
                <Col>
                    <h1 className="text-center">Welcome to Student Home Page</h1>
                </Col>
            </Row>

            {/* Content Row */}
            <Row className="mt-5 align-items-center">
                <Col xs={12} sm={6}>
                    <div className="text-start">
                        <p><strong>Student Name:</strong> John Doe</p>
                        <p><strong>Email ID:</strong> john.doe@example.com</p>
                        <p><strong>Phone No:</strong> 9876543210</p>
                        <p><strong>Roll No:</strong> 12345</p>
                        <p><strong>Discription</strong>hiii</p>
                    </div>
                </Col>

                <Col xs={12} sm={6} className="text-center">
                    <img
                        src={imgUrl}
                        alt="Random Student"
                        className="img-fluid"
                        style={{ borderRadius: "15px" }}
                    />
                </Col>
            </Row>

            {/* Buttons Row */}
            <Row className="mt-4">
                <Col xs={12} className="d-flex justify-content-start">
                    <div className="d-flex gap-2">
                        <Button
                            variant="secondary"
                            onClick={handleBack}
                            className={clickedBtn === 'back' ? 'clicked-button' : ''}
                        >
                            Back
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleNext}
                            className={clickedBtn === 'next' ? 'clicked-button' : ''}
                        >
                            Next
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
