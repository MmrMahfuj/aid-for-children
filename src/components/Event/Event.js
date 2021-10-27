import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css';

const Event = ({ event }) => {
    const { title, img, _id } = event.data
    return (
        <>
            <Col md={3}>
                <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to="/donation"
                >
                    <div className="">
                        <div className="custom-img">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                        <h5 className="p-4 bg-primary">{title}</h5>
                    </div>
                </Link>
            </Col>
        </>
    );
};

export default Event;