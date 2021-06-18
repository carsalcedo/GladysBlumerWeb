import {createContext, useContext, useReducer} from 'react'; 

export const StateContext = createContext(); //aqui se crea el contexto en el que se puede pasar variables de un componente a otro

//aqui se proveen las herramietnas para pasar datos entre componentes
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value= {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//aqui se consumen los cambios de estado del initialState
export const useStateValue = () => useContext(StateContext);