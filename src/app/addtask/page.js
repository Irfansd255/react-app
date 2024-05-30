"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Task title cannot be empty");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://665706479f970b3b36c7a368.mockapi.io/user-task",
        { title, completed }
      );
      console.log(response);
      setTitle("");
      setCompleted(false);
      toast.success("Task added successfully");
      router.push('/');
    } catch (error) {
      console.error("Failed to add task", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex bg-blue-200 min-h-screen w-screen items-center justify-center">
      <ToastContainer />
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-black font-bold mb-2 text-2xl">Add Task</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            className="shadow mt-4 appearance-none mb-4 border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex mb-4 items-center">
            <input
              type="checkbox"
              className="border-gray-300 me-3 rounded h-5 w-5 cursor-pointer"
              id="status"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            <label
              htmlFor="status"
              className="cursor-pointer text-1xl text-gray-600"
            >
              Completed
            </label>
          </div>
          <button
            type="submit"
            className="block bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Task"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
