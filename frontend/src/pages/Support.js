import { useState } from "react";
import { toast } from "react-toastify";
import { FaQuestionCircle, FaEnvelope, FaUserShield } from "react-icons/fa";
import "../styles/support.css";

function Support() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    priority: "",
    message: "",
    file: null
  });

  const handleChange = (e) => {

    if(e.target.name === "file"){
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }else{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const ticketId = Math.floor(Math.random() * 100000);
  
    const newTicket = {
      id: ticketId,
      issue: formData.issue,
      priority: formData.priority,
      message: formData.message,
      status: "Pending"
    };
  
    // get old tickets
    const existingTickets =
      JSON.parse(localStorage.getItem("tickets")) || [];
  
    // add new ticket
    existingTickets.push(newTicket);
  
    localStorage.setItem("tickets", JSON.stringify(existingTickets));
  
    toast.success(`Support request submitted! Ticket ID: ${ticketId}`);
  
    setFormData({
      name: "",
      email: "",
      issue: "",
      priority: "",
      message: "",
      file: null
    });
  };

  return (
    <div className="support-page">

      {/* HERO */}
      <div className="support-hero">

        <h1>GoPool Support Center</h1>

        <p>
          We're here to help you with ride booking, account issues,
          or technical problems.
        </p>

        <input
          className="support-search"
          placeholder="Search help articles..."
        />

      </div>


      {/* SUPPORT OPTIONS */}

      <div className="support-options">

        <div className="support-card">
          <FaQuestionCircle className="support-icon"/>
          <h3>FAQs</h3>
          <p>Find answers to common questions.</p>
        </div>

        <div className="support-card">
          <FaUserShield className="support-icon"/>
          <h3>Safety Guidelines</h3>
          <p>Learn about safe ride-sharing practices.</p>
        </div>

        <div className="support-card">
          <FaEnvelope className="support-icon"/>
          <h3>Email Support</h3>
          <p>support@gopool.com</p>
        </div>

      </div>


      {/* SUPPORT FORM */}

      <div className="support-form-container">

        <h2>Submit a Support Request</h2>

        <form className="support-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
          >
            <option value="">Issue Type</option>
            <option value="ride">Ride Booking Issue</option>
            <option value="account">Account Problem</option>
            <option value="technical">Technical Error</option>
          </select>

          {/* Priority */}

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="">Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Message */}

          <textarea
            name="message"
            placeholder="Describe your issue..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* File Upload */}

          <input
            type="file"
            name="file"
            onChange={handleChange}
          />

          <button type="submit">
            Submit Request
          </button>

        </form>

      </div>


      {/* CONTACT INFO */}

      <div className="support-contact">

        <h3>Other Ways to Reach Us</h3>

        <p>Email: support@gopool.com</p>

        <p>Average response time: 24 hours</p>

      </div>

    </div>
  );
}

export default Support;