import { Input } from "antd";
import GenreCard from "../home-page/genre-card";
import genre1 from "@/assets/genre-1.jpg";
import genre2 from "@/assets/genre-2.jpg";
import genre3 from "@/assets/genre-3.jpg";
import genre4 from "@/assets/genre-4.jpg";
const SearchPage = () => {
  return (
    <div className="px-6">
      <div className="flex justify-center py-5">
        <Input.Search
          placeholder="Search for game titles, genres, tags, developers,..."
          variant="filled"
          style={{ width: 900 }}
        />
      </div>
      <div>
        <div className="py-4">
          <span className=" font-bold text-3xl">Popular Genres</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {" "}
          <GenreCard title="Open world" to="/search?genre=1" background={genre1} />
          <GenreCard title="Adventure" to="/search?genre=2" background={genre2} />
          <GenreCard title="Action RPG" to="/search?genre=3" background={genre3} />
          <GenreCard title="FPS" to="/search?genre=4" background={genre4} />
        </div>
        <div>
          <div className="py-4 flex flex-col gap-1.5">
            <span className="text-xl text-gray-400 font-semibold">
              Search results for <span className="text-orange-300">hhahah</span>
            </span>
            <span className="">200,000 results match your search. 20,000 titles have been hidden based on your interests.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
