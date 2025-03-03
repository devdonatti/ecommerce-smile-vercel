import { useNavigate } from "react-router";

// category
const category = [
  {
    image: "/logo.png",
    name: "medias",
  },
  {
    image: "/logo.png",
    name: "riñoneras",
  },
  {
    image: "/logo.png",
    name: "morrales",
  },
  {
    image: "/logo.png",
    name: "mochilas",
  },
  {
    image: "/logo.png",
    name: "gorras",
  },
  {
    image: "/logo.png",
    name: "pilusos",
  },
  {
    image: "/logo.png",
    name: "bandoleras",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-black transition-all hover:bg-pink-400 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
