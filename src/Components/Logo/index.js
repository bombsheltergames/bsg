// Framework Imports
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Style Imports
import "./logo.css";

const Logo = props => {
  const { spinLogo } = props;
  const cssClasses = clsx(["Logo", spinLogo && "Logo--spin"]);
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 3381 221"
      className={cssClasses}
    >
      <g id="Text">
        <g className="Logo-bomb">
          <polygon points="105.9,24.8 28.5,24.8 28.5,65.5 43.3,65.5 43.3,154 28.5,154 28.5,194.6 105.9,194.6    " />
          <path d="M211.2,120.5c-6.4-7.5-15.6-13-27.6-16.6c8.7-2.3,16.1-6.3,22.2-12.2c5.9-5.7,8.9-13.3,8.9-22.9     c0-9.8-3.1-18.5-9.4-25.9c-6.3-7.2-14.9-12.1-25.9-14.5c-11.2-2.4-26.9-3.5-47.2-3.5h-16.4V62h5.3c12,0,19.4,1.6,22.1,4.8     s4,6.8,4,10.7c0,4.6-1.5,8.4-4.4,11.2c-3.1,2.8-9.6,4.3-19.4,4.3h-7.6v30.9h7.6c10.5,0,17.6,1.3,21.2,4c3.7,2.8,5.5,7,5.5,12.8     c0,6.2-2,10.5-6.1,12.9c-4.2,2.4-10.9,3.7-20.4,3.7h-7.8v37.2h8.7c24.3,0,42.7-1.3,55.3-3.8c12.8-2.4,22.8-7.6,30.2-15.5     c7.3-8,11-17.7,11-29.1C221,136.8,217.7,128.2,211.2,120.5z" />
          <path
            className="Logo-bomb-warning"
            d="M334.9,12.7c-53.6,0-97.1,43.5-97.1,97.1s43.5,97.1,97.1,97.1s97.1-43.5,97.1-97.1S388.5,12.7,334.9,12.7z      M346.5,109.8c0,6.4-5.2,11.6-11.6,11.6s-11.6-5.2-11.6-11.6s5.2-11.6,11.6-11.6S346.5,103.3,346.5,109.8z M354.9,120.8     c1.8-3.3,2.8-7,2.8-11c0-3.9-1-7.7-2.8-10.9l49.1-24.4c5.7,10.9,9,23.3,9,36.5c0,13.9-3.6,26.9-9.9,38.3L354.9,120.8z      M334.5,32.3c2.7,0,5.4,0.1,8.1,0.4L337,87c-0.7-0.1-1.4-0.1-2.1-0.1c-8.2,0-15.3,4.3-19.4,10.7l-47.8-28.2     C281.6,47.2,306.3,32.3,334.5,32.3z M263.4,144.4l50.7-25.2c3.3,7.2,10.1,12.4,18.3,13.3l-5.8,56.7     C298.5,186.4,274.9,168.8,263.4,144.4z"
          />
          <polygon points="500.2,60.3 500.4,60.8 500.4,24.8 447.5,24.8 447.5,65.5 460.9,65.5 460.9,154 447.9,154      447.9,194.6 513.7,194.6 513.7,154 500.2,154    " />
          <polygon points="617.4,24.8 600.6,24.8 574.9,90.4 549.9,24.8 510.4,24.8 510.4,87.2 551,194.6 576.4,194.6      617.4,86.3    " />
          <polygon points="689.1,154 689.1,65.5 702.4,65.5 702.4,24.8 627.4,24.8 627.4,59.8 627.7,59.1 627.7,154 614.1,154      614.1,194.6 702.8,194.6 702.8,154    " />
          <polygon points="804.4,24.8 724,24.8 724,65.5 738.8,65.5 738.8,154 724,154 724,194.6 804.4,194.6    " />
          <path d="M906.7,120.5c-6.4-7.5-15.6-13-27.6-16.6c8.7-2.3,16.1-6.3,22.2-12.2c5.9-5.7,8.9-13.3,8.9-22.9     c0-9.8-3.1-18.5-9.4-25.9c-6.3-7.2-14.9-12.1-25.9-14.5c-11.2-2.4-26.9-3.5-47.2-3.5h-13.3V62h2.2c12,0,19.4,1.6,22.1,4.8     s4,6.8,4,10.7c0,4.6-1.5,8.4-4.4,11.2c-3.1,2.8-9.6,4.3-19.4,4.3h-4.6v30.9h4.6c10.5,0,17.6,1.3,21.2,4c3.7,2.8,5.5,7,5.5,12.8     c0,6.2-2,10.5-6.1,12.9c-4.2,2.4-10.9,3.7-20.4,3.7h-4.8v37.2h5.7c24.3,0,42.7-1.3,55.3-3.8c12.8-2.4,22.8-7.6,30.2-15.5     c7.3-8,11-17.7,11-29.1C916.5,136.8,913.2,128.2,906.7,120.5z" />
        </g>
        <g className="Logo-shelter">
          <path d="M1059.4,160.2c-1.1,0.1-2.2,0.2-3.5,0.2c-12.6,0-21.2-7.4-25.8-22.2H992v54.4h38.2v-11.1     c9,6.6,18.7,10.7,29.2,12.4V160.2z" />
          <path d="M1055.1,51.2c0.7-0.1,1.4-0.1,2.2-0.1c11.8,0,20,6.7,24.7,20h38V22.8h-38.5v10.5     c-7.6-6.2-16.4-10.1-26.4-11.8V51.2z" />
          <path d="M1120,117.8c-2-3.6-4.4-7.1-7.4-10.4c-3-3.4-5.9-6-8.7-7.9c-5.6-3.8-16.8-9.9-33.4-18.2     c-12.5-6.1-19.8-10-22.1-11.8c-2.4-1.7-3.5-4.3-3.5-7.7c0-1,0.1-1.9,0.2-2.7V20.6c-0.5,0-1,0-1.5,0c-14.9,0-27.4,4.4-37.6,13.3     c-10.3,8.9-15.4,21.2-15.4,37c0,8.8,2.2,16.8,6.5,24c4.3,7.3,9.5,13.1,15.6,17.2c6.5,4.6,16.7,10,30.5,16.2     c11,4.9,18.2,8.7,21.6,11.5c3.2,2.5,4.8,5.7,4.8,9.5c0,0.9-0.1,1.7-0.2,2.5v42.9c0.5,0,0.9,0,1.4,0c16.1,0,29.5-5,40-15     c10.6-9.8,15.9-21.9,15.9-36.1C1126.7,134.4,1124.5,125.8,1120,117.8z" />
          <path d="M1237.5,22.8h-89.6v40.6h13.1V152h-12.8v40.6h89.4V152h-10.9v-24c-0.1-0.4-0.2-0.9-0.2-1.4v-50     c0-0.5,0.1-1,0.2-1.4V63.5h10.9V22.8z" />
          <polygon points="1344.4,63.5 1344.4,22.8 1254.9,22.8 1254.9,63.5 1265.9,63.5 1265.9,89.3 1236.7,89.3      1236.7,124.1 1265.9,124.1 1265.9,152 1254.9,152 1254.9,192.6 1344.4,192.6 1344.4,152 1331.6,152 1331.6,63.5    " />
          <rect x="1455.7" y="89.6" width="23.7" height="34.5" />
          <polygon points="1367,152 1367,192.6 1445.7,192.6 1445.7,22.8 1366.7,22.8 1366.7,63.5 1380.2,63.5 1380.2,152         " />
          <polygon points="1484.4,152 1455.7,152 1455.7,192.6 1529,192.6 1529,138.3 1484.4,138.3    " />
          <polygon points="1455.7,22.8 1455.7,63.5 1484.4,63.5 1484.4,77.1 1529,77.1 1529,22.8    " />
          <path d="M1552,22.8v40.6h15.3V152H1552v40.6h80.7v-41.7c0-0.6,0.1-1.1,0.2-1.6V63.5h16.1V22.8H1552z" />
          <polygon points="1673.1,124.7 1673.1,152 1643.1,152 1643.1,192.6 1713.7,192.6 1713.7,124.7    " />
          <polygon points="1749.7,22.8 1708.4,22.8 1708.4,94.4 1740.3,94.4 1740.3,63.5 1749.7,63.5    " />
          <path d="M1825.5,152V69.7c0-0.3-0.1-0.5-0.1-0.8V22.8h-65.7v40.6h0.1V152h-14.6v40.6h95.3V152H1825.5z" />
          <polygon points="1835.7,22.8 1835.7,63.5 1844.9,63.5 1844.9,94.4 1876.7,94.4 1876.7,22.8    " />
          <polygon points="1897.7,152 1897.7,192.6 1976.4,192.6 1976.4,22.8 1897.5,22.8 1897.5,63.5 1910.9,63.5 1910.9,152         " />
          <rect x="1986.4" y="89.6" width="23.8" height="34.5" />
          <polygon points="2015.2,152 1986.4,152 1986.4,192.6 2059.7,192.6 2059.7,138.3 2015.2,138.3    " />
          <polygon points="1986.4,22.8 1986.4,63.5 2015.2,63.5 2015.2,77.1 2059.7,77.1 2059.7,22.8    " />
          <polygon points="2164.3,123.3 2164.4,123.3 2164.4,92.4 2164.3,92.4 2164.3,60 2164.4,60 2164.4,22.8 2084.9,22.8      2084.9,63.5 2098.7,63.5 2098.7,152 2084.9,152 2084.9,192.6 2177.2,192.6 2177.2,152 2164.3,152    " />
          <path d="M2271.2,152l-23.4-38.8c7.4-3.3,13.4-8.5,17.9-15.6c4.6-7.2,6.8-15.1,6.8-23.9c0-11.7-3.7-21.9-11.2-30.5     c-7.4-8.5-17-14-28.9-16.5c-4.2-0.9-8.9-1.6-13.9-2.1c-5-0.5-11.1-0.9-18.2-1.2c-7.1-0.3-14.8-0.4-23.1-0.4h-2.7v37.2     c7.7,0.1,13.2,0.3,16.4,0.8c3.9,0.6,7.1,2.2,9.6,4.9c2.5,2.6,3.8,6.1,3.8,10.5s-1.3,7.9-3.8,10.4c-2.5,2.7-5.6,4.3-9.3,4.9     c-3.1,0.5-8.7,0.8-16.8,0.8v30.9h10.8l37,69.3h61.2V152H2271.2z" />
        </g>
        <g className="Logo-games">
          <path d="M2452.1,155.7c-5.2-1.6-9.5-4.5-12.8-8.7c-5.2-6.7-7.8-19.3-7.8-38c0-18.7,2.5-31.6,7.4-38.6     c3.2-4.5,7.6-7.5,13.2-9.1V19.5c-1.5-0.1-3.1-0.1-4.6-0.1c-25.1,0-46.2,8.1-63.5,24.3c-17.4,16.2-26.1,37.5-26.1,64     c0,17.5,4.3,33.3,12.9,47.4c8.5,14.3,20.7,24.6,36.4,30.8c13.6,5.5,28.6,8.7,44.9,9.4V155.7z" />
          <path d="M2462.1,59.9c0.2,0,0.3,0,0.5,0c7.6,0,14.3,1.9,20.1,5.6c5.7,3.7,10.4,9.3,14,16.6h40.9V22.8h-40.9v11.8     c-9-7.7-20.5-12.4-34.6-14.3V59.9z" />
          <path d="M2467.9,101.9v32.2h17.3c0,15.3-7.7,22.9-22.9,22.9c-0.1,0-0.2,0-0.3,0v38.2c11.8-0.3,22.9-2.3,33.3-6     c11.2-4.1,20.8-10.5,28.7-19.4c8.1-9,13.3-17.8,15.9-26.5c2.6-9,3.9-22.8,3.9-41.4H2467.9z" />
          <polygon points="2620.3,134 2637.7,134 2637.7,112.9 2626.8,112.9 2637.7,80.6 2637.7,22.8 2590.6,22.8 2590.6,63.5      2604.3,63.5 2572.4,152 2559.5,152 2559.5,192.6 2626.8,192.6 2626.8,155.4 2612.8,155.4    " />
          <polygon points="2731.5,152 2699,63.5 2712.7,63.5 2712.7,22.8 2647.7,22.8 2647.7,82.2 2657.2,112.9 2647.7,112.9      2647.7,134 2663.7,134 2670.2,155.4 2655.3,155.4 2655.3,192.6 2743.9,192.6 2743.9,152    " />
          <polygon points="2809.9,58.3 2810.1,58.9 2810.1,22.8 2757.1,22.8 2757.1,63.5 2770.6,63.5 2770.6,152 2757.5,152      2757.5,192.6 2823.3,192.6 2823.3,152 2809.9,152    " />
          <polygon points="2910.2,22.8 2884.6,88.4 2859.5,22.8 2820.1,22.8 2820.1,85.3 2860.6,192.6 2886,192.6 2927.4,83.3      2927.4,22.8    " />
          <path d="M2998.7,152V63.5h13.3V22.8h-74.6v93.8c0,0.4,0,0.8-0.1,1.1V152h-13.5v40.6h88.6V152H2998.7z" />
          <polygon points="3122.7,22.8 3122.7,63.5 3151.4,63.5 3151.4,77.1 3196,77.1 3196,22.8    " />
          <polygon points="3034,152 3034,192.6 3112.7,192.6 3112.7,22.8 3033.7,22.8 3033.7,63.5 3047.2,63.5 3047.2,152         " />
          <rect x="3122.7" y="89.6" width="23.7" height="34.5" />
          <polygon points="3151.4,152 3122.7,152 3122.7,192.6 3196,192.6 3196,138.3 3151.4,138.3    " />
          <path d="M3284.4,51.3c0.8-0.1,1.5-0.1,2.4-0.1c11.8,0,20,6.7,24.7,20h38V22.8H3311v10.5     c-7.6-6.2-16.5-10.2-26.6-11.8V51.3z" />
          <path d="M3289.1,160.2c-1.1,0.2-2.3,0.2-3.6,0.2c-12.6,0-21.2-7.4-25.8-22.2h-38.2v54.4h38.2v-11.1     c9,6.6,18.8,10.7,29.4,12.4V160.2z" />
          <path d="M3349.5,117.8c-2-3.6-4.4-7.1-7.4-10.4c-3-3.4-5.9-6-8.7-7.9c-5.6-3.8-16.8-9.9-33.4-18.2     c-12.5-6.1-19.8-10-22.1-11.8c-2.4-1.7-3.5-4.3-3.5-7.7c0-0.5,0-1,0.1-1.5V20.6c-0.4,0-0.9,0-1.3,0c-14.9,0-27.4,4.4-37.6,13.3     c-10.3,8.9-15.4,21.2-15.4,37c0,8.8,2.2,16.8,6.5,24c4.3,7.3,9.5,13.1,15.6,17.2c6.5,4.6,16.7,10,30.5,16.2     c11,4.9,18.2,8.7,21.6,11.5c3.2,2.5,4.8,5.7,4.8,9.5c0,0.4,0,0.7,0,1.1v44.3c0.4,0,0.8,0,1.3,0c16.1,0,29.5-5,40-15     c10.6-9.8,15.9-21.9,15.9-36.1C3356.3,134.4,3354,125.8,3349.5,117.8z" />
        </g>
      </g>
    </svg>
  );
};

Logo.propTypes = {
  spinLogo: PropTypes.bool,
};

Logo.defaultProps = {
  spinLogo: false,
};

export default Logo;
