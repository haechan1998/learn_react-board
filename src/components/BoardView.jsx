import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { boardList } from '../data/data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BoardView = () => {

    const { id } = useParams();

    // id 에 해당하는 배열의 번지의 객체를 뿌려주기
    // findIndex : 특정 조건을 만족하는 요소의 index 리턴

    const idx = boardList.findIndex(b => b.id === Number(id));
    const board = boardList[idx];
    console.log(idx);

    return (
        <div className='BoardView board'>
            <h2>Borad View Page</h2>

            <h3>{id} 게시글</h3>

            <div className="container">
                <Card style={{ width: '80%', margin: '50px auto' }}>
                    <Card.Body>
                        <Card.Title ><p className='cardTitle'>제목 : {board.title}</p></Card.Title>
                        <Card.Text>
                            {board.contents}
                        </Card.Text>
                        <Card.Text className='bottomText'>
                            create on {board.reg_date.slice(0, board.reg_date.indexOf('T'))} by <span className='writer'>{board.writer}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="btnGroup">
                <Link to={`/modify/${id}`}>
                    <Button variant="light">수정</Button>
                </Link>
                <Button variant="danger">삭제</Button>
            </div>
        </div>
    );
};

export default BoardView;