import { Checkbox, CheckboxProps, Slider } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const SearchCard = () => {
  const [price, setPrice] = useState(800000);
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className=" flex justify-between  w-full bg-gray-900 px-10 py-5 text-white rounded">
        <div>
          <div className="flex gap-2 items-center mb-4">
            <CiFilter size={16} />
            <span className="text">Filter search results</span>
          </div>

          <div className="flex flex-col ">
            <span className="block font-semibold mb-1">Price</span>
            <Slider
              style={{ width: 250 }}
              min={0}
              max={2000000}
              step={50000}
              value={price}
              onChange={(value) => setPrice(value)}
              tooltip={{ formatter: null }}
            />
            <p className="text-sm ">Below {price.toLocaleString()}đ</p>
          </div>
          <div className="pt-5">
            <Checkbox onChange={onChange}>Show only special offers</Checkbox>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex flex-col pt-8 gap-4">
              <span className="font-bold">Tags</span>
              <div >
                <Checkbox.Group
                  className="flex flex-col gap-2"
                  options={["Action", "Adventure", "RPG", "Strategy", "Multiplayer"]}
                  defaultValue={["Action", "Adventure"]}
                  onChange={(checkedValues) => {
                    console.log("checked = ", checkedValues);
                  }}
                />
              </div>
              <div>
                <Search placeholder="Search for other tags" style={{ width: 200 }} />
              </div>
            </div>
          </div>
        </div>
        <div>
            <div className="flex flex-col pt-8 gap-4">
                <span className="font-bold">Platforms</span>
                <div>
                <Checkbox.Group
                    className="flex flex-col gap-2"
                    options={["PC", "PlayStation", "Xbox", "Nintendo Switch"]}
                    defaultValue={["PC", "PlayStation"]}
                    onChange={(checkedValues) => {
                    console.log("checked = ", checkedValues);
                    }}
                />
                </div>
                
            </div>
        </div>
        <div>
            <div className="flex flex-col pt-8 gap-4">
                <span className="font-bold">Languages</span>
                <div>
                <Checkbox.Group
                    className="flex flex-col gap-2"
                    options={["VietNamese", "Chinese", "English", "Japanese", "Korean"]}
                    defaultValue={["VietNamese"]}
                    onChange={(checkedValues) => {
                    console.log("checked = ", checkedValues);
                    }}
                />
                </div>
                <div>
                    <Search placeholder="Search for other languages" style={{ width: 200 }} />
                </div>
            </div>  
        </div>
      </div>
    </>
  );
};

export default SearchCard;
