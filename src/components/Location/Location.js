import React, {useState, useEffect} from 'react';
import { db } from '../../utils/firebase' 
import { 
	ButtonGroup,	
	Button, 
	Tr,
	Td,
	Input,
} from "@chakra-ui/react";

const Location = ({location}) => {
	// Initializing didMount as false
	const [didMount, setDidMount] = useState(false)

	const [newLocation, setNewLocate] = useState({
		name: location.name,
		population: location.population,
		region: location.region
	});

	// Setting didMount to true upon mounting
	useEffect(() => setDidMount(true), [])

	useEffect(() => {
		if (didMount) handleChangeInputValueInDB()
	}, [newLocation]);

	const deleteLocation = async() => {
		try{
		await db.collection('locations').doc(location.id).delete();
		}catch(err){
		console.log(err)
		}
	}

	const onChangeHandler = ({ target: { value, name } }) => {
		setNewLocate({
			...newLocation,
			[name]: value
		})
	}

	async function handleChangeInputValueInDB(){
		try {
			await db.collection('locations').doc(location.id)
				.update({
					name: newLocation.name,
					population: newLocation.population,
					region: newLocation.region
				})
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Tr>
			<Td>
				<Input value={newLocation.name} name="name" onChange={onChangeHandler}/>
			</Td>
			<Td>
				<Input value={newLocation.population} name="population" onChange={onChangeHandler}/>
			</Td>
			<Td>
				<Input value={newLocation.region} name="region" onChange={onChangeHandler}/>
			</Td>
			<Td>
				<Button
					colorScheme="red"
					onClick={deleteLocation}
				>
					Delete
				</Button>
			</Td>
		</Tr>
	);
}

export default Location;
