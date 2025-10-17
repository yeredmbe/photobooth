import React, { useState } from "react";

const PhotoboothForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    address: "",
    photobooth: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const photoboothOptions = [
    "Miroir Carré",
    "Miroir Rond",
    "Selfi PAD",
    "Video Booth 360",
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10   overflow-hidden ">
      {/* Left side - Form */}
      <div className="flex-1 p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#9e8121] transition-colors duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Courriel <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Eg. example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#9e8121] transition-colors duration-200"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Eg. 541 444 0755"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#9e8121] transition-colors duration-200"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Date de votre évènement
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#9e8121] transition-colors duration-200"
            />
          </div>

          {/* Event Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Adresse de votre évènement
            </label>
            <input
              type="text"
              name="address"
              placeholder="Eg. TKC Yaounde, Cameroun"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#9e8121] transition-colors duration-200"
            />
          </div>

          {/* Photobooth Options */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Le photobooth désiré
            </label>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {photoboothOptions.map((option) => (
                <label
                  key={option}
                  className="inline-flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="photobooth"
                    value={option}
                    checked={formData.photobooth === option}
                    onChange={handleChange}
                    className="appearance-none h-4 w-4 border border-gray-400 rounded-full checked:border-[#9e8121] checked:bg-[#9e8121] focus:outline-none focus:ring-2 focus:ring-[#9e8121]/40 transition-all duration-200"
                  />
                  <span className="group-hover:text-[#9e8121] transition-colors duration-200">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Parlez nous de votre évènement
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dites-nous plus sur votre évènement..."
              className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-0 focus:border-[#9e8121] transition-colors duration-200"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#9e8121]/90 hover:bg-[#9e8121] text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-colors duration-200"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 bg-black flex items-center justify-center max-sm:hidden">
        <img
          src="https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800"
          alt="Event"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PhotoboothForm;
