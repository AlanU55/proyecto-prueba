import React, { useState } from 'react';
import './AuthButtons.css'; // Asegúrate de que la ruta sea correcta

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Verificar que ambos campos estén llenos y la contraseña tenga al menos 6 caracteres
    if (!email || !password || password.length < 6) {
      setErrorMessage('Correo electrónico y contraseña son requeridos (contraseña debe ser de al menos 6 caracteres)');
      return;
    }

    // Llamar a la función onLogin si los campos son válidos
    onLogin(email, password);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="login-button">
        Iniciar Sesión
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default LoginForm;
