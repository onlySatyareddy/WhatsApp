import React, { useState } from "react";
import "./Main.css";
import "./Animation.css";
import "./WhatsAppButton.css";
function Home() {
  const [openWhatsApp, setOpenWhatsApp] = useState(() => {
    const url = "https://wa.me";

    return () => {
      window.open(url, "_blank");
    };
  });

  return (
    <>
     <div className="Abc">
      
     </div>
    </>
  );
}

export default Home;
