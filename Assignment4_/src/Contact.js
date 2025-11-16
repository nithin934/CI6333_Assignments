// Contact.js
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Support",
    message: "",
    contactMethod: "",
    bestTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const firstInvalidRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.length < 2) newErrors.name = "Name must be at least 2 characters.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required.";
    if (form.phone && !/^\d{10}$/.test(form.phone)) newErrors.phone = "Phone must be 10 digits.";
    if (!form.message || form.message.length < 20) newErrors.message = "Message must be 20+ characters.";
    if (!form.contactMethod) newErrors.contactMethod = "Select contact method.";
    if (!form.agree) newErrors.agree = "You must agree to terms.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstKey = Object.keys(newErrors)[0];
      firstInvalidRef.current[firstKey].focus();
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    navigate("/thank-you", { state: { name: form.name } });

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "Support",
      message: "",
      contactMethod: "",
      bestTime: "",
      agree: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  firstInvalidRef.current = {};

  return (
    <div>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          ref={(el) => (firstInvalidRef.current.name = el)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          ref={(el) => (firstInvalidRef.current.email = el)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
          ref={(el) => (firstInvalidRef.current.phone = el)}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
        >
          <option>Support</option>
          <option>Sales</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          ref={(el) => (firstInvalidRef.current.message = el)}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <label>
          <input
            type="radio"
            name="contactMethod"
            value="Email"
            checked={form.contactMethod === "Email"}
            onChange={handleChange}
            ref={(el) => (firstInvalidRef.current.contactMethod = el)}
          />
          Email
        </label>

        <label>
          <input
            type="radio"
            name="contactMethod"
            value="Phone"
            checked={form.contactMethod === "Phone"}
            onChange={handleChange}
          />
          Phone
        </label>
        {errors.contactMethod && <p className="error">{errors.contactMethod}</p>}

        <input
          name="bestTime"
          type="time"
          value={form.bestTime}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            ref={(el) => (firstInvalidRef.current.agree = el)}
          />
          Agree to Terms
        </label>
        {errors.agree && <p className="error">{errors.agree}</p>}

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
