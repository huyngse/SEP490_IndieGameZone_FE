import { FaWindows } from 'react-icons/fa';

const GameCard = () => {
  const games = [
    {
      id: 1,
      title: "Time to Morp",
      developer: "Team HalfBeard",
      tags: "#Base Building, #3D, #Offline",
      rating: "83%",
      platform: "",
      avatar: "https://cdn2.fptshop.com.vn/unsafe/hinh_nen_songoku_1_d479d6afd7.jpg",
      image: "https://cdn.tgdd.vn/2020/03/campaign/Freefire-640x360-2.jpg",
    },
    {
      id: 2,
      title: "Time to Morp",
      developer: "Team HalfBeard",
      tags: "#Base Building, #3D, #Offline",
      avatar: "https://cdn2.fptshop.com.vn/unsafe/hinh_nen_songoku_1_d479d6afd7.jpg",
      rating: "83%",
      image: "https://cdn.tgdd.vn/2020/03/campaign/Freefire-640x360-2.jpg",
    },
    {
      id: 3,
      title: "Time to Morp",
      avatar: "https://cdn2.fptshop.com.vn/unsafe/hinh_nen_songoku_1_d479d6afd7.jpg",
      developer: "Team HalfBeard",
      tags: "#Base Building, #3D, #Offline",
      rating: "83%",
      image: "https://cdn.tgdd.vn/2020/03/campaign/Freefire-640x360-2.jpg",
    },
    {
      id: 4,
      avatar: "https://cdn2.fptshop.com.vn/unsafe/hinh_nen_songoku_1_d479d6afd7.jpg",
      title: "Time to Morp",
      developer: "Team HalfBeard",
      tags: "#Base Building, #3D, #Offline",
      rating: "83%",
      image: "https://cdn.tgdd.vn/2020/03/campaign/Freefire-640x360-2.jpg",
    },
    {
      id: 5,
      title: "Time to Morp",
      developer: "Team HalfBeard",
      tags: "#Base Building, #3D, #Offline",
      rating: "83%",
      avatar: "https://cdn2.fptshop.com.vn/unsafe/hinh_nen_songoku_1_d479d6afd7.jpg",
      image: "https://cdn.tgdd.vn/2020/03/campaign/Freefire-640x360-2.jpg",
    },
    {
      id: 6,
      title: "Time to Morp",
      developer: "Team HalfBeard",
      tags: "#Base Building, #3D, #Offline",
      avatar: "https://cdn2.fptshop.com.vn/unsafe/hinh_nen_songoku_1_d479d6afd7.jpg",
      rating: "83%",
      image: "https://cdn.tgdd.vn/2020/03/campaign/Freefire-640x360-2.jpg",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative overflow-hidden rounded-t-xl group">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <img 
                  src={game.avatar} 
                  alt={`${game.developer} avatar`}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 truncate">{game.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{game.developer}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{game.tags}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <FaWindows size={50} />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{game.rating}</span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCard;