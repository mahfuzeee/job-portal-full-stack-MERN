import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">
              📍
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">Our Office</h3>
              <p className="text-gray-600">
                123 Main Street, 3rd Floor
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">
              ✉️
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">Email Us</h3>
              <p className="text-gray-600">
                support@padmajobs.com
                <br />
                careers@padmajobs.com
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">
              📞
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">Call Us</h3>
              <p className="text-gray-600">
                +880 1234 567890
                <br />
                Sun - Thu, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {sent && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
