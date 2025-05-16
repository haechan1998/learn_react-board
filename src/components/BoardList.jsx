import React from "react";
import Table from "react-bootstrap/Table";
import { boardList } from "../data/data";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const BoardList = () => {
  return (
    <div className="BoardList board">
      <h2>Board List Page</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Reg_date</th>
          </tr>
        </thead>
        <tbody>
          {
            boardList.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>
                  <Link style={{textDecoration: 'none', color:'black'}} to={`/view/${b.id}`}>{b.title}</Link>
                </td>
                <td>{b.writer}</td>
                <td>{b.reg_date.slice(0,b.reg_date.indexOf('T'))}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Link to={'/write'}>
        <Button variant="secondary">글쓰기</Button>
      </Link>


    </div>
  );
};

export default BoardList;
