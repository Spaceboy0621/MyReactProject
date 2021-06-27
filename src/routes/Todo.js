import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, deleteTodo, getTodo } from "../actions/todo"

export default function Todo() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [showModal, setShowModal] = useState(false)

  // modal parameters
  const [mtitle, setMtitle] = useState("")
  const [mdescription, setMdescription] = useState("")
  

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  const store = useSelector(state => state.todo)
  const todos = store.todos
  console.log(todos)

  const handleDel = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id) => {
    dispatch(getTodo(id))
    // const editurl = `/todoedit`
    history.push("/todoedit")
  }

  const handleModal = (record) => {
    console.log("record:", record)
    setMtitle(record.title)
    setMdescription(record.description)
    setShowModal(true)
  }

  return (
      <div className="p-4 w-full bg-gray-200">
        <div className="flex m-1 justify-center w-full">
          <input 
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              type="text" 
              placeholder="Search..." 
              className="p-2 mr-2 mt-1 block w-full border-none bg-gray-100 h-10 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 rounded-md" 
          />    
          
          <Link to="/todoadd" className="w-1/4 py-1">
              <button
                  className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </span>
                  Add
              </button>
          </Link>
        </div>
        {
          todos && todos.map((item, index) => {
            return (
              <div key={index} className="lg:flex items-center justify-center w-full py-1">
                <div className="lg:w-full lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src={item.image} alt={item.image} className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p onClick={() => handleModal(item)} className="text-xl font-medium leading-5 text-gray-800 cursor-pointer">{item.title}</p>
                                <p className="text-sm leading-normal pt-2 text-gray-500">{item.during}</p>
                            </div>
                            <div className="grid gap-3 grid-cols-3">
                              <div>
                                <Link onClick={() => handleEdit(item.id)} to={`todoedit/${item.id}`} className="text-blue-600 hover:text-blue-900">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                  </svg>
                                </Link>
                              </div>
                              <div>
                                <div onClick={() => handleDel(item.id)} className="text-blue-600 hover:text-blue-900">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 overflow-ellipsis whitespace-nowrap overflow-hidden h-20"><div dangerouslySetInnerHTML={{ __html: item.description }} /></p>
                        <div className="flex mt-2">
                            <div className="py-2 px-4 text-xs leading-3 text-blue-700 rounded-full bg-blue-100">{item.state}</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-blue-700 rounded-full bg-blue-100">{item.type}</div>
                        </div>
                    </div>
                </div>
              </div>
            )
          })
        }

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-5/6 my-6 mx-auto px-6">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {mtitle}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      <div className="h-64 overflow-auto" dangerouslySetInnerHTML={{ __html: mdescription }} />
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
  )
}
  