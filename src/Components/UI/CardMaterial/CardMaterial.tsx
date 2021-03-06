import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,

    '& img': {
      objectFit: 'initial',
      width: 'auto',
      minHeight: '150px',
      display: 'block',
      margin: '1rem auto',
    }
  },
});

type CardMaterialProps = {
    guitarImg:string,
    guitarName:string,
    guitarCost:number,
}

export const CardMaterial: React.FC<CardMaterialProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.guitarImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.guitarName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.guitarCost}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}