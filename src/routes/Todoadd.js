import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addTodo } from "../actions/todo"

export default function Todoadd() {
    // ** Store Vars
    const dispatch = useDispatch()
    const history = useHistory()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAdd = () => {
        console.log(title)
        const data = {
            title,
            description,
            during : "2021/4/21",
            state : "active",
            type : "urgent",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDwI4jzp-JBnspxn1WPWfRsoGrOgXgeXvvg&usqp=CAU',
        }
        dispatch(addTodo(data))
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
                    type="text"
                    autoComplete="Title"
                    onChange={e => setTitle(e.target.value)}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Title"
                />
            </div>

            <div className="px-24 py-3">
                <label htmlFor="description" className="sr-only">
                    Description
                </label>
                <ReactQuill className="" theme="snow" value={description} onChange={setDescription}/>
            </div>

            <div className="px-24 py-3">
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
                            onClick={handleAdd}
                            className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
