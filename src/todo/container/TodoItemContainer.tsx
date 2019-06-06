import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { TodoItem } from "../component/TodoItem";
import { remove } from "../state/actions";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      removeToDo: remove
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
