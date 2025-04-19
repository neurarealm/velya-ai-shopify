import { useFetcher } from "@remix-run/react";
import "../input.css";

export default function Index() {
  const fetcher = useFetcher();
  const isLoading = ["loading", "submitting"].includes(fetcher.state);

  const generateProduct = () => {
    fetcher.submit({}, { method: "POST" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          🎉 Welcome to your Shopify App
        </h1>
        <button
          onClick={generateProduct}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Creating product..." : "Generate a Product"}
        </button>
      </div>
    </div>
  );
}
