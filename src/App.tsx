import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/actions/users'
import Posts from "./components/Posts";

function App() {

  // const dispatch = useAppDispatch()
  //
  // const { users, loading, error } = useAppSelector((state) => state.user)
  //
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])
  //
  // if (loading) return <p>Loading...</p>
  //
  // if (error) return <p>{error}</p>

  return (
    <BrowserRouter>
    <>
      <Posts />
      {/*{users.map((u) => (*/}
      {/*    <p key={u.id} >{u.name}</p>*/}
      {/*  ))}*/}
    </>
    </BrowserRouter>
  )
}

export default App
