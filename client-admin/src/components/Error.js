import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Pages/Table/style.css";
// import { data, columns } from './Pages/Table/MessagesData' 
import data from './Pages/Table/MoviesData'
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

	return (
		<div>
      <Layout />
			<h1>Ooops! Requsted page does not exist.</h1>

		</div>
	)
}
