import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { boardList } from '../data/data';
import Form from 'react-bootstrap/Form';

const BoardModify = () => {

    const { id } = useParams();

    const idx = boardList.findIndex(b => b.id === Number(id));
    const board = boardList[idx];
    console.log(idx);

    console.log(id);


    return (
        <div className='BoardModify board'>
            <h2>Borad View Page</h2>
            <div className="container">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title..." value={board.title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Writer</Form.Label>
                        <Form.Control type="text" placeholder="Writer..." value={board.writer} disabled style={{color : 'grey'}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contents</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder='Contents...' value={board.contents} />
                    </Form.Group>
                </Form>
            </div>
            <div className="btnGroup">
                <Button variant="light">수정완료</Button>
                <Link to={'/'}>
                    <Button variant="info">목록</Button>
                </Link>
            </div>
        </div>
    );
};

export default BoardModify;