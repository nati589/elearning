import ShoppingbagIcon from "./ShoppingbagIcon";
import Component from "./Component";
import StarIcon from "./StarIcon";

function OtherCourses() {
  const courses = [
    { title: "Ha Geez", image: "./assets/Cardphoto.png" },
    { title: "Hu Cabe", image: "./assets/Cardphoto2.png" },
    { title: "Hei Seles", image: "./assets/Cardphoto3.png" },
    { title: "Ho Rabe", image: "./assets/Cardphoto4.png" },
    { title: "He Hames", image: "./assets/Cardphoto5.png" },
    { title: "He Sades", image: "./assets/Cardphoto6.png" },
    { title: "Ho Sabe", image: "./assets/Cardphoto7.png" },
    { title: "Anbabi", image: "./assets/Cardphoto8.png" },
    { title: "Keltafa", image: "./assets/Cardphoto9.png" },
    { title: "Mihur", image: "./assets/Cardphoto10.png" }
 ];
 
  return (
    <div className="absolute top-[1677px] left-[78px] w-[1285px] h-[1029px] text-left text-5xl text-tomato font-poppins">
      <div className="absolute top-[985px] left-[501px] w-[278px] h-11 text-base text-midnightblue-200">
        <div className="absolute top-[0px] left-[278px] w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-blueviolet w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[10px] left-[-34px] w-6 h-6 overflow-hidden"
            alt=""
            src="/right-arrow--24--outline.svg"
          />
        </div>
        <div className="absolute top-[14px] left-[178px] font-medium">
          of 13
        </div>
        <div className="absolute h-full w-[15.83%] top-[0%] right-[41.37%] bottom-[0%] left-[42.81%] text-center text-lg text-darkslategray">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white" />
          <div className="absolute top-[29.55%] left-[40.91%] font-medium">
            1
          </div>
        </div>
        <div className="absolute top-[14px] left-[64px] font-medium">Page</div>
        <div className="absolute top-[0px] left-[0px] w-11 h-11">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-lavender w-11 h-11" />
          <img
            className="absolute top-[10px] left-[10px] w-6 h-6 overflow-hidden"
            alt=""
            src="/right-arrow--24--outline1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[150px] left-[660px] w-[625px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">
          He Sades
        </div>
        <img
          className="absolute top-[15px] left-[515px] w-[110px] h-[39px] object-cover"
          alt=""
          src="./assets/lkjhgfd 2 (1).png"
        />
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto6.png"
        />
      </div>
      <div className="absolute top-[313px] left-[660px] w-[625px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">
          Ho Sabe
        </div>
        <img
          className="absolute top-[23px] left-[515px] w-[110px] h-[39px] object-cover"
          alt=""
          src="./assets/lkjhgfd 2(6).png"
        />
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto7.png"
        />
      </div>
      <div className="absolute top-[456px] left-[660px] w-[620px] h-[153px]">
        <div className="absolute top-[20px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <div className="absolute top-[89px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[44px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">{`Anbabi `}</div>
        {/* <img
          className="absolute top-[0px] left-[538px] w-[75px] h-[89px] object-cover"
          alt=""
          src="/image1600x800recoveredrecovered-1@2x.png"
        /> */}
        <img
          className="absolute top-[35px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto8.png"
        />
      </div>
      <div className="absolute top-[619px] left-[660px] w-[622px] h-[153px]">
        <div className="absolute top-[20px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <img
          className="absolute top-[0px] left-[534px] w-[88px] h-[89px] object-cover"
          alt=""
          src="/image1600x800recoveredrecovered-11@2x.png"
        />
        <div className="absolute top-[89px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[44px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">
          Keltafa
        </div>
        <img
          className="absolute top-[35px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto9.png"
        />
      </div>
      <div className="absolute top-[802px] left-[660px] w-[620px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">
          <p className="m-0">Mihur</p>
        </div>
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto10.png"
        />
      </div>
      <div className="absolute top-[150px] left-[0px] w-[620px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">{`Ha Geez `}</div>
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
      
          src="src\assets\Cardphoto.png"
        />
      </div>
      <div className="absolute top-[313px] left-[0px] w-[620px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-100">
          Hu cabe
        </div>
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto2.png"
        />
        <img
          className="absolute top-[15px] left-[480px] w-[120px] h-[39px] object-cover"
          alt=""
          src="/lkjhgfd-22@2x.png"
        />
      </div>
      <div className="absolute top-[639px] left-[0px] w-[620px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <img
          className="absolute top-[25px] left-[485px] w-[110px] h-[39px] object-cover"
          alt=""
          src="/lkjhgfd-23@2x.png"
        />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-ghostwhite-200 w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">
          Ha Rabe
        </div>
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto4.png"
        />
      </div>
      <div className="absolute top-[802px] left-[0px] w-[620px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[620px] h-[133px]" />
        <ShoppingbagIcon />
        <div>
          <Component/>
        </div>
        <StarIcon/>
        <div className="absolute top-[24px] left-[190px] leading-[20px] font-black text-4xl text-midnightblue-200">
          He Hames
        </div>
        <img
          className="absolute top-[15px] left-[485px] w-[110px] h-[39px] object-cover"
          alt=""
          src="./assets/lkjhgfd 2(5).png"
        />
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="/cardphoto5@2x.png"
        />
      </div>
      <div className="absolute top-[476px] left-[0px] w-[620px] h-[133px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_50px_80px_rgba(0,_0,_0,_0.05)] w-[620px] h-[133px]" />
        <div className="absolute top-[69px] left-[556px] w-11 h-11">
          <div className="absolute top-[0px] left-[44px] rounded-md bg-blueviolet w-11 h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <ShoppingbagIcon/>
        </div>
        <Component />
        <StarIcon />
        <div className="absolute top-[24px] left-[190px] leading-[20px] text-4xl font-black text-midnightblue-200">
          Hei Seles
        </div>
        <img
          className="absolute top-[15px] left-[485px] w-[110px] h-[39px] object-cover"
          alt=""
          src="./assets/lkjhgfd 2 (3).png"
        />
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
          alt=""
          src="./assets/Cardphoto3.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[110px] text-base text-midnightblue-200">
        <div className="absolute top-[0px] left-[0px] text-11xl font-black">{`Other Courses For  Beginners `}</div>
        <div className="absolute top-[50px] left-[880px] w-[400px] h-[60px] text-dimgray-200">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[400px] h-[60px]" />
          <img
            className="absolute top-[17.74px] left-[361px] w-6 h-6 overflow-hidden"
            alt=""
            src="/down-arrow--24--outline.svg"
          />
          <div className="absolute top-[22px] left-[20px] font-medium">
            <span>{`Sort by: `}</span>
            <span className="text-midnightblue-200">Latest</span>
          </div>
        </div>
        <div className="absolute top-[50px] left-[0px] w-[840px] h-[60px] text-center text-white font-inter">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[840px] h-[60px]" />
          <div className="absolute top-[7px] left-[690px] w-[143px] h-[46px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blueviolet w-[143px] h-[46px]" />
            <div className="absolute top-[13px] left-[59px] leading-[20px] font-medium">
              Search
            </div>
            <img
              className="absolute top-[11px] left-[30px] w-6 h-6 overflow-hidden"
              alt=""
              src="/magnifier--24--outline.svg"
            />
          </div>
          <div className="flex space-x-4 ml-auto">
          <input
            type="text"
            className="w-60 px-3 py-2 border rounded-lg"
            placeholder="Search..."
          />
          <button className="px-4 py-2 bg-9C4DF4 text-white rounded-lg">Search</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCourses;
