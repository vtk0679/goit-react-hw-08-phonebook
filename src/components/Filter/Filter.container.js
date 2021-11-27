import { connect } from "react-redux";

import { actions } from "redux/contacts";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    return dispatch(actions.changeFilter(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
