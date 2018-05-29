import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TodoItem } from "../component/TodoItem";
import { remove } from "../state/actions";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      removeToDo: remove
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(TodoItem);
