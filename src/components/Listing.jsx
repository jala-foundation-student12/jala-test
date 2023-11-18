import React from 'react'
import Card from './Card'

function Listing() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(r => r.json())
      .then(json => setUsers(json.data))
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center px-10 py-6 gap-12">
      <nav className="flex flex-row justify-between items-center min-w-full ">
        <p className="text-sky-500">goro@mail.com</p>
        <button className="bg-green-700 rounded-xl border h-10 px-8 hover:bg-green-300 hover:text-white">
          + Add
        </button>
      </nav>

      <div className="grid grid-cols-2 gap-8 min-w-full">
        {users.map(user => (
          <Card
            key={user.id}
            name={user.first_name}
            lastName={user.last_name}
            profilePicture={user.avatar}
            email={user.email}
          />
        ))}
      </div>

      {/* <div className="grid grid-cols-2 gap-8 min-w-full">
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  )
}

export default Listing
