import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cupcake from "@components/Cupcake";
import axios from "axios";

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
      .then((cupcake) => setCupcakeDetails(cupcake))
  }, []);

  return (
    <>
        {cupcakeDetails &&
                <div className="cupcake-item">
                  <Cupcake 
                    cupcake={cupcakeDetails}/>
                </div>
        }
        </>
    );
}

export default CupcakeDetails;