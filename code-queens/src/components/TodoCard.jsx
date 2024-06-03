
// eslint-disable-next-line react/prop-types
const TodoCard = ({title, completed}) => {
  return (
    <div className="card my-3" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className={`p-2 rounded card-subtitle mb-2 text-light ${completed ? "bg-success": "bg-danger"} completebg-success`}>{completed ? "Completo" : "Incompleto"}</h6>
  </div>
</div>
  )
}

export default TodoCard