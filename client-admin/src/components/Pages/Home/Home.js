import { useState, useEffect } from "react";
import axios from "axios";

import Layout from '../../Layout/Layout';
import { Link } from "react-router-dom";


export default function Home() {
	const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized!");
      }
    };

    fetchPrivateDate();
  }, []);


  return error ? (
    <div className="error-screen">
			<span className="error-message">{error}</span>
			<span>To perform this action you have to <Link to="login">login</Link></span>
		</div>
		
  ) : (
    <div>
			<Layout />
			<div>
				<h1>Home component!</h1>
				<div className="col s12 blue-grey lighten-4">
					<div className="content">
						
					</div>
				</div>
			</div>
		</div>
  );
};


