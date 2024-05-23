// eslint-disable-next-line react/prop-types
const Button = ({ texto }) => {
  return (
    <div>
      <button type="button" className="btn btn-info">
        {texto}
      </button>
    </div>
  );
};

export default Button;
