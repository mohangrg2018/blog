"use client";

import EmailDataTable from "@/components/AdminComponents/EmailDataTable";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmailData = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmailData = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: { id: mongoId },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmailData();
    } else {
      toast.error(response.data.msg);
    }
  };

  useEffect(() => {
    fetchEmailData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">All Subscriptions</h1>
      <div className="mt-4">
        <table className="border w-[50vw]">
          <thead className="bg-gray-200">
            <tr className="uppercase text-left">
              <th className="px-6 py-2">email subscription</th>
              <th className="px-6 py-2">date</th>
              <th className="px-6 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <EmailDataTable
                key={index}
                email={email}
                mongoId={email._id}
                date={email.date}
                deleteEmailData={deleteEmailData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
