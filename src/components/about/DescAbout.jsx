import axios from "axios";
import React, { useEffect, useState } from "react";
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

  return (
    <div className="flex flex-col h-auto font-plus-jakarta p-24">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center mb-8">
          <img src={`${API_GAMBAR_URL}${data.gambar_about}`} alt="Image 1" className="w-1/2 rounded-xl" />
        </div>
        <div className="text-xl mt-4" dangerouslySetInnerHTML={{ __html: data.deskripsi }} />
      </div>
    </div>
  );
};

export default DescPage;
