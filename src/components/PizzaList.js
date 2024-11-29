import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PizzaList() {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizzas();
  }, []); // Dependency array added to prevent continuous re-rendering.

  const fetchPizzas = () => {
    axios
      .get("http://localhost:5000/pizza-app")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pizza data", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/pizza-app/${id}`)
      .then(() => {
        fetchPizzas(); // Refresh the list after deletion
      })
      .catch((error) => {
        console.error("There was an error deleting the pizza", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Pizza List</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={pizza.image} className="card-img-top" alt={pizza.name} />
              <div className="card-body d-flex flex-column height=100">
                <h5 className="card-title">{pizza.type}</h5>
                <p className="card-text">{pizza.toppings}</p>
                <p className="card-text">Price: ${pizza.price}</p>
                <p className="card-text">size: ${pizza.size}</p>
                <button className="btn btn-warning me-2" onClick={() => navigate(`/Updatepizza/${pizza.id}`)}>Update</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(pizza.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
