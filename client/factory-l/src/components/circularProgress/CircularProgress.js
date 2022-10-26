import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import classes from './CircularProgress.module.css'

export default function CircularIndeterminate() {
  return (
    <div className={classes.wrapper}>

    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      <h3>Loading...</h3>
    </Box>
    </div>
  );
}