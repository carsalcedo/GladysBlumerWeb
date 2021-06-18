import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';
import { Icon, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const ListCar = (props) => {
    const {artis, addproductoM, onRemove} = props;
    const classes = useStyles();


    return (
        <>
        <List className={classes.root}>
        {artis.map(item => (
        <ListItem alignItems="flex-start" key={item.id}>
          <ListItemAvatar>
          <img src={item.image} alt="" width="40" height="40" />   
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {accounting.formatMoney(item.price)}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {item.qty}
                </Typography>
               
                  <IconButton onClick={() => addproductoM(item)}>
                                <Icon color='primary' fontSize="short">
                                add_circle
                                </Icon>
                            </IconButton>
                            <IconButton onClick={() => onRemove(item)}>
                                    <Icon color='secondary' fontSize="short">
                                    delete
                                    </Icon>
                            </IconButton>
              

              </React.Fragment>
            }
          />
        </ListItem>
         ))}
        <Divider variant="inset" component="li" />
       
      </List>
      
      </>
    )
}

export default ListCar
