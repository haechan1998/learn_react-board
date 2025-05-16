import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BoardWrite = () => {
    return (
        <div className='BoardWrite board'>
            <h2>Borad Writer Page</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Writer</Form.Label>
                    <Form.Control type="text" placeholder="Writer..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contents</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder='Contents...' />
                </Form.Group>
            </Form>

            <div className='btnGroup'>
                {/* 등록, 취소 */}
                <Button variant="success">등록</Button>
                <Button variant="warning">취소</Button>
            </div>

        </div>
    );
};

export default BoardWrite;