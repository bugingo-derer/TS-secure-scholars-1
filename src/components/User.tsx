import React from 'react'

type PropsTypes = {
  image: string
  name: string
  career: string
  comment: string
}

const User = ({ image, name, career, comment }: PropsTypes): React.JSX.Element => {
  return (
    <div className="flex flex-col border border-gray-700 bg-[#2C3D3D] hover:bg-[#1f2b2b] p-6 rounded-2xl shadow-md w-full max-w-sm hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-full border-2 border-[#57AEAE]"
        />
        <div>
          <h1 className="text-white font-bold text-xl">{name}</h1>
          <p className="text-[#57AEAE] font-medium">{career}</p>
        </div>
      </div>
      <p className="text-gray-400 italic text-base mt-4">
        &ldquo;{comment}&rdquo;
      </p>
    </div>
  )
}

export default User
