import Disney from "src/assets/inifite-scrolling-banner-assets/disney.svg";
import AirBnb from "src/assets/inifite-scrolling-banner-assets/airbnb.svg";
import Apple from "src/assets/inifite-scrolling-banner-assets/apple.svg";
import Quora from "src/assets/inifite-scrolling-banner-assets/quora.svg";
import Samsung from "src/assets/inifite-scrolling-banner-assets/samsung.svg";
import Sass from "src/assets/inifite-scrolling-banner-assets/sass.svg";
import Spark from "src/assets/inifite-scrolling-banner-assets/spark.svg";
import Facebook from "src/assets/inifite-scrolling-banner-assets/facebook.svg";

const InfiniteScrollingBanner = () => {
  return (
    <div className="flex gap-7 items-center max-w-[750px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] overflow-hidden">
      <ul className="flex items-center justify-center gap-14 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img
            src={Disney}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={AirBnb}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Apple}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Quora}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Samsung}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Sass}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Spark}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Facebook}
            alt="Images"
          />
        </li>
      </ul>
      <ul className="flex items-center justify-center gap-14 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img
            src={Disney}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={AirBnb}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Apple}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Quora}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Samsung}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Sass}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Spark}
            alt="Images"
          />
        </li>
        <li>
          <img
            src={Facebook}
            alt="Images"
          />
        </li>
      </ul>
    </div>
  );
};

export default InfiniteScrollingBanner;
