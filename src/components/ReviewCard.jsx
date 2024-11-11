const ProfileAvatars = () => {
  const profiles = [
    {
      id: 1,
      image:
        "https://imgs.search.brave.com/faFAoeUqrk9NeedaaPAR1KUffbKnLasnfs_hsSBB-4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk2Lzc2LzUz/LzM2MF9GXzQ5Njc2/NTM4OV9xUkd1SzMz/U2NPNDJuWmtqaUdO/SjZtSVdiNkNWNmdS/aS5qcGc",
    },
    {
      id: 2,
      image:
        "https://imgs.search.brave.com/faFAoeUqrk9NeedaaPAR1KUffbKnLasnfs_hsSBB-4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk2Lzc2LzUz/LzM2MF9GXzQ5Njc2/NTM4OV9xUkd1SzMz/U2NPNDJuWmtqaUdO/SjZtSVdiNkNWNmdS/aS5qcGc",
    },
    {
      id: 3,
      image:
        "https://imgs.search.brave.com/faFAoeUqrk9NeedaaPAR1KUffbKnLasnfs_hsSBB-4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk2Lzc2LzUz/LzM2MF9GXzQ5Njc2/NTM4OV9xUkd1SzMz/U2NPNDJuWmtqaUdO/SjZtSVdiNkNWNmdS/aS5qcGc",
    },
  ];

  return (
    <div className="mt-3 flex items-center justify-center">
      <div className="flex items-center">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className={`relative ${index !== 0 ? "-ml-3" : ""}`}
          >
            <div className="relative">
              <img
                src={profile.image}
                alt="Profile"
                className="relative size-12 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAvatars;
