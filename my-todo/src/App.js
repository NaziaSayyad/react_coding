
import { Box, Flex,} from '@chakra-ui/react';
import './App.css';
import Todos from './Components/Todos';
import Userdetails from './Components/Userdetails';

function App() {
  return (
   <Box m={'5%'}>
      <Flex justifyContent='space-between'>
        <Box 
        // margin={'5%'}
        >
        <Todos />
      </Box>
     <Box>
      <Userdetails />
     </Box>
      </Flex>
   </Box>
  );
}

export default App;
