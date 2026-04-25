"use client";
import {
  Archive,
  BellOff,
  MessageSquareMore,
  Phone,
  Trash2,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { toast } from "react-toastify";

const FriendActions = ({ friend }) => {
  const {
    picture,
    name,
    tags,
    status,
    days_since_contact,
    goal,
    next_due_date,
    bio,
    email,
  } = friend;

  const { logInfo, setLogInfo } = useGlobalContext();
  const handleDialButton = (friend) => {
    const logEntry = {
      id: Date.now(),
      name: friend.name,
      action: "Call",
      icon:"/assets/call.png",
      time: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: friend.status,
    };

    setLogInfo([...logInfo, logEntry]);
    toast.success(`Call To ${friend.name}`,{
       position: "top-center"
    });
  };
  const handleTextButton = (friend) => {
    const logEntry = {
      id: Date.now(),
      name: friend.name,
      action: "Text",
      icon:"/assets/text.png",
      time: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: friend.status,
    };

    setLogInfo([...logInfo, logEntry]);
    toast.success(`Sent Text To ${friend.name}`,{
       position: "top-center"
    });
  };
  const handleVideoButton = (friend) => {
    const logEntry = {
      id: Date.now(),
      name: friend.name,
      action: "Video",
      icon:"/assets/video.png",
      time: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: friend.status,
    };

    setLogInfo([...logInfo, logEntry]);
    toast.success(`Video Call To ${friend.name}`,{
      position: "top-center"
    });
  };


  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="bg-white rounded-2xl shadow-xl text-center p-8 col-span-3 lg:col-span-2 lg:row-span-2 space-y-4">
        <div className="">
          <Image
            className="rounded-full mx-auto"
            src={picture}
            alt={name}
            height={100}
            width={100}
          ></Image>
        </div>
        <h2 className="text-[#1F2937] font-semibold">{name}</h2>
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
        <h2 className="text-[#64748B] text-[16px] font-medium">
          &quot;{bio}&quot;
        </h2>
        <h2 className="text-[#64748B] text-[14px]">{email}</h2>
      </div>
      <div className="flex flex-col text-center bg-white shadow-xl col-span-3 lg:col-span-1 space-y-2 rounded-2xl py-10">
        <h2 className="font-semibold text-3xl text-[#244D3F]">
          {days_since_contact}
        </h2>
        <p className="text-[#64748B] text-xl">Days Since Contact</p>
      </div>
      <div className="flex flex-col text-center bg-white shadow-xl col-span-3 lg:col-span-1 space-y-2 rounded-2xl py-10">
        <h2 className="font-semibold text-3xl text-[#244D3F]">{goal}</h2>
        <p className="text-[#64748B] text-xl">Goal(Days)</p>
      </div>
      <div className="flex flex-col text-center bg-white shadow-xl col-span-3 lg:col-span-1 space-y-2 rounded-2xl py-10">
        <h2 className="font-semibold text-3xl text-[#244D3F]">
          {next_due_date}
        </h2>
        <p className="text-[#64748B] text-xl">Next Due Date</p>
      </div>

      <div className="flex justify-between items-center col-span-3 bg-white shadow-xl rounded-2xl p-6">
        <div className="space-y-6">
          <h2 className="font-medium text-xl text-[#244D3F]">
            Relationship Goal
          </h2>
          <p className="text-[18px]">
            Connect Every <span className="font-bold">30 days</span>
          </p>
        </div>
        <button className="btn btn-ghost">Edit</button>
      </div>

      <div className="col-span-2 space-y-4">
        <button className="btn btn-block border-none text-[#1F2937] bg-white  shadow-xl rounded-xs p-6 flex gap-2 justify-center font-medium text-[16px]">
          <BellOff />
          <h2 className="">Snooze 2 Weeks</h2>
        </button>
        <button className="btn btn-block border-none text-[#1F2937] bg-white shadow-xl rounded-xs p-6 flex gap-2 justify-center font-medium text-[16px]">
          <Archive />
          <h2 className="">Archive</h2>
        </button>
        <button className="btn btn-block border-none  bg-white shadow-xl text-red-500 rounded-xs p-6 flex gap-2 justify-center font-medium text-[16px]">
          <Trash2 />
          <h2 className="">Delete</h2>
        </button>
      </div>
      <div className="col-span-3 p-6 bg-white rounded-xl">
        <h2 className="text-xl text-[#244D3F] font-medium mb-2">
          Quick Check In
        </h2>
        <div className="grid grid-cols-3 gap-6  text-[18px]">
          <button
            onClick={() => handleDialButton(friend)}
            className="btn  border-none flex flex-col h-full text-[#1F2937] bg-[#F8FAFC] shadow-xs rounded-xl col-span-3 lg:col-span-1 p-4 text-center space-y-2"
          >
            <Phone className="w-1/5 mx-auto" />
            <h3>Call</h3>
          </button>
          <button onClick={() =>handleTextButton(friend)} className="btn  border-none flex flex-col h-full text-[#1F2937] bg-[#F8FAFC] shadow-xs text-center rounded-xl col-span-3 lg:col-span-1 p-4 space-y-2">
            <MessageSquareMore className="w-1/5 mx-auto" />
            <h3>Text</h3>
          </button>
          <button onClick={() =>handleVideoButton(friend)} className="btn  border-none flex flex-col h-full text-[#1F2937] bg-[#F8FAFC] shadow-xs rounded-xl col-span-3 lg:col-span-1 text-center p-4 space-y-2">
            <Video className="w-1/5 mx-auto" />
            <h3>Video</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendActions;
