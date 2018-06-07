import { connect } from "react-redux";
import { IRootState } from "../../store";
import { LogList } from "../component/LogList";

const mapStateToProps = (state: IRootState) => ({
  logList: state.logs
});

export default connect(mapStateToProps)(LogList);
