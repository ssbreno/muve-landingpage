import React from 'react';

interface Props {
  style?: React.CSSProperties;
}

const BlueArrow: React.FC<Props> = ({ style }) => {
  return (
    <svg
      style={style}
      width="46"
      height="41"
      viewBox="0 0 46 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6331 39.4238L45.7258 2.85129C46.533 1.44174 45.3299 -0.255783 43.746 0.0321882L23.3386 3.77583C23.1102 3.8213 22.8817 3.8213 22.6533 3.77583L2.24593 0.0321846C0.646847 -0.255787 -0.556302 1.44173 0.266086 2.85128L21.3588 39.4238C22.0898 40.6969 23.9173 40.6969 24.6484 39.4238L24.6331 39.4238Z"
        fill="#0550FC"
      />
    </svg>
  );
};

export default BlueArrow;