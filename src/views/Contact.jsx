import { useState } from "react";
import { Button, Form } from "react-bootstrap";


const Contact = () => {
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [alert, setAlert] = useState({ mostrado: false, error: false, mensaje: "", color: "" });
  
  const tomarDato = (e) => {
    setCorreo(e.target.value);
  };
  const tomarNombre = (e) => {
    setNombre(e.target.value);
  };
  const tomarDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  
  const validarDatos = (e) => {
    e.preventDefault();
  
    if (nombre === "" || correo === "" || descripcion === "") {
      setAlert({
        mostrado: true,
        error: true,
        mensaje: "Completa todos los campos 😞!",
        color: "danger",
      });
      return;
    }

    setAlert({mostrado: true,error: false, mensaje: "Contacto realizado 😊 🧁 !", color: "success" });
    setNombre("");
    setCorreo("");
    setDescripcion("");
  };


  return (
    <div className="col-12 col-sm-10 col-md-6 mx-auto mt-5">
      <h1> Cuentanos, ¿en que te podemos ayudar? </h1>
      {alert.mostrado && (
        <div className={`alert alert-${alert.color}`} role="alert">
          {alert.mensaje}
        </div>
      )}
      
      <Form onSubmit={validarDatos}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre Completo:</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={tomarNombre}
            value={nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            value={correo}
            onChange={tomarDato}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            value={descripcion}
            onChange={tomarDescripcion}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button type="submit" variant="success"> Enviar </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Contact;