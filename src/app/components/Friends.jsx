import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friends = ({ friend }) => {
  const { name, picture, status, days_since_contact, tags,id,next_due_date } = friend;
  return (
    <Link href={`/${id}`}>
      <div className="bg-white shadow-2xs text-center space-y-2 p-6 rounded-2xl">
        <div>
          <Image
            className="rounded-full mx-auto"
            src={picture}
            alt={name}
            height={50}
            width={50}
          ></Image>
        </div>
        <h2 className="text-[#1F2937] font-semibold">{name}</h2>
        <p className="text-xs text-[#64748B]">{days_since_contact}d ago</p>
        <div className="space-x-2">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="badge bg-[#CBFADB] text-[#244D3F] border-none"
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          className={`badge border-none text-white ${
            status === "overdue"
              ? "bg-[#EF4444]"
              : status === "due"
                ? "bg-[#EFAD44]"
                : "bg-[#244D3F]"
          }`}
        >
          {status}
        </div>
      </div>
    </Link>
  );
};

export default Friends;
