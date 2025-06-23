const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
