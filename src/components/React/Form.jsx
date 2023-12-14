import React, { useState } from 'react';
import "./Form.css"

const RegistrationForm = () => {
  {/* Use State*/}
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // function for form logic
    console.log('Datos del formulario:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>¡Regístrate ahora!</h2>
      <label htmlFor="name">Nombre completo:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Teléfono:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit" className="button__primary" >
        Registrarse
      </button>
    </form>
  );
};

export default RegistrationForm;