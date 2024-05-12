import React from 'react'

export default async function AdminPage() {
  return (
    <div>Hi Admin! tasks admin can do
      <ol>
          <li>add new user</li>
          <li>update user: remove, edit role, view current fosters, selected foster status</li>
          <li>edit foster dogs/cats/critters: adoption status, fostered status, description, date posted, name, sex, age, breed, location</li>
      </ol>
    </div>
  )
}