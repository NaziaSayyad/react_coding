
import {  Box, Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import {Search2Icon} from "@chakra-ui/icons"
import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux";
import { Acess_Todos } from '../redux/todos/todos.action';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
function Todos() {
  const [data, setdata] = useState();

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(Acess_Todos).then((res) =>{
      setdata(res.data)
    });
  }, [])
console.log(data)
  return (
   
     <>
     <Flex 
     justifyContent='space-around'
     
     >
     <Heading> Todos </Heading>
     <InputGroup ml={'18%'}>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon /> }
        // color='gray.300' />}
    />
    <Input  placeholder='search' size='md' border='2px solid'  />
      </InputGroup>
     </Flex>
     <Box border='2px solid' >
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
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
        data && data.map((el)=>(
          <Tr key={el.id} >
        <Td> {el.id}</Td>
        <Td> {el.title}</Td>
        <Td> {el.completed ? "Completed" : "Incompleted"}</Td>
        <Td> View User </Td>
        </Tr>
        ))
      }
      {/* <Tr>
        <Td>{}</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr> */}
      {/* <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr> */}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
     </Box>
     </>
     
  )
}

export default Todos
