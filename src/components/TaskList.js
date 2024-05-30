"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

const TaskList = () => {
  const BASE_URL = "https://665706479f970b3b36c7a368.mockapi.io/user-task";

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL);
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  const handleCompleted = async (id, completed) => {
    setActionLoading(true);
    try {
      await axios.put(`${BASE_URL}/${id}`, { completed: !completed });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !completed } : task
        )
      );
      toast.success("Status Changed Successfully");
    } catch (error) {
      console.error("Failed to update task", error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (taskId) => {
    setActionLoading(true);
    try {
      await axios.delete(`${BASE_URL}/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      toast.success("Task deleted Successfully");
    } catch (error) {
      console.error("Failed to delete task", error);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ToastContainer />
      <div className=""></div>
      <table className=" leading-normal table-style">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Sr No.
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Task Title
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
          </tr>
        </thead>
        {actionLoading && <Loader />}

        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {index + 1}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {task.title}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                  onClick={() => handleCompleted(task.id, task.completed)}
                  className={
                    task.completed
                      ? "w-fit bg-green-500 mb-4 hover:bg-green-400 items-center text-white font-bold py-2 px-4 flex rounded focus:outline-none focus:shadow-outline"
                      : "w-fit bg-red-500 mb-4 hover:bg-red-400 items-center text-white font-bold py-2 px-4 flex rounded focus:outline-none focus:shadow-outline"
                  }
                >
                  {task.completed ? "Completed" : "Incomplete"}
                </button>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={() => handleDelete(task.id)}>
                  <FaTrash className="text-2xl text-red-500 me-4" />
                </button>
                <button
                  onClick={() => router.push(`/updatetask/${task.id}/update`)}
                >
                  <FaEdit className="text-sky-500 text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
