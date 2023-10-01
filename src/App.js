import React, { useReducer, useState } from 'react';
import './App.css';
import './styles.css'; // Agrega esta línea para importar tus estilos CSS
import Cart from './componentes/Cart';
import Cards from './componentes/Cards';
import LoginForm from './componentes/LoginForm';
import UserRegistrationForm from './componentes/UserRegistrationForm';


const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      const newCartItems = [...state.cartItems];
      newCartItems.splice(action.payload, 1);
      return {
        ...state,
        cartItems: newCartItems,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const addToCart = (item) => {
    const parsedPrice = parseFloat(item.price.replace('$', ''));
    if (!isNaN(parsedPrice)) {
      dispatch({ type: 'ADD_TO_CART', payload: { ...item, price: parsedPrice, quantity: 1 } });
    }
  };

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const handleLogin = (email, password) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setShowLoginForm(false);
  };
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  const handleRegistration = (email, password) => {
    alert(`Usuario registrado: Correo - ${email}, Contraseña - ${password}`);
    setShowRegistrationForm(false);
  };

  return (
    <div className="App">
      <h1 className="title">Mi Tienda</h1>
      <div className="container">
        <div className="auth-container">
          {isLoggedIn ? (
            <div>
              <p>Correo electrónico: {userEmail}</p>
              <button className="login-button" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              {showLoginForm ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <>
                  {showRegistrationForm ? (
                    <UserRegistrationForm onRegistration={handleRegistration} />
                  ) : (
                    <>
                      <button
                        className="login-button"
                        onClick={() => setShowLoginForm(true)}
                      >
                        Iniciar Sesión
                      </button>
                      <button
                        className="registration-button"
                        onClick={() => setShowRegistrationForm(true)}
                      >
                        Crear Usuario
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div className="cards-container">
          <Cards addToCart={addToCart} />
        </div>
        <div className="cart-container">
          <Cart cartItems={state.cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
