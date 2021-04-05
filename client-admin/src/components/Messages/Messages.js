import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import  {columns, data} from '../Pages/Table/MessagesData'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SortIcon from "@material-ui/icons/ArrowDownward"
import Layout from '../Layout/Layout'

import './Messages.css'

const customStyles = {
  title: {
    style: {
			background: '#f5f5f5',
      fontWeight: '400',
    }
  },
  rows: {
    style: {
      minHeight: '32px', // override the row height
			background: '#f5f5f5'
    }
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: '500',
      paddingLeft: '0 8px',
			background: '#f5f5f5 !important',
			paddingTop: '10px'
    },
  },
  cells: {
    style: {
      fontSize: '16px',
      paddingLeft: '0 8px',
    },
  },
	
	input: {
		style: {
			display: 'none'
		}
	}

};


export default function Messages() {
	const [perPage, setPerPage] = useState(15);
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
		<>
		<Layout />
		<div id="messages" style={{ paddingTop: '75px', paddingLeft: '' }}>
			<div className="" style={{ height: '100vh' }}>
			<div className="row">
				<div className="col s12 indigo darken-1">
					<div><span className="category-title left white-text">Income messages</span></div>
				</div>
				<div className="col s12 m4 l4" style={{ paddingTop: '1.5vh'}}>

				<div className="left" style={{ width: '100%' }}>
					{/* <TablePagination
						columns="name.time.date"
						perPageItemCount={ 20 }
						totalCount={ data.length  }
						arrayOption={ [["size", 'all', ', ']] }
						className="left"
						data={ data }
						headers={ Header }
					/> */}

				<div style={{ display: 'flex', flexDirection: 'column-reverse', marginTop: '-1.5vh', border: '' }}>
					<DataTable
						className="paginate-table"
						paginationPerPage={perPage}
						// style={{ border: '1px solid green'}}
						columns={columns}
						data={data}
						defaultSortField="title"
						sortIcon={<SortIcon />}
						pagination
						selectableRows
						customStyles={customStyles}
					/>
				</div>	
		</div>
	
{/* 				
				<Pagination
					target="#messages"
					activePage={3}
					items={5}
					leftBtn={<Icon>chevron_left</Icon>}
					rightBtn={<Icon>chevron_right</Icon>}
				/> */}

				{/* <ul class="pagination">
					<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
					<li class="active"><a href="#!">1</a></li>
					<li class="waves-effect"><a href="#!">2</a></li>
					<li class="waves-effect"><a href="#!">3</a></li>
					<li class="waves-effect"><a href="#!">4</a></li>
					<li class="waves-effect"><a href="#!">5</a></li>
					<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
				</ul> */}

				</div>
				<div className="col s12 m8 l8">
						<div className="" style={{ height: '100vh', paddingTop: '1.3vh',  textAlign: 'justify' }}>
							<div className="row">
								<div className="col s12">
									<h6 className="left-align message-info">
										<span style={{ fontWeight: '700' }}> Alexandra Copos de Prada</span>
										<span style={{ color: '#757575', fontSize: '1rem' }}> &lt;alexandra.copos@gmail.com&gt;</span><br />
										<span style={{ color: '#757575', fontSize: '1rem' }}>Feb 8, 2021, 03:03 AM</span>
									</h6>
								</div>
							</div>
							
							<span id="message">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
							making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum 
							comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a 
							treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
							section 1.10.32. Where can I get some?
							</span>
						</div>
				</div>
			</div>
		</div>
		</div>

		</>

	)
}
