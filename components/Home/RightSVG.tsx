type RightSVGProps = {
  right: React.MouseEventHandler<HTMLDivElement>;
};

export const RightSVG = ({ right }: RightSVGProps) => {
  return (
    <div
      className="absolute right-0 w-20 h-20 p-4 m-4 cursor-pointer top-56"
      onClick={right}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30.729"
        height="30.729"
        enableBackground="new 0 0 30.729 30.729"
        fill="white"
      >
        <path d="M24.813 15.366L10.185 29.997a2.494 2.494 0 01-1.768.731 2.5 2.5 0 01-1.769-4.267l11.095-11.096L6.649 4.268A2.501 2.501 0 0110.185.732l14.628 14.634z"></path>
      </svg>
    </div>
  );
};
