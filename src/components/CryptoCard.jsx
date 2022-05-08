import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { removeCard, likeCard } from '../Redux/Slices/cryptoSlice';

const CryptoCard = ({ data }) => {

  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(removeCard(data.id))
  }

  const likeHandler = () => {
    dispatch(likeCard(data.id))
  }

  return (
    <Card sx={{ width: 345,
      height: 370,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <CardMedia
        component="img"
        alt="crypto"
        height="150"
        image={data?.image?.thumbnail?.contentUrl}
      />
      <CardContent sx={{
        '&:hover': {
        color: 'red',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}}
      >
        <Typography gutterBottom variant="h5" component="div">
          <Link href={`${data?.url}`} target="_blank" rel="noreferrer">{data?.name?.slice(0, 40) + '...'}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description.slice(0, 80) + '...'}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Button onClick={likeHandler}>
              {data.isLike ? <ThumbUpIcon/> : <ThumbUpOutlinedIcon />}
            </Button>
          </Box>
          <Box>
            <Button size="medium" color='error' variant='outlined' onClick={deleteHandler}>Delete</Button>
          </Box>
      </CardActions>
    </Card>
  )
}

export default CryptoCard
