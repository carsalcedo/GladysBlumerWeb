import React, {useState, useEffect} from 'react'
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './estiloconfig';
import Navbarra from './componentes/Navbarra';
import Inventario from './Inventario';
import CheckoutPage from './componentes/CheckoutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import PiePage from './componentes/PiePage';
import Isesion from './componentes/Isesion';
import Registro from './componentes/Registro';
import Cajon from './componentes/Cajon';
import Checkout from './componentes/Pagocompra/Checkout';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';
import Principal from './componentes/Principal';
import CajonCar from './componentes/CajonCar';
import ProductSection from './componentes/ProductSection'

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])
  
  const {articulos} = Inventario;
  const [artis, setArtis] = useState([]);
  const [{user}, dispatch] = useStateValue();

  const shores = articulos.filter(arti => arti.productType == "Short" );
  const dam = articulos.filter(arti => arti.sexo == "hembra" );
  const hom = articulos.filter(arti => arti.sexo == "varon" );
  const jogD = articulos.filter(arti => arti.productType == "joggerD" );
  const jogN = articulos.filter(arti => arti.productType == "joggerN" );
  const joggA = articulos.filter(arti => arti.productType == "joggerA" );
  const licraD = articulos.filter(arti => arti.productType == "licraD" );
  const salud = articulos.filter(arti => arti.productType == "salud" )
 

  const addproducto = (arti) => {
    const exist = artis.find(x => x.id === arti.id);
    if (exist) {
      setArtis(
        artis.map(x =>
          x.id === arti.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setArtis([...artis, { ...arti, qty: 1 }]);
    }
    desplegarCar();
  };

  const addproductoM = (arti) => {
    const exist = artis.find(x => x.id === arti.id);
    if (exist) {
      setArtis(
        artis.map(x =>
          x.id === arti.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setArtis([...artis, { ...arti, qty: 1 }]);
    }
  };
  
  const onRemove = (arti) => {
    const exist = artis.find((x) => x.id === arti.id);
    if (exist.qty === 1) {
      setArtis(artis.filter((x) => x.id !== arti.id));
    } else {
      setArtis(
        artis.map(x =>
          x.id === arti.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  const desloguear = () =>{
    if(user){
      auth.signOut();
      setArtis([]);
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
    };
   
  };

  const [abrir, setAbrir] = useState(false)
  const desplegar = () => {
      setAbrir(!abrir);
    };

    const [abrir2, setAbrir2] = useState(false)
    const desplegarCar = () => {
        setAbrir2(!abrir2);
      };
  


  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbarra artis={artis} desloguear={desloguear} desplegar={desplegar} desplegarCar={desplegarCar}/>

     
        <Cajon 
        variant='temporary'
        open={abrir}
        onClose={desplegar}
        />

      <CajonCar 
        variant='temporary'
        open={abrir2}
        onClose={desplegarCar}
        artis={artis} addproductoM={addproductoM} onRemove={onRemove}
        />
           

      <Switch>


      <Route path='/Pagocompra/Checkout'>
      <Checkout artis={artis} />
      </Route>

      <Route path='/carrito'>
      <CheckoutPage artis={artis}  addproductoM={addproductoM} onRemove={onRemove} />
      </Route>

      <Route path='/Isesion'>
      <Isesion />
      </Route>

      <Route path='/Registro'>
      <Registro />
      </Route>

      <Route path='/JoggerA' >
      <ProductSection articulos={joggA} titleProduct='Joggers para Caballeros' addproducto={addproducto}/>
      </Route>

      <Route path='/JoggerD' >
      <ProductSection articulos={jogD} titleProduct='Joggers para Damas' addproducto={addproducto}/>
      </Route>

      <Route path='/LicrasD' >
      <ProductSection articulos={licraD} titleProduct='Leggis para Damas' addproducto={addproducto}/>
      </Route>

      <Route path='/JoggerN' >
      <ProductSection articulos={jogN} titleProduct='Joggers para Niños' addproducto={addproducto}/>
      </Route>

      <Route path='/Salud' >
      <ProductSection articulos={salud} titleProduct='lenceria Quirurgica' addproducto={addproducto}/>
      </Route>

      <Route path='/Galeria'>
      <ProductSection articulos={shores} titleProduct='Short para Caballeros' addproducto={addproducto}/>
      </Route>

      <Route path='/GaleriaH'>
      <ProductSection articulos={hom} titleProduct='Ropa para Caballeros' addproducto={addproducto}/>
      </Route>

      <Route path='/GaleriaD'>
      <ProductSection articulos={dam} titleProduct='Ropa para Damas' addproducto={addproducto}/>
      </Route>

      <Route path='/' exact>
      <Principal/>
      </Route>

      </Switch>
      
      <PiePage/>
      </Router>
      </ThemeProvider>
  );
}
export default App;
