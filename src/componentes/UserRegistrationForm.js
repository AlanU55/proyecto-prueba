import React, { useState } from 'react';
import './AuthButtons.css'; // Asegúrate de que la ruta sea correcta

function UserRegistrationForm({ onRegistration }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Realiza alguna validación del correo y contraseña si es necesario
    // Luego, llama a la función onRegistration con el correo y contraseña
    onRegistration(email, password);
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
      <button onClick={handleRegistration} className="registration-button">
        Crear Usuario
      </button>
    </div>
  );
}

export default UserRegistrationForm;
