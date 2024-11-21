"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead/route.js route and store a Lead document in the database
const ButtonLead = ({ extraStyle }) => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    setIsLoading(true);
    try {
      await apiClient.post("/lead", { email, message });

      toast.success("Thanks for reaching out!");

      // just remove the focus on the input
      inputRef.current?.blur();
      setEmail("");
      setMessage("");
      setIsDisabled(true);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`w-full max-w-xs text-center text-6xl ${extraStyle ? extraStyle : ""}`}>
        👍
      </div>
    );
  }

  return (
    <form
      className={`w-full max-w-xs space-y-3 flex flex-col items-center mx-auto ${extraStyle ? extraStyle : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="email"
        value={email}
        ref={inputRef}
        autoComplete="email"
        placeholder="tom@cruise.com"
        className="input input-bordered w-full max-w-xs placeholder:opacity-60"
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <textarea 
        value={message} 
        placeholder="Message" 
        className="textarea textarea-bordered w-full max-w-xs placeholder:opacity-60" 
        onChange={(e) => setMessage(e.target.value)} 
      />

      <button
        className="btn btn-gradient btn-block"
        type="submit"
        disabled={isDisabled}
      >
        Say hi 👋🏻
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default ButtonLead;
