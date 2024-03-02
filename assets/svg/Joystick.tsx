import React from 'react';
import {Path, Svg} from 'react-native-svg';

import {Themes} from '../../Theme';

interface IProps {
  size: number;
}

export const Joystick: React.FC<IProps> = ({size}) => {
  return (
    <Svg
      fill={Themes.lightBlue}
      width={size}
      height={size}
      viewBox="924 796 200 200">
      <Path
        d="M1123.719,924.018l0.059,0.02l-6.181-46.92c-0.128-1.528-0.327-3.035-0.597-4.517l-0.008-0.05v0.001
	c-3.99-21.845-23.107-38.409-46.107-38.409c-0.297,0-0.59,0.015-0.885,0.022c-0.053-0.002-0.102-0.022-0.153-0.022h-91.692
	c-0.053,0-0.102,0.02-0.155,0.022c-0.296-0.006-0.588-0.022-0.885-0.022c-22.999,0-42.117,16.564-46.107,38.409l-0.001-0.001
	l-0.006,0.05c-0.27,1.482-0.469,2.988-0.595,4.517l-6.183,46.92l0.06-0.02c-0.166,1.278-0.281,2.571-0.281,3.896
	c0,16.537,13.407,29.944,29.946,29.944c8.884,0,16.84-3.89,22.324-10.035l0.008,0.032c0,0,14.918-15.371,25.11-25.872
	c5.945-6.125,14.118-9.582,22.654-9.582c8.483,0,16.602,3.434,22.509,9.521c10.193,10.503,25.169,25.934,25.169,25.934l0.01-0.032
	c5.482,6.146,13.439,10.035,22.324,10.035c16.537,0,29.945-13.408,29.945-29.944C1124,926.589,1123.883,925.296,1123.719,924.018z
	 M997.156,886.363h-10.742c-1.479,0-2.677,1.199-2.677,2.677v10.744c0,3.657-2.964,6.621-6.621,6.621s-6.621-2.964-6.621-6.621
	V889.04c0-1.479-1.198-2.677-2.677-2.677h-10.743c-3.656,0-6.621-2.964-6.621-6.621s2.964-6.621,6.621-6.621h10.744
	c1.479,0,2.677-1.199,2.677-2.677v-10.742c0-3.657,2.964-6.62,6.62-6.62c3.656,0,6.621,2.963,6.621,6.62v10.742
	c0,1.479,1.199,2.677,2.677,2.677h10.742c3.656,0,6.621,2.964,6.621,6.621S1000.812,886.363,997.156,886.363z M1049.34,887.268
	c-4.156,0-7.525-3.37-7.525-7.526c0-4.156,3.369-7.525,7.525-7.525s7.525,3.37,7.525,7.525
	C1056.865,883.898,1053.496,887.268,1049.34,887.268z M1068.056,853.501c4.155,0,7.526,3.37,7.526,7.525
	c0,4.156-3.371,7.526-7.526,7.526s-7.526-3.37-7.526-7.526C1060.529,856.871,1063.9,853.501,1068.056,853.501z M1068.056,905.986
	c-4.155,0-7.526-3.37-7.526-7.525c0-4.156,3.371-7.526,7.526-7.526c4.157,0,7.526,3.37,7.526,7.526
	C1075.582,902.616,1072.213,905.986,1068.056,905.986z M1086.773,887.269c-4.158,0-7.526-3.37-7.526-7.525
	c0-4.156,3.368-7.526,7.526-7.526c4.156,0,7.525,3.37,7.525,7.526C1094.299,883.899,1090.93,887.269,1086.773,887.269z"
      />
    </Svg>
  );
};
