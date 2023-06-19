import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./Apps.css";

function Apps() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App" align="center">
			<h1 align="center">Submit your task:</h1><br></br>
			<input type="file" onChange={handleChange}/>
			<img src={file} /><br></br>
			<Button variant="contained" href="/Start">Submit</Button>

		</div>

	);
}

export default Apps;
