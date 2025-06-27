import { Link } from 'react-router-dom'; // ✅ Required for <Link> to work

function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem',
        color: '#aaa',
        fontSize: '0.9rem',
        borderTop: '1px solid #333',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
      }}
    >
      <Link to="/refund-policy" style={{ color: '#aaa', textDecoration: 'underline' }}>
        Refund & Return Policy
      </Link>
      <Link to="/privacy-policy" style={{ color: '#aaa', textDecoration: 'underline' }}>
        Privacy Policy
      </Link>
      <Link to="/terms-of-service" style={{ color: '#aaa', textDecoration: 'underline' }}>
        Terms of Service
      </Link>
      <Link to="/support" style={{ color: '#aaa', textDecoration: 'underline' }}>
        Help & Support
      </Link>
      
    </footer>
  );
}

export default Footer; 