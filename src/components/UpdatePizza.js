import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState } from 'react';

function UpdatePizza() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pizza-app/${id}`) // Corrected endpoint
      .then((response) => {
        setPizza(response.data);
        console.log("Fetched pizza data:", response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pizza data", error);
      })
  }, [id]);

  // Initialize Formik only when pizza data is available
  const formik = useFormik({
    enableReinitialize: true, // Allows Formik to reinitialize when pizza changes
    initialValues: {
      id: pizza?.id || '',
      name: pizza?.name || '',
      size: pizza?.size || '',
      price: pizza?.price || '',
      image: pizza?.image || '',
      toppings: pizza?.toppings || ''
    },
    validationSchema: yup.object({
      id: yup.string().required('ID is required'),
      name: yup.string().required('Name is required'),
      size: yup.string().required('Size is required'),
      price: yup
        .number()
        .typeError('Price must be a number') // Ensures price is a number
        .required('Price is required'),
      image: yup.string().required('Image is required'),
      toppings: yup.string().required('At least one topping is required'),
    }),
    onSubmit: (values) => {
      const toppingsArray = values.toppings.split(',').map(t => t.trim());
      const dataToSubmit = { ...values, toppings: toppingsArray, price: Number(values.price) };

      axios.put(`http://localhost:5000/pizza-app/${id}`, dataToSubmit) // Corrected endpoint
        .then((response) => {
          alert('Pizza updated successfully'); // Changed alert message
          formik.resetForm();
          navigate('/pizza-app');
        })
        .catch((error) => {
          console.error('Error updating pizza:', error.response || error.message || error);
          alert('Error updating pizza'); // Changed alert message
        });
    },
  });

  return (
    <div className="container mt-4">
      <h2>Update Pizza</h2> {/* Changed heading */}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="text-danger">{formik.errors.image}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input
            id="id"
            name="id"
            type="text"
            className="form-control"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.id && formik.errors.id ? (
            <div className="text-danger">{formik.errors.id}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="size" className="form-label">Size</label>
          <input
            id="size"
            name="size"
            type="text"
            className="form-control"
            value={formik.values.size}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.size && formik.errors.size ? (
            <div className="text-danger">{formik.errors.size}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            className="form-control"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-danger">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="toppings" className="form-label">Toppings (comma-separated)</label>
          <input
            id="toppings"
            name="toppings"
            type="text"
            className="form-control"
            value={formik.values.toppings}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.toppings && formik.errors.toppings ? (
            <div className="text-danger">{formik.errors.toppings}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">Update Pizza</button> {/* Corrected button text */}
      </form>
    </div>
  );
}

export default UpdatePizza;