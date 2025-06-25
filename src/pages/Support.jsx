import { useState } from 'react';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', color: '#fff' }}>
      <h1 style={{ color: '#b682ff' }}>Help & Support</h1>
      <p>If you have any questions or issues, fill out the form below and we'll get back to you shortly.</p>

      {submitted && <p style={{ color: 'lightgreen' }}>Thanks! We'll be in touch soon.</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={8} cols={30}/>
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#b682ff', border: 'none', color: '#0a0a0a', borderRadius: '6px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
