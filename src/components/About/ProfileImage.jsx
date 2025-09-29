const ProfileImage = () => {
  return (
    <div className="text-center">
      <div className="w-72 h-72 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-600 mb-8">
        {/* 실제 이미지를 사용할 때는 이렇게: */}
        {/* <img 
          src="/src/images/profile/profile.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full"
        /> */}
        Profile Image
      </div>
    </div>
  )
}

export default ProfileImage
