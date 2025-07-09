import React from "react";

const EmailDataTable = ({ email, mongoId, date, deleteEmailData }) => {
  const emailDate = new Date(date).toDateString();
  return (
    <tr className="border-b">
      <td className="px-6 py-2">
        <p>{email?.email || "No Email"}</p>
      </td>
      <td className="px-6 py-2">{emailDate}</td>
      <td
        onClick={() => deleteEmailData(mongoId)}
        className="px-6 py-2 cursor-pointer w-fit"
      >
        X
      </td>
    </tr>
  );
};

export default EmailDataTable;
