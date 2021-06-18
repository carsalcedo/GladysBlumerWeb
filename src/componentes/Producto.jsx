import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import accounting from 'accounting'; //libreria para dar formato de meneda a numeros
import { AddShoppingCart } from '@material-ui/icons';
import {useStateValue} from '../StateProvider'
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Fragment } from 'react';



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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },


 
}));

const Producto = (props) => {
  const {arti, addproducto} = props;
  const classes = useStyles();
const [{user}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //funciones para abrir la imagen modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Fragment>
    <Card className={classes.root} id="iefect">
      <CardHeader
        action={
         <Typography
         className={classes.action}
         variant= 'h5'
         color= 'textPrimary'>
             {accounting.formatMoney(arti.price)}
         </Typography>
        }
        title={arti.name}
        subheader={arti.fecha}
      />

     
      <CardMedia
        className={classes.media}
        image={arti.image}
        title={arti.name}
        //onClick={handleOpen}
        //type="button"
        />
     


      <CardActions disableSpacing>
      {user ? 
        <IconButton aria-label="agregar a carrito" onClick={() => addproducto(arti)} >
          <AddShoppingCart fontSize='large' />
        </IconButton>
            : 
            <IconButton aria-label="agregar a carrito" onClick={() =>  alert('Inicie sesion para poder añadir al carrito')} >
            <AddShoppingCart fontSize='large' />
          </IconButton>
          }
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{arti.descripcion}</Typography>
         
        </CardContent>
      </Collapse>
    </Card>

    </Fragment>
  );
}

export default Producto; 