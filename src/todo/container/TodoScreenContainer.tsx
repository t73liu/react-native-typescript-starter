import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import TodoScreen from "../component/TodoScreen";
import { add } from "../state/actions";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addToDo: add
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(TodoScreen);
