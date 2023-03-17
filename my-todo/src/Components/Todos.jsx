
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from "@chakra-ui/icons"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Acess_Todos} from '../redux/todos/todos.action';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import Userdetails from './Userdetails';
import Loading from './Loading';
import NoResults from './NoResults';

function Todos() {
  const { data, error, loading } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const [todoId, settodoId] = useState(" ");
  const [query, setquery] = useState(" ");
  const [Userid,setUserId] = useState("");
  const [todotitle, settodotittle] = useState();
  const [toogle, setoogle] = useState(false);

  const gettodos = () =>{
    dispatch(Acess_Todos(query));
  }
  
  const handleuser = (id, title,userid) => {
    setoogle(true);
    settodoId(id);
    settodotittle(title)
    setUserId(userid);
  }
  useEffect(() => {
    gettodos();
   }, [query]);
  return (

    <>
      <Flex justifyContent={'space-between'}>
        <Box>
          <Flex
            justifyContent='space-around'

          >
            <Heading> Todos </Heading>
            <InputGroup ml={'18%'}>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon />}
              // color='gray.300' />}
              />
              <Input placeholder='search' size='md' border='2px solid' 
              onChange={(event) => setquery(event.target.value)} 
              
              />
            </InputGroup>
          </Flex>
          <Box border='2px solid' >
            {
              error || loading ? <Loading />  :
              <TableContainer>
              <Table variant='simple' width='25px'>
                <Thead>
                  <Tr>
                    <Th> Todo Id </Th>
                    <Th> Title </Th>
                    <Th> Status </Th>
                    <Th> Actions </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                  data.data && data.data.length === 0 ? <NoResults /> :
                     data.data && data.data.map((el) => (
                      <Tr key={el.id} >
                        <Td> {el.id}</Td>
                        <Td> {el.title}</Td>
                        <Td> {el.completed ? "Completed" : "Incompleted"}</Td>
                        <Td cursor='pointer' onClick={() => handleuser(el.id, el.title,el.userId)}> View User </Td>
                      </Tr>
                    ))
                  }

                </Tbody>

              </Table>
            </TableContainer>
            }
          </Box>
        </Box>
        <Box>
          {toogle ?
            <Userdetails
              id={todoId}
              userId = {Userid}
              title={todotitle}
            /> : toogle}
        </Box>
      </Flex>
    </>

  )
}

export default Todos
