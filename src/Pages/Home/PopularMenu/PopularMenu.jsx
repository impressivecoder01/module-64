import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  
  return (
    <div>
      <section className="my-8">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-3">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center my-8">

        <button className="btn btn-outline border-0 border-b-4 mt-4 ">View full menu</button>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
