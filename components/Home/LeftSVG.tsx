type LeftSVGProps = {
  left: React.MouseEventHandler<HTMLDivElement>;
};

export const LeftSVG = ({ left }: LeftSVGProps) => {
  return (
    <div className="w-20 p-4 m-4 cursor-pointer" onClick={left}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30.725"
        height="30.725"
        enableBackground="new 0 0 30.725 30.725"
        fill="white"
      >
        <path d="M24.078 26.457a2.5 2.5 0 01-1.77 4.267 2.497 2.497 0 01-1.768-.731L5.914 15.362 20.543.732a2.499 2.499 0 113.535 3.536L12.984 15.362l11.094 11.095z"></path>
      </svg>
    </div>
  );
};
