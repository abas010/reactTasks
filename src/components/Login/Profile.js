import React from "react";
import { userInformation } from "../utils";
import { Table } from "react-bootstrap";

export default function Profile() {
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>number</th>
            <th>Userpass</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userInformation[0].name}</td>
            <td>{userInformation[0].email}</td>
            <td>{userInformation[0].number}</td>
            <td>{userInformation[0].pass}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
{

}
