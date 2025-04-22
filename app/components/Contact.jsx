import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>
        Email me at:{" "}
        <a href="mailto:your@email.com" className="text-blue-300 underline">
          your@email.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
