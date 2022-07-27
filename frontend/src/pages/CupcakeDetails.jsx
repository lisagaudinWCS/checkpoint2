import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cupcake from "../components/Cupcake";

// Create a CupcakeDetails page. Add a route to display this page with the path /cupcakes/:id.
// You should wrap each cupcake in CupcakeList with a <Link /> towards the CupcakeDetails page.
// In the page, get the cupcake from the id and display it.

function CupcakeDetails() {
  const { id } = useParams();

  const [cupcakeDetails, setCupcakeDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cupcakes/${id}`)
      .then((response) => response.data)
      .then((cupcake) => setCupcakeDetails(cupcake));
  }, []);

  return (
    <ul className="cupcake-list" id="cupcake-list">
      {cupcakeDetails && (
        <div className="cupcake-item">
          <Cupcake cupcake={cupcakeDetails} />
        </div>
      )}
    </ul>
  );
}

export default CupcakeDetails;
