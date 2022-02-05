import React from 'react'
import './app-header.css'

export const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className='app-header d-flex'>
      <h1>Мои записи</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
  )
}
