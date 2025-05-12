import React, { useState } from 'react';

export default function RequestAccess() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request received for: ${value}`);
  };

  return (
    <div
      className="page"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}>
      <h1 style={{ color: '#b682ff', marginBottom: '1.5rem' }}>
        Request Access
      </h1>
      <form
        action="https://formspree.io/f/mkgrvdzn"
        method="POST"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
        }}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          style={{
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '300px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#b682ff',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}>
          Request Access
        </button>
      </form>
    </div>
  );
}
