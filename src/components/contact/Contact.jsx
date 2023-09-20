import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";

const Contact = () => {
  const [contactData, setContactData] = useState({
    address: "",
    emailAndWeb: "",
    phone: "",
    fax: "",
  });

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}contact`)
      .then((response) => {
        setContactData(response.data[0]);
      })
      .catch((error) => {
        console.error("An error occurred while fetching the contact data:", error);
      });
  }, []);

  return (
    <div className="flex justify-center text-center font-plus-jakarta">
      <div className="flex flex-col p-10 w-3/4">
        <h1 className="text-xl font-bold mb-8 text-left">All the inquiries about the conference shall be addressed to:</h1>
        <table className="table-fixed w-full font-semibold" style={{ paddingLeft: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Address</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600" dangerouslySetInnerHTML={{ __html: contactData.address }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Email & Web</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600">
                <a href={contactData.emailAndWeb} dangerouslySetInnerHTML={{ __html: contactData.email }}></a>
              </th>
            </tr>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Phone</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600" dangerouslySetInnerHTML={{ __html: contactData.phone }}></th>
            </tr>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Fax</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600" dangerouslySetInnerHTML={{ __html: contactData.fax }}></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
