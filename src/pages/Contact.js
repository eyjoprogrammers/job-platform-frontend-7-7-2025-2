import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال الرسالة:", form);
    alert("تم إرسال الرسالة بنجاح!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 inline-block pb-2">
          اتصل بنا
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل اسمك"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">الرسالة</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="اكتب رسالتك هنا..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
