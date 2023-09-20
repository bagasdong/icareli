import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL, API_GAMBAR_URL } from "../../config";

const DescPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${API_BASE_URL}about`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const firstTwoSentences = data.deskripsi.split(". ").slice(0, 4).join(". ") + ".";

  return (
    <div className="flex h-screen font-plus-jakarta">
      <div className="w-1/2 flex justify-center items-center">
        <img src={`${API_GAMBAR_URL}${data.gambar_about}`} alt="Illustration" className="rounded-2xl" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">ABOUT 2nd ICARELI</h1>
        <h1 className="text-2xl font-bold mb-4">Synergy in Advanced Sciences and Technologies for Sustainable Livestock Industry</h1>
        <div className="text-xl mt-4 mb-6" dangerouslySetInnerHTML={{ __html: firstTwoSentences }} />
        <Link to="/about">
          <button
            className="px-6 py-3 text-white text-xl rounded-2xl"
            style={{
              backgroundImage: "linear-gradient(to right, #00FF94, #00BEB3)",
            }}
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DescPage;
