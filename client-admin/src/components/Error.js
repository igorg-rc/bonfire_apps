import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Pages/Table/style.css'
import Layout from './Layout/Layout'

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: false
  },
  {
    name: "Directior",
    selector: "director",
    sortable: false
  },
  {
    name: "Runtime (m)",
    selector: "runtime",
    sortable: false,
    right: true
  }
];

export default function Error() {
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


	return (
   
		<div>
      <Layout />
			<h1>Ooops! Requsted page does not exist.</h1>
		</div>
	  )
}
