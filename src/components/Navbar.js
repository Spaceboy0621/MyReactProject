/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/auth"
import { useDispatch, useSelector } from 'react-redux'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  {name : 'Home', to : '/home'},
  {name : 'Todo', to : '/todo'},
  {name : 'Test', to : '/test'},
  {name : 'About', to : '/about'},
  {name : 'Profile', to : '/profile'}
]

const account = [
  {name : 'Login', to : '/login'},
  {name : 'Register', to : '/register'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [tab, setTab] = useState(0)
  const [accTab, setAccTab] = useState(0)

  // const [token, setToken] = useState(localStorage.getItem("token"))
  // console.log("token:", token)
  const [token, setToken] = useState("scscs")

  const store = useSelector(state => state.auth)
  const user = store.user
  console.log("user:", user)

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"))
  // }, [])

  const handleTab = (index) => {
    setTab(index)
  }

  const handleAccTab = (index) => {
    setAccTab(index)
  }

  const handleProfile = () => {
      dispatch(logout())
      setToken('')
      history.push("/")
  }

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {token && navigation.map((item, itemIdx) =>
                        itemIdx === tab ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Link to={item.to} onClick={() => handleTab(itemIdx)} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                              {item.name}
                            </Link>
                          </Fragment>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => handleTab(itemIdx)} 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {
                  token ? (
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                          {({ open }) => (
                            <>
                              <div>
                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span className="sr-only">Open user menu</span>
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://lh3.googleusercontent.com/ogw/ADea4I4xUDPeoM9F8WZfzwXYOcki9YvVD01h6DDi_mx_=s32-c-mo"
                                    alt=""
                                  />
                                </Menu.Button>
                              </div>
                              <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className=" z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <Menu.Item key={"item.name"}>
                                      {({ active }) => (
                                        <a
                                          // to={item.to}
                                          href="/"
                                          onClick = {() => handleProfile()}
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          Logout
                                        </a>
                                      )}
                                    </Menu.Item>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </div>
                    </div>
                  )
                  : 
                    <div className="ml-3 relative">
                    {account.map((item, itemIdx) =>
                      itemIdx === accTab ? (
                        <Fragment key={item}>
                          <Link to={item.to} onClick={() => handleAccTab(itemIdx)} className="bg-gray-900 mx-2 text-white px-4 py-2 rounded-md text-sm font-medium">
                            {item.name}
                          </Link>
                        </Fragment>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => handleAccTab(itemIdx)} 
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 mx-2 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                    </div>
                }
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        {item}
                      </Link>
                    </Fragment>
                  ) : (
                    <Link
                      key={item}
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://lh3.googleusercontent.com/ogw/ADea4I4xUDPeoM9F8WZfzwXYOcki9YvVD01h6DDi_mx_=s32-c-mo"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <Link
                      key={item}
                      to="/"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item}
                    </Link>
                  ))}
                </div> */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{navigation[tab].name}</h1>
        </div>
      </header> */}
    </div>
  );
}
