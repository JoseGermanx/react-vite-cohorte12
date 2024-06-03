// eslint-disable-next-line react/prop-types
const CardPost = ({ id, title, body, urlImg }) => {
  return (
    <div className="card my-3">
      <h5 className="card-header">Post {id} </h5>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <img src={urlImg} alt="..." />
      </div>
    </div>
  );
};

export default CardPost;
