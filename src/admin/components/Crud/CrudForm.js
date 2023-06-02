import React from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  FormCheck,
  Container,
  Row,
  Col
} from "react-bootstrap";
import Dropzone from "react-dropzone";

const CrudForm = ({mode, data, formConfig, onSubmit}) => {
  const [formData, setFormData] = React.useState(data || {});

  const handleChange = (e) => {
    const {name, type, checked} = e.target;
    let value;

    if (type === "checkbox") {
      value = checked;
    } else if (type === "file") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }

    setFormData({...formData, [name]: value});
  };

  const handleDrop = (acceptedFiles) => {
    setFormData({...formData, media_gallery: acceptedFiles});
  };

  const handleRemoveImage = (index) => {
    const {formData} = this.state;
    const mediaGallery = [...formData.media_gallery];
    mediaGallery.splice(index, 1);
    this.setState({
      formData: {
        ...formData,
        media_gallery: mediaGallery,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                  {mode === "create"
                    ? `Create new ${formConfig.entityType}`
                    : `Update ${formConfig.entityType}`}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    {formConfig.fields.map((field) => (
                      <Col md={field.colSize} key={field.name}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Label>{field.label}</Form.Label>
                          {field.type === "dropzone" ? (
                            <Dropzone
                              onDrop={handleDrop}
                              accept={field.accept || "*"}
                            >
                              {({
                                  getRootProps,
                                  getInputProps,
                                }) => (
                                <section>
                                  <div
                                    {...getRootProps()}
                                    className="dropzone"
                                  >
                                    <input {...getInputProps()} />
                                    {formData.media_gallery &&
                                    formData.media_gallery.length > 0 ? (
                                      <div>
                                        {
                                          formData.media_gallery.map((file, index) => {

                                            let imageUrl;
                                            if (file instanceof File) {
                                              imageUrl = URL.createObjectURL(file);
                                            } else {

                                              imageUrl = file;
                                            }

                                            return (
                                              <div key={index} className="image-thumbnail">
                                                <img src={imageUrl} alt="preview"/>
                                                <button
                                                  type="button"
                                                  onClick={() => {
                                                    handleRemoveImage(index);
                                                  }}
                                                >
                                                  Remove
                                                </button>
                                              </div>
                                            );
                                          })
                                        }
                                      </div>
                                    ) : (
                                      <p>
                                        Drag 'n' drop images
                                        here, or click to
                                        select files
                                      </p>
                                    )}
                                  </div>
                                </section>
                              )}
                            </Dropzone>
                          ) : (
                            <>
                              {field.type === "checkbox" ? (
                                <div className="form-check">
                                  <label className="form-check-label">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name={field.name}
                                      checked={formData[field.name] || false}
                                      onChange={handleChange}
                                    />
                                    <span className="form-check-sign"></span>
                                    {field.label}
                                  </label>
                                </div>
                              ) : (
                                field.type === "select" ? (
                                  <Form.Control
                                    as="select"
                                    name={field.name}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    required={field.required}
                                  >
                                    <option value="">Choose...</option>
                                    {field.options.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </Form.Control>
                                ) : (
                                  <Form.Control
                                    type={field.type}
                                    name={field.name}
                                    value={
                                      field.type !== "file"
                                        ? formData[field.name] || ""
                                        : undefined
                                    }
                                    onChange={handleChange}
                                    required={field.required}
                                    accept={field.accept}
                                  />
                                )
                              )}
                            </>
                          )}
                        </Form.Group>
                      </Col>
                    ))}
                  </Row>
                  <div className="d-flex justify-content-end mt-3">
                    <Button variant="primary" type="submit">
                      {mode === "create" ? "Create" : "Update"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CrudForm;
