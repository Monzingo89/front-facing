import React from 'react';
import { useNavigate } from 'react-router-dom';
import ModelViewer from '../components/ModelViewer';
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src="/logo.png"
        alt="Virtual Commerce Ventures Logo"
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <ModelViewer />
      <div className="buttons">
        <button onClick={() => navigate('/about')}>About VCV</button>
        <button onClick={() => navigate('/request-access')}>
          Request Access
        </button>
      </div>
    </div>
  );
}
