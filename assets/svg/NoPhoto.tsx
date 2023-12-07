import React from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {Themes} from '../../Theme';

export const NoPhoto = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={Themes.white}
        stroke="none">
        <Path
          d="M4575 4786 c-16 -8 -203 -188 -415 -400 l-385 -386 -55 0 -55 0 -29
90 c-68 213 -255 416 -454 490 -143 54 -141 54 -577 58 -286 2 -433 0 -485 -8
-314 -50 -571 -280 -652 -586 l-12 -42 -235 -5 c-245 -4 -273 -8 -403 -57 -78
-29 -194 -106 -263 -175 -69 -69 -146 -185 -175 -263 -58 -154 -55 -81 -55
-1267 0 -1024 1 -1094 18 -1155 25 -88 76 -192 132 -269 l47 -63 -95 -97 c-75
-76 -97 -104 -102 -134 -11 -60 3 -107 44 -148 41 -41 88 -55 148 -44 34 6
259 228 2151 2118 1554 1554 2115 2121 2123 2146 22 67 -2 139 -63 184 -34 25
-113 32 -153 13z m-1770 -1455 c44 -11 113 -32 153 -47 l74 -27 -124 -123
-123 -123 -85 15 c-100 18 -253 13 -345 -12 -272 -73 -495 -298 -571 -575 -22
-81 -25 -289 -5 -368 l14 -53 -125 -125 -125 -125 -27 74 c-91 244 -98 505
-21 741 129 396 475 694 885 762 114 19 318 12 425 -14z"
        />
        <Path
          d="M4003 3328 l-493 -493 44 -85 c200 -386 157 -849 -112 -1196 -329
-425 -915 -555 -1392 -308 l-85 44 -405 -405 -405 -405 1490 2 c1358 3 1495 5
1545 20 109 33 170 60 243 108 174 113 285 269 345 485 15 54 17 163 17 1145
0 982 -2 1091 -17 1145 -44 159 -103 264 -208 371 -35 35 -66 64 -69 64 -3 0
-228 -222 -498 -492z"
        />
        <Path
          d="M2735 2060 c-333 -333 -526 -533 -520 -539 6 -5 42 -20 80 -34 232
-83 492 -52 698 83 313 204 444 592 318 939 -15 41 -31 76 -37 78 -5 2 -247
-235 -539 -527z"
        />
      </G>
    </Svg>
  );
};