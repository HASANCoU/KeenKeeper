import { Archive, BellOff,  MessageSquareMore,  Phone,  Trash2, Video } from "lucide-react";
import Image from "next/image";
import React from "react";
import FriendActions from "../components/FriendActions";

const FriendDetailsPage = async ({ params }) => {
  const { friendID } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();
  const friend = friends.find((friend) => friend.id == friendID);
  const { picture, name, tags, status,days_since_contact,goal,next_due_date,bio,email } = friend;
  return (
    <div className="w-9/12 mx-auto my-20">
      <FriendActions friend={friend}/>
    </div>
  );
};

export default FriendDetailsPage;
