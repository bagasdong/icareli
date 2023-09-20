import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";

const Organizing = () => {
  const [organizingCommittee, setOrganizingCommittee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}organizing`)
      .then((response) => {
        setOrganizingCommittee(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
    <div className="flex justify-center text-center font-plus-jakarta">
      <div className="flex flex-col justify-left p-10">
        <h1 className="text-xl font-bold mb-8">Organizing Committee</h1>
        <div className="flex justify-center w-full">
          <table className="table-fixed w-3/4 font-semibold" style={{ paddingLeft: "20px", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to left, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Division
                </th>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to right, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {organizingCommittee.map((contact, index) => (
                <tr key={index}>
                  <td className="border-b-2 text-center border-gray-600 px-4 py-2">{contact.divisi}</td>
                  <td className="border-b-2 text-center border-gray-600 px-4 py-2" dangerouslySetInnerHTML={{ __html: contact.nama }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Organizing;
