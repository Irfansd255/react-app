import TaskList from "@/components/TaskList";
import Link from 'next/link'
import { IoAddCircleOutline } from "react-icons/io5";


export default async function Home() {
  

  return (
    <main className="p-10 min-h-screen items-center justify-center">

      <div>
        <div className="flex justify-end	">
        <Link href="/addtask" className="w-fit	bg-sky-500 mb-4 hover:bg-sky-400  items-center text-white font-bold py-2 px-4 flex rounded focus:outline-none focus:shadow-outline">Add Task <IoAddCircleOutline className="ms-2 text-1xl" /></Link>
        </div>

        <TaskList/>

      </div>
    </main>
  );
}
