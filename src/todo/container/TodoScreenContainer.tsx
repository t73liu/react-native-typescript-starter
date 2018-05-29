import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import TodoScreen from "../component/TodoScreen";
import { add } from "../state/actions";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addToDo: add
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(TodoScreen);
