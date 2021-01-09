import React from 'react';

export interface HayatInfoProps {}

const HayatInfo: React.FC<HayatInfoProps> = ({}) => {
  return (
    <>
      <div className="hayatblock">
        <span className="hayatblock__name">ХАЙАТ ЕСТЕЙТ -</span> ВСЕУКРАЇНСЬКИЙ
        ПОСТАЧАЛЬНИК ЕЛЕКТРОЕНЕРГІЇ
      </div>
      <svg
        className="lamp"
        viewBox="0 0 117 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8745 153.813C31.8778 155.943 32.495 158.028 33.653 159.802L39.3238 168.499C40.2925 169.986 41.6064 171.205 43.1487 172.049C44.6909 172.892 46.4136 173.333 48.1634 173.333H68.6399C70.3897 173.333 72.1124 172.892 73.6546 172.049C75.1969 171.205 76.5108 169.986 77.4795 168.499L83.1503 159.802C84.3079 158.028 84.9265 155.945 84.9289 153.813L84.9421 140.831H31.8579L31.8745 153.813ZM0 59.5824C0 74.6031 5.45841 88.307 14.454 98.7779C19.9356 105.159 28.5098 118.491 31.7782 129.737C31.7915 129.825 31.8015 129.913 31.8147 130.001H84.9853C84.9985 129.913 85.0085 129.828 85.0218 129.737C88.2902 118.491 96.8644 105.159 102.346 98.7779C111.342 88.307 116.8 74.6031 116.8 59.5824C116.8 26.6125 90.5565 -0.101272 58.2175 0.000288627C24.3687 0.105234 0 28.0885 0 59.5824ZM58.4 32.4996C43.7635 32.4996 31.8545 44.6496 31.8545 59.5824C31.8545 62.575 29.4787 64.9989 26.5455 64.9989C23.6122 64.9989 21.2364 62.575 21.2364 59.5824C21.2364 38.6745 37.9069 21.6665 58.4 21.6665C61.3333 21.6665 63.7091 24.0904 63.7091 27.083C63.7091 30.0757 61.3333 32.4996 58.4 32.4996Z"
          fill-opacity="0.7"
        />
      </svg>
    </>
  );
};

export default HayatInfo;