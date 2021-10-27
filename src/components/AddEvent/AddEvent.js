import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddEvent.css';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
    const [date, setDate] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://gentle-falls-07700.herokuapp.com/events', { data, date })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset()
                    setDate(null);

                }
            })
    };



    return (
        <Container>
            <div className=" mx-auto bg-white mt-5 rounded">
                <h2>this is add events</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-3">
                        <Row>
                            <Col>
                                <label className="d-flex justify-content-start">Event Title</label>
                                <input className="w-100" {...register("title", require)} /><br />
                                <label className="mt-3 d-flex justify-content-start">Description</label>
                                <textarea className="w-100" {...register("des",)} />

                            </Col>
                            <Col>
                                <label className="d-flex justify-content-start">Event Date</label>
                                <DatePicker
                                    required
                                    className="w-100"
                                    onChange={setDate}
                                    value={date}
                                /><br />
                                <label className="mt-3 d-flex justify-content-start">image URL</label>
                                <input className="w-100" {...register("img", require)} /><br />

                            </Col>
                        </Row>
                    </div>
                    <input type="submit" value="Add Event" />
                </form>
            </div>
        </Container>
    );
};

export default AddEvent;