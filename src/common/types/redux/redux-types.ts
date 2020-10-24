import {
	EmptyLoggedInUserDataModel,
	LoggedInUserStoreModel,
} from "../../../modules/auth/types/session-model";
import { SidebarReduxModel } from "../../components/Layout/Admin/Sidebar/types";

export class ReduxActionModel {
	type: string = "";
	payload: any = {};
}

export type ReduxStoreModel = {
	user: LoggedInUserStoreModel | EmptyLoggedInUserDataModel;
	sidebar: SidebarReduxModel;
};
