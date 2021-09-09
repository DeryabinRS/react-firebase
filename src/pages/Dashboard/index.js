import { useContext} from "react";
import { AuthContext } from "../../components/Authentication/AuthProvider";
import { useData } from '../../hooks/useData'
import { db } from '../../utils/firebase' 
import Location from '../../components/Location/Location';
import { 
  Container,
  Button, 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  IconButton
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const {  logout } = useContext(AuthContext);
  const {docs: locations} = useData('locations')

  async function onClickHandlerAddRowToDB(){
    try{
      //db.collection('locations').doc()
      const unsub = db.collection('locations').add({
        name: "",
        population: "",
        region: ""
    })
      console.log(unsub)
    }catch(error){
      console.log(error)
    }
  }

   return (
    <Container maxW="container.lg">
      <Button
        my={5}
        colorScheme="red"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
      <Box>
        <IconButton 
          colorScheme="green" 
          aria-label="Add" 
          icon={<AddIcon />} 
          float="right"
          onClick={onClickHandlerAddRowToDB}
        />
      </Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Population</Th>
            <Th>Region</Th>
            <Th>Setting</Th>
          </Tr>
        </Thead>
          <Tbody> 
              {
                locations.map(location => {
                  return(
                    <Location key={location.id} location={location}/>
                  )
                })
              }
          </Tbody>
      </Table>
    </Container>
  );
};

export default Dashboard
