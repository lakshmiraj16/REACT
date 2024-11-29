import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPizza() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      size: '',
      price: '',
      image: '',
      toppings: '',
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
      // Convert toppings to an array by splitting at commas
      const toppingsArray = values.toppings.split(',').map(t => t.trim());
      const dataToSubmit = { ...values, toppings: toppingsArray, price: Number(values.price) };

      axios.post('http://localhost:5000/pizza-app', dataToSubmit)
        .then((response) => {
          alert('Pizza added successfully');
          formik.resetForm();
          navigate('/pizza-app');
        })
        .catch((error) => {
          console.error('Error adding pizza:', error.response || error.message || error);
          alert('Error adding pizza');
        });
    },
  });

  return (
    <div className="container mt-4">
      <h2>Add Pizza</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            id="id"
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

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default AddPizza;
