"use client";
import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { ADD_USER } from "../graphql/mutations";
import { GET_USERS } from "../graphql/queries";

export default function Home() {
  const [userName, setUserName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);

  const { data, loading, error } = useQuery(GET_USERS, {
    variables: {},
  });

  const [addUser] = useMutation(ADD_USER, {
    variables: { userName, email, password, phoneNumber },
    refetchQueries: [{ query: GET_USERS, variables: {} }],
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return (
      <p className="flex justify-center items-center font-bold text-4xl">
        Somthing Went Wrong!
      </p>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col text-center items-center">
      <form>
        <div className="my-5">
          <p className="font-semibold text-lg">Username</p>
          <input
            type="text"
            placeholder="john doe"
            className="w-[500px] h-10 bg-white text-black rounded-lg pl-2"
          />
        </div>
        <div className="">
          <p className="font-semibold text-lg">email</p>
          <input
            placeholder="email"
            type="email"
            className="w-[500px] bg-white text-black rounded-lg pl-2"
          />
        </div>
        <div>
          <p className="font-semibold text-lg">password</p>
          <input
            placeholder="**********"
            type="password"
            className="w-[500px] bg-white text-black rounded-lg pl-2"
          />
        </div>
        <div>
          <p className="font-semibold text-lg">Phonenumber</p>
          <input
            placeholder="phonenumber"
            type="text"
            className="w-[500px] bg-white text-black rounded-lg pl-2"
          />
        </div>
        <button className="w-[500px] h-10 bg-blue-500 text-white rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}
