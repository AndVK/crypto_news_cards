import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import CryptoCard from './CryptoCard';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCryptoNews, getCryptoNews } from '../Redux/Slices/cryptoSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const CardList = () => {
  const [ likeFilter, setLikeFilter ] = useState(false)
  const data = useSelector(getCryptoNews)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAsyncCryptoNews())
  }, [dispatch])
  
  if (data?.length === 0) {
    return <CircularProgress />
  }

  return (
    <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column', mt: 1, p: 2, }}>
      <Box sx={{ mb: 2}}>
        <Button color="primary" variant='contained' onClick={() => setLikeFilter(!likeFilter)}>
          favorite cards filter
        </Button>
      </Box>
      <Grid container spacing={3}>
        {
          likeFilter ?
          data?.map(item => item.isLike ? (
            <Grid item xs={4} key={item.id}>
              <CryptoCard data={item}/>
            </Grid>) : null)
          :
          data?.map((item) => 
            <Grid item xs={4} key={item.id}>
              <CryptoCard data={item}/>
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default CardList
