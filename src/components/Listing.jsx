import React from 'react'

function Listing() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-600 px-10 py-6 gap-12">
      <nav className="flex flex-row justify-between items-center min-w-full bg-orange-400">
        <p className="text-sky-500">goro@mail.com</p>
        <button className="bg-green-700 rounded-xl border h-10 px-8 hover:bg-green-300 hover:text-white">
          + Add
        </button>
      </nav>
    </div>
  )
}

export default Listing
