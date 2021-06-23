import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, updateTodo } from "../actions/todo"
import { DatePicker } from "../components/Datepicker";

export default function Todoedit() {
    // ** Store Vars
    const dispatch = useDispatch()
    const history = useHistory()
    let { docID } = useParams()

    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        dispatch(getTodo(docID))
    }, [dispatch])

    const store = useSelector(state => state.todo)
    const todo = store.todo

    useEffect(() => {
        setTitle(todo.title)
        setDescription(todo.description)
    }, [dispatch, todo])

    const handleEdit = () => {
        console.log(date)
        const data = {
            title,
            description,
            during : "2021/4/21",
            state : "active",
            type : "urgent",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDwI4jzp-JBnspxn1WPWfRsoGrOgXgeXvvg&usqp=CAU',
        }
        dispatch(updateTodo(docID, data))
        setTitle('')
        setDescription('')
        history.push("/todo")
    }

    return (
        <div className="text-blue-500 text-center py-6">
            <div className="px-24 py-3">
                <label htmlFor="title" className="sr-only">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    value={title}
                    type="text"
                    autoComplete="Title"
                    onChange={e => setTitle(e.target.value)}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Title"
                />
            </div>

            <div className="grid grid-cols-3 gap h-64">
                <div className="">
                    <div className="px-24 py-3">
                        <DatePicker date={date} onChange={setDate}></DatePicker>
                    </div>
                </div>
                <div className="col-span-2 ...">
                    <div className="px-24 py-3">
                        <label htmlFor="description" className="sr-only">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            type="text"
                            value={description}
                            autoComplete="Description"
                            onChange={e => setDescription(e.target.value)}
                            required
                            className="h-32 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="description"
                        />

                        <div className="flex w-max mx-auto my-5">
                            <button className="border-2 border-transparent bg-purple-500 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-purple-500 hover:bg-transparent hover:text-purple-500">Active</button>
                            <button className="border-2 border-transparent bg-purple-500 ml-3 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-purple-500 hover:bg-transparent hover:text-purple-500">Done</button>
                            <button className="border-2 border-transparent bg-red-500 ml-3 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500">Deny</button>
                            <div className="bg-gray-700 text-white text-xl ml-3 px-3 font-bold rounded">===== State =====</div>
                        </div>

                        <div className="flex float-right w-max mx-auto my-5">
                            <div className="bg-gray-700 text-white text-xl mr-3 px-3 font-bold rounded">===== Type =====</div>
                            <button className="border-2 border-transparent bg-purple-500 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-purple-500 hover:bg-transparent hover:text-purple-500">Active</button>
                            <button className="border-2 border-transparent bg-purple-500 ml-3 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-purple-500 hover:bg-transparent hover:text-purple-500">Done</button>
                            <button className="border-2 border-transparent bg-red-500 ml-3 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500">Deny</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-24 py-10">
                <div className="grid gap-2 grid-cols-2">
                    <Link to="/todo">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                </svg>
                            </span>
                            Cancel
                        </button>
                    </Link>
                    <div>
                        <button
                            onClick={handleEdit}
                            className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
