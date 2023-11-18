function Card({ name, lastName, email, profilePicture }) {
  return (
    <div className="flex gap-8 bg-white px-8 py-4 border-2 border-gray-300">
      <img src={profilePicture} alt="profile picture" />
      <div className="flex flex-col justify-center items-start gap-3">
        <p>Name: {name}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <div className="flex justify-center items-center gap-6">
          <button className="bg-delete-icon w-6 h-6"></button>
          <button className="bg-edit-icon w-6 h-6"></button>
        </div>
      </div>
    </div>
  )
}

export default Card
