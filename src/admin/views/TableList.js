import React from "react";
import DataTable from "react-data-table-component";
import {Button, Card, Container, Row, Col} from "react-bootstrap";
import styles from "admin/assets/css/TableList.module.css";

function TableList({data, columns, onEdit, onDelete, title, subtitle, onCreate}) {
  const actions = (row) => (
    <>
      <Button
        className={`${styles["inverse-info"]} ${styles["icon-button"]} m-1`}
        onClick={() => onEdit(row.id)}
      >
        <i className={"nc-icon nc-ruler-pencil"}></i>
      </Button>
      <Button
        className={`${styles["inverse-danger"]} ${styles["icon-button"]} m-1`}
        onClick={() => onDelete(row.id)}
      >
        <i className={"nc-icon nc-simple-remove"}></i>
      </Button>
    </>
  );

  const tableColumns = columns.map((column) => ({
    name: column.header,
    selector: column.field,
    sortable: true,
  }));

  tableColumns.push({
    name: "Actions",
    cell: actions,
    sortable: false,
    width: "200px",
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title as="h4">{title}</Card.Title>
                    <p className="card-category">{subtitle}</p>
                  </div>
                  {onCreate && (
                    <Button
                      className={`${styles["inverse-info"]}`}
                      onClick={onCreate}
                    >
                      Create {title}
                    </Button>
                  )}
                </div>
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
