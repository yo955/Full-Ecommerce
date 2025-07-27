// app/_components/icons/StoreLogo.jsx
const StoreLogo = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" fill="#3EABCC" />
      <path d="M3 7L5 3H19L21 7" fill="#5AE4CB" />
      <circle cx="9" cy="14" r="1.5" fill="white" />
      <circle cx="15" cy="14" r="1.5" fill="white" />
    </svg>
  );
};

export default StoreLogo;
