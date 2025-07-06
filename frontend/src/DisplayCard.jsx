import { motion } from "framer-motion";

export default function DisplayCard({ data, onRegenerate }) {
  if (!data) return null;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 space-y-3 border border-blue-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-800">⭐ {data.rating} Rating</div>
        <div className="text-sm text-gray-500">{data.reviews} Reviews</div>
      </div>
      <motion.p
        className="text-blue-700 italic border-l-4 border-blue-500 pl-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={data.headline}
      >
        “{data.headline}”
      </motion.p>
      <button
        onClick={onRegenerate}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full font-medium transition"
      >
        🔁 Regenerate SEO Headline
      </button>
    </motion.div>
  );
}
