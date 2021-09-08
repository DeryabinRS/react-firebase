import React from 'react';
import { db } from '../../utils/firebase' 
import { 
  Button, 
  Tr,
  Td
} from "@chakra-ui/react";

const Location = ({location}) => {
	const {id, name, city, region} = location
	const deleteLocation = async() => {
		try{
		await db.collection('locations').doc(id).delete();
		}catch(err){
		console.log(err)
		}
	}

	const handleChangeInput = (e) => {
		
	}

	return (
		<Tr>
			<Td>
			{name}
			</Td>
			<Td>
			{city}
			</Td>
			<Td>
			{region}
			</Td>
			<Td>
			<Button
				onClick={deleteLocation}
			>
				Delete
			</Button>
			</Td>
		</Tr>
	);
}

export default Location;
