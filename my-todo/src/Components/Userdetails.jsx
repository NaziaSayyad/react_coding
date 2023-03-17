import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Acess_User } from '../redux/user/user.action';
import Loading from './Loading';

function Userdetails({id, title,userId}) {
  const dispatch = useDispatch();
  const {data,loading, error } = useSelector((store) => store.user);
  
  useEffect(()=>{
    dispatch(Acess_User(id))
  }, [id]);


  return (
    <>
      <Box ml={'8%'}>
      <Heading> User Details </Heading>
      {
        error || loading ? <Loading /> : 
        <Box border={'1px solid'}>
        <Grid templateRows= 'repeat(5,1fr)' gap='10px'  templateColumns='repeat(2,1fr)'>
          <GridItem> TodoId: </GridItem>
          <GridItem> {id} </GridItem>
          <GridItem> TodoTitle: </GridItem>
          <GridItem> {title} </GridItem>
          <GridItem> UserID: </GridItem>
          <GridItem> {userId} </GridItem>
          <GridItem> Name : </GridItem>
          <GridItem> {data.name} </GridItem>
          <GridItem> Email : </GridItem>
          <GridItem> {data.email} </GridItem>
        </Grid>

      </Box>

      }
      </Box>
    </>
  )
}

export default Userdetails
