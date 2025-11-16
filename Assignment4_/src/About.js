import React from "react";

export default function About() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>About Us</h1>

      {/* Random Image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Teamwork"
        style={{
          width: "300px",
          borderRadius: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />

      {/* Section 1 */}
      <h2>Who We Are</h2>
      <p>
        We are a group of passionate developers learning and building modern web
        applications using React. Our focus is on clean code, user-friendly
        design, and continuous improvement.
      </p>

      {/* Section 2 */}
      <h2>Our Mission</h2>
      <p>
        Our mission is to create simple, accessible, and powerful web solutions.
        We aim to master React concepts such as routing, hooks, forms,
        validation, and component architecture.
      </p>

      {/* Section 3 */}
      <h2>Our Tech Stack</h2>
      <ul>
        <li>React & React Router</li>
        <li>JavaScript (ES6+)</li>
        <li>Formik & Yup for Validation</li>
        <li>React Hook Form</li>
        <li>HTML & CSS</li>
      </ul>
    </div>
  );
}
