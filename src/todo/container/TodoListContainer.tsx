import { connect } from "react-redux";
import { IRootState } from "../../store";
import { TodoList } from "../component/TodoList";

const mapStateToProps = (state: IRootState) => ({
  toDoList: state.todo
});

export default connect(mapStateToProps)(TodoList);
