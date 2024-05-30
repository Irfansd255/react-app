"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const id = params.taskid;
  console.log(id);
  
  useEffect(() => {
    if (id) {
      fetchTaskDetails(id);
    }
  }, [id]);

  const fetchTaskDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://665706479f970b3b36c7a368.mockapi.io/user-task/${id}`
      );
      setTitle(response.data.title);
      setCompleted(response.data.completed);
    } catch (error) {
      console.error("Failed to fetch task details", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }
    setLoading(true);
    try {
      const taskData = { title, completed };
      if (id) {
        await axios.put(
          `https://665706479f970b3b36c7a368.mockapi.io/user-task/${id}`,
          taskData
        );
      } else {
        await axios.post(
          "https://665706479f970b3b36c7a368.mockapi.io/user-task",
          taskData
        );
      }
      setTitle("");
      setCompleted(false);
      router.push("/");
    } catch (error) {
      console.error(`Failed to ${id ? "update" : "add"} task`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex bg-blue-200 min-h-screen w-screen items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h1 className="text-black font-bold mb-2 text-2xl">
          {id ? "Update Task" : "Add Task"}
        </h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            className="shadow mt-4 appearance-none mb-2 border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
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
              className="cursor-pointer text-1xl text-gray-600 "
            >
              Completed
            </label>
          </div>
          <button
            type="submit"
            className="block bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading
              ? id
                ? "Updating..."
                : "Adding..."
              : id
              ? "Update Task"
              : "Add Task"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
