import { useContext} from "react";
import { AuthContext } from "../../components/Authentication/AuthProvider";
import { useData } from '../../hooks/useData'
import Location from './Location';
import { 
  Container,
  Button, 
  Table,
  Thead,
  Tbody,
  Tr,
  Th
} from "@chakra-ui/react";

const Dashboard = () => {
  const {  logout } = useContext(AuthContext);
  const {docs: locations} = useData('locations')

   return (
    <Container maxW="container.lg">
      <Button
        colorScheme="pink"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
      <Table>
        <Thead>
          <Tr>
            <Th>City</Th>
            <Th>Name</Th>
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
