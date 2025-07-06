import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const isValid = name.trim() && location.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit({ name, location });
    setName("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700">Business Name</label>
    <input
      className="w-full mt-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="e.g. Cake & Co"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700">Location</label>
    <input
      className="w-full mt-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="e.g. Mumbai"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
  </div>
  <button
    className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${
      isValid
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-gray-300 cursor-not-allowed"
    }`}
    type="submit"
    disabled={!isValid}
  >
    Submit
  </button>
</form>

  );
}
