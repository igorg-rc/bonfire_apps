import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import moment from 'moment'

import SortIcon from "@material-ui/icons/ArrowDownward"
import Layout from '../Layout/Layout'

import './Messages.css'

const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    right: true
  }
];

const customStyles = {
  title: {
    style: {
			background: '#f5f5f5',
      fontWeight: '400',
    }
  },
  rows: {
    style: {
      minHeight: '32px', 
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
	const [perPage, setPerPage] = useState(15)
	const [error, setError] = useState("")
  const [privateData, setPrivateData] = useState("")
	const [ messages, setMessages ] = useState([])
	const [ message, setMessage ] = useState({ 
		name: '', 
		email: '', 
		messageBody: '', 
		date: '', 
		dateTime: '', 
		id: '' 
	})

	const messagesList = messages.map(message => ({	
		name: message.senderName,
		email: message.senderEmail, 
		messageBody: message.messageBody, 
		date: moment.utc(message.createdAt).local().format('DD MMM YYYY'), 
		dateTime: moment.utc(message.createdAt).local().format('MMM DD, YYYY, LT'),
		id: message._id
	}))

	
	const showCurrentMessage = (e) => {
		console.log(e.name, e.email, e.dateTime, moment.utc(e.date).format('MMM DD, YYYY'), e.id)
		setMessage({
			name: e.name, 
			email: e.email, 
			messageBody: e.messageBody, 
			date: e.date, 
			dateTime: e.dateTime, 
			id: e.id 
		})

		console.log(moment.utc(message.date).format('MMM DD, YYYY'))
	}

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const result = await axios.get('/api/messages')
				const messages = result.data
				setMessages(messages);
				console.log('Messages list: ', {...messages})
			} catch (error) {
				console.log(error);
			}
		}

    fetchMessages();
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

						<div style={{ display: 'flex', flexDirection: 'column-reverse', marginTop: '-1.5vh', border: '' }}>
							<DataTable
								className="paginate-table"
								paginationPerPage={perPage}
								columns={columns}
								defaultSortField="title"
								sortIcon={<SortIcon />}
								pagination
								selectableRows
								onRowClicked={showCurrentMessage}
								customStyles={customStyles}
								data={messagesList}
							/>
							<div id="pagination">
							</div>
						</div>	
					</div>
	

				</div>
				<div className="col s12 m8 l8">
						<div className="" style={{ height: '100vh', paddingTop: '1.3vh',  textAlign: 'justify' }}>
							<div className="row">
								<div className="col s12">
									<h6 className="left-align message-info">
										<span style={{ fontWeight: '700' }}>{ message.name }</span>
										<span style={{ color: '#757575', fontSize: '1rem' }}>{ message.email === '' ? '' : ` <${message.email}>` }</span><br />
										<span style={{ color: '#757575', fontSize: '1rem' }}>{message.date === '' ? '' : message.dateTime}</span>
									</h6>
								</div>
							</div>
							
								<div style={{ width: '20wv', textAlign: 'justify' }} id="message">{ message.messageBody}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
