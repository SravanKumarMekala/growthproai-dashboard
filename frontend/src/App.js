import { useState } from "react";
import InputForm from "./InputForm";
import DisplayCard from "./DisplayCard";


function App() {
  const [data, setData] = useState(null);
  const [business, setBusiness] = useState({});
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async (info) => {
  setLoading(true);
  setBusiness(info);
  try {
    const res = await fetch("http://localhost:5000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setData(result);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

const regenerate = async () => {
  setLoading(true);
  try {
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${business.name}&location=${business.location}`
    );
    const result = await res.json();
    setData((prev) => ({ ...prev, headline: result.headline }));
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-lg mx-auto mt-10 space-y-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="float-right text-sm text-blue-600 dark:text-blue-600"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"} Mode
        </button>
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-4">
          <div className="max-w-lg mx-auto mt-10 space-y-6">
            <h1 className="text-2xl font-bold text-center text-blue-800">
              GrowthProAI – Local Business Dashboard
            </h1>
            <InputForm onSubmit={fetchData} />
            {loading && (
            <div className="flex justify-center">
              <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
            )}
            <DisplayCard data={data} onRegenerate={regenerate} />
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default App;
