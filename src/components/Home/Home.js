import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Home = () => {

    const [events, setEvents] = useState([])


    useEffect(() => {
        fetch('https://gentle-falls-07700.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <h2>this is home</h2>
            <Container>
                <Row className="g-3">
                    {
                        events.map(event => <Event event={event} key={event._id}></Event>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;