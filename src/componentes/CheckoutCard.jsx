import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting'; //libreria para dar formato de meneda a numeros
import {Icon} from "@material-ui/core";
import {useStateValue} from '../StateProvider';
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    background: "linear-gradient(to right, #f3e5f5, #bbdefb)",
  },
  action:{
    marginTop: "0.5rem",
  },
  media: {
    height: 0,
    paddingTop: '70.25%', // 16:9
  },

  cardActiosn: {
    display: "flex",
      justifyContent: "flex-end",
      texAlign: "center",
  },

  cardRating: {
      flexGrow: 1,
  },
 
}));

const CheckoutCard = (props) => {
  const {articulo} = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch( {
    type: actionTypes.REMOVE_ITEM,
    id: articulo.id
  });



  return (
  
    <Card className={classes.root}>
      <CardHeader
        action={
         <Typography
         className={classes.action}
         variant= 'h5'
         color= 'textPrimary'>
             {accounting.formatMoney(articulo.price)}
         </Typography>
        }
        title={articulo.name}
        subheader={articulo.fecha}
      />
      <CardMedia
        className={classes.media}
        image={articulo.image}
        title={articulo.name}
      />
     
      <CardActions disableSpacing>
       <div className={classes.cardRating}>
        Cantidad:
       </div>

       <IconButton>
            <Icon color='primary' fontSize="large">
            add_circle
             </Icon>
       </IconButton>
       <IconButton onClick={removeItem}>
            <Icon color='secondary' fontSize="large">
            delete
             </Icon>
       </IconButton>

      </CardActions>
    </Card>
   
  );
}

export default CheckoutCard; 