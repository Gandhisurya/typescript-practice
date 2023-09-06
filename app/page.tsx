"use client";
import React from "react";

type User = {
  name: string;
  sessionId: number;
};

export default function Home() {
  const [userName, setUserName] = React.useState("");
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <div className="w-full h-screen flex flex-col text-center items-center">
      <form>
        <div className="my-5">
          <p>Username</p>
          <input
            className="w-[500px] h-10 bg-white text-black rounded-lg pl-2"
            onChange={(e) => setUserName(e?.target?.value)}
          />
        </div>
        <button
          className="w-[500px] h-10 bg-blue-500 text-white rounded-lg"
          onClick={(e) => {
            e.preventDefault();
            setUser({
              name: "string",
              sessionId: Math.random(),
            });
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
