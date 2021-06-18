import React from 'react'
import { List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider, Icon} from '@material-ui/core';
    import {
        BrowserRouter as Router,
        Link
      } from "react-router-dom";

const ListaVertical = () => {
    return ( 
        <div>
         <List component="nav" aria-label="cicle">

         <Link to='/JoggerA'>  
            <ListItem button>
                <ListItemIcon>
                    <Icon color= 'primary'>
                    male
                    </Icon>
                </ListItemIcon>
                <ListItemText primary="Jogger Caballeros" />
            </ListItem>
            </Link>

            <Link to='/JoggerD'> 
            <ListItem button>
                <ListItemIcon>
                <Icon color= 'secondary'>female</Icon>
                </ListItemIcon>
                <ListItemText primary="Jogger Damas" />
            </ListItem>
            </Link> 

            <Link to='/LicrasD'> 
            <ListItem button>
                <ListItemIcon>
                <Icon color= 'secondary'>female</Icon>
                </ListItemIcon>
                <ListItemText primary="Licras Damas" />
            </ListItem>
            </Link> 


            <Link to='/JoggerN'>
            <ListItem button>
                <ListItemIcon>
                    <Icon color= 'primary'>
                    child_care
                    </Icon>
                </ListItemIcon>
                <ListItemText primary="Jogger Niños" />
            </ListItem>
            </Link>

            <Link to='/Galeria'>
            <ListItem button>
                <ListItemIcon>
                    <Icon color= 'primary'>
                    male
                    </Icon>
                </ListItemIcon>
                <ListItemText primary="Shorts Caballeros" />
            </ListItem>
            </Link>
           
            <Link to='/Salud'>
            <ListItem button>
                <ListItemIcon>
                    <Icon color= 'primary'>
                    health_and_safety
                    </Icon>
                </ListItemIcon>
                <ListItemText primary="Lenceria Quirurgica" />
            </ListItem>
            </Link>

        </List>
        <Divider />
        </div>
     );
}
 
export default ListaVertical;