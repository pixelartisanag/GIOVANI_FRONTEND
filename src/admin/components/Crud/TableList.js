import React from "react";
import DataTable from "react-data-table-component";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function TableList({ data, columns, onEdit, onDelete }) {
  const actions = (row) => (
      <>
        <Button variant="info" onClick={() => onEdit(row.id)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(row.id)}>
          Delete
        </Button>
      </>
  );

  const tableColumns = columns.map((column) => ({
    name: column.header,
    selector: column.field,
    sortable: true,
    width: "4rem"
  }));

  tableColumns.push({
    name: "Actions",
    cell: actions,
    sortable: false,
    width: "80px",
  });

  return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Users</Card.Title>
                  <p className="card-category">
                    Users List
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <DataTable
                      columns={tableColumns}
                      data={data}
                      pagination
                      highlightOnHover
                      fixedHeader={true}
                      striped
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default TableList;
