import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableData = ({
  id,
  title,
  authorImg,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const blogDate = new Date(date).toDateString();
  return (
    <tr className="border-b">
      <th className="flex items-center gap-2 px-6 py-2">
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          alt="profile"
          width={30}
          height={30}
        />
        <p className="font-medium text-sm">{author}</p>
      </th>
      <td className="px-6 py-2">
        <p>{title}</p>
      </td>
      <td className="px-6 py-2">
        <p>{blogDate}</p>
      </td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-2 cursor-pointer"
      >
        X
      </td>
    </tr>
  );
};

export default BlogTableData;
