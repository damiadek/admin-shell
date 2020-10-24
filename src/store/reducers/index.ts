import { combineReducers } from "redux";
import sessionReducer from "../../modules/auth/reducer";
import sidebarReducer from "../../common/components/Layout/Admin/Sidebar/reducer";

export default combineReducers({
	user: sessionReducer,
	sidebar: sidebarReducer,
});
