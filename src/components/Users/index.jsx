import React from 'react'
import s from './index.module.css'

export default function Users( {firstName, lastName, age}) {
  return (
    <div className={s.users_card}>
        <p>Firstname: { firstName } </p>
        <p>Lastname: { lastName } </p>
        <p>Age: { age } </p>

    </div>
  )
}