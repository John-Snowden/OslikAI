import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
import {Themes} from '../../Theme';

interface IProps {
  size: number;
}

export const CompileRoute: React.FC<IProps> = ({size}) => {
  return (
    <Svg fill={Themes.white} height={size} width={size} viewBox="0 0 396 396">
      <G>
        <Path
          d="M350.31,148.038c8.462-24.927,8.463-35.665,8.463-41.521C358.773,47.783,310.99,0,252.258,0
     c-58.732,0-106.514,47.783-106.514,106.518c0,5.305,0,14.024,5.681,32.861l-13.159,5.033l-76.53-39.509
     c-2.451-1.264-5.203-1.932-7.961-1.932c-3.187,0-6.309,0.875-9.032,2.531c-5.135,3.131-8.325,8.812-8.325,14.824v215.245
     c0,6.522,3.6,12.433,9.396,15.424l83.432,43.068c4.339,2.242,9.597,2.536,14.165,0.792l105.737-40.445l85.743,39.962
     c2.314,1.079,4.781,1.627,7.335,1.627c3.316,0,6.543-0.941,9.33-2.721c5.026-3.205,8.027-8.677,8.027-14.637V163.4
     C359.582,156.959,355.971,151.02,350.31,148.038z M298.043,203.691c-16.811,34.811-33.186,64.178-33.352,64.474
     c-2.482,4.455-7.191,7.223-12.293,7.223c-5.099,0-9.808-2.768-12.289-7.226c-0.164-0.294-16.605-29.781-33.354-64.471
     c-34.371-71.193-34.371-90.748-34.371-97.174c0-44.119,35.894-80.013,80.014-80.013s80.014,35.894,80.014,80.013
     C332.412,112.943,332.412,132.498,298.043,203.691z"
        />
        <Path
          d="M252.398,70.112c-23.112,0-41.916,18.803-41.916,41.915c0,23.114,18.804,41.919,41.916,41.919
     c23.111,0,41.914-18.805,41.914-41.919C294.313,88.915,275.51,70.112,252.398,70.112z"
        />
      </G>
    </Svg>
  );
};
