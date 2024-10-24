import React from 'react';

const ContactSection: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0px',
    backgroundColor: '#f4f4f9'
  };

  const contactContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '40px',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
  };

  const contactBoxStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#f9f9fc',
    padding: '20px',
    borderRadius: '8px',
    width: '175px',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
  };

  const iconStyle: React.CSSProperties = {
    width: '30px',
    marginBottom: '10px',
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: '10px',
    fontSize: '18px',
    color: '#555',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#777',
  };

  const linkStyle: React.CSSProperties = {
    color: '#3f51b5',
    textDecoration: 'none',
  };

  return (
    <div>
    <div style={containerStyle}>
      <div style={contactContainerStyle}>
        <div style={contactBoxStyle}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/marker.png"
            alt="Location Icon"
            style={iconStyle}
          />
          <h3 style={headingStyle}>Address</h3>
          <p style={textStyle}>
           Luhari Sarai Main Market, Nagina
            <br />
            Bijnor ,U.P. - 246762
          </p>
        </div>

        <div style={contactBoxStyle}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/email-open.png"
            alt="Email Icon"
            style={iconStyle}
          />
          <h3 style={headingStyle}>Email</h3>
          <p style={textStyle}>
            <a href="mailto:mohdfaaizazeem@gmail.com" style={linkStyle}>
              mohdfaaizazeem@gmail.com
            </a>
          </p>
        </div>

        <div style={contactBoxStyle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn Icon" 
            style={iconStyle}
          />
          <h3 style={headingStyle}>LinkedIn</h3>
          <p style={textStyle}>
            <a href="https://www.linkedin.com/in/mohd-faaiz-azeem-2a605428b/" style={linkStyle}>
             Mohd Faaiz Azeem
            </a>
          </p>
        </div>
        <div style={contactBoxStyle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram Icon" 
            style={iconStyle}
          />
          <h3 style={headingStyle}>Insta</h3>
          <p style={textStyle}>
            <a href="https://www.instagram.com/faaiz_azeem2707/" style={linkStyle}>
              faaiz_azeem2707
            </a>
          </p>
        </div>
      </div>
    </div>
   
      </div>
    
  );
};

export default ContactSection;


