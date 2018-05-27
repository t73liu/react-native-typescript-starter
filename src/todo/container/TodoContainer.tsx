import { connect, Dispatch } from "react-redux";
import { Action, AnyAction, bindActionCreators } from "redux";
import { IRootState } from "../../store";
import TodoScreen from "../component/TodoScreen";
import { add } from "../state/actions";

const mapStateToProps = (state: IRootState) => ({
  todos: state.todo
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addTodo: add
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
