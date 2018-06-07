import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { LogScreen } from "../component/LogScreen";
import { clear } from "../state/actions";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      clearLogs: clear
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(LogScreen);
