import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./MyCard";

import "./App.css";

import Axios from "axios";

function App() {
	const [details, setDetails] = useState({});

	const fetchdetails = async () => {
		const response = await Axios.get("https://randomuser.me/api/");
		const newData = response.data;
		console.log("Response : ", newData);

		const details = newData.results[0];

		setDetails(details);
	};

	useEffect(() => {
		fetchdetails();
	}, []);
	return (
		<Container fluid className="p-4 bg-primary App">
			<Row>
				<Col md={4} className="offset-md-4 mt-4">
					<MyCard details={details} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
