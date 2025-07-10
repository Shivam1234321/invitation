import React from "react";
import "./Invitation.css";

export default function Invitation() {
  return (
    <div className="invitation-bg">
      <div className="invitation-card">
        <div className="invitation-title">भव्य उद्घाटन</div>
        <div className="invitation-subtitle">मान्यवर, हमारे नवीन प्रतिष्ठान</div>
        <div className="invitation-main">द Talab of भूख</div>
        <div className="invitation-restaurant">रेस्टोरेंट</div>
        <div className="invitation-address">
          पता- रसूलाबाद, भण्डरी स्टेशन रोड, जौनपुर
        </div>
        <div className="invitation-ceremony">
          का <span className="highlight">शुभ उद्घाटन</span>
        </div>
        <div className="invitation-date-row">
          <div className="invitation-date-block">
            <div className="invitation-date-label">शुक्रवार</div>
            <div className="invitation-date-number">11</div>
            <div className="invitation-date-year">2025</div>
          </div>
          <div className="invitation-date-block">
            <div className="invitation-date-label">जुलाई</div>
            <div className="invitation-date-time">11 बजे दिन</div>
          </div>
        </div>
        <div className="invitation-message">
          के कर कमलो द्वारा सुनिश्चित हुआ है<br />
          उक्त अवसर पर आपकी उपस्थिति सादर प्रार्थनीय है<br />
          आपका आगमन हमारा परम सौभाग्य होगा।
        </div>
        <div className="invitation-guests">
          <div>
            <span className="guest-label">मुख्य अतिथि-</span>
            <span className="guest-name main">अनुराग राय</span>
          </div>
          <div>
            <span className="guest-label">विशिष्ट अतिथि-</span>
            <span className="guest-name">अंकुल मौर्य</span>
          </div>
        </div>
        <div className="invitation-organizers">
          -: विनीत :-<br />
          <span className="organizer-names">दीपक, अंकित</span>
        </div>
        <div className="invitation-price">299/ प्लेट पर हेड</div>
        <div className="invitation-order">खाना आर्डर के लिए संपर्क करें !</div>
        <div className="invitation-contact">
          Mob: 8853856609, 8188056609
        </div>
      </div>
    </div>
  );
} 