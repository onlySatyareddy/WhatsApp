import React from 'react';

class WhatsAppButton extends React.Component {
  openWhatsApp = () => {
    
    const url = 'https://wa.me/1234567890';
    window.open(url, '_blank');
  };

  render() {
    return (
    
        <div className="background" style={{backgroundImage: `url('background.jpg')`}}>
          <button className="whatsapp-button" onClick={this.openWhatsApp}>Open WhatsApp</button>
        </div>
     
    );
  }
}

export default WhatsAppButton;
