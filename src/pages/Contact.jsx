import './Contact.css';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className='contact-page container'>
      <section id='contact' className='contact-section'>
        <h1>Contact Me</h1>
        <p>I'd love to collaborate. Do ping me if you have something in mind</p>
        <ContactForm />
        <div style={{ marginTop: '30px' }}>
          <Link to='/' className='btn btn-secondary'>Back to Home</Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;

