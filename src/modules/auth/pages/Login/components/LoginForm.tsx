import { Form, Input, notification } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../../../common/components";
import { ReduxStoreModel } from "../../../../../common/types";
import Language from "../../../../../common/utils/language/en";
import { logUserIn } from "../../../actions";

const { LoginPage: PageDictionary } = Language;

interface ILoginFormProps extends FormComponentProps {
	wrappedComponentRef?: Function;
}

function LoginForm(props: ILoginFormProps) {
	const dispatch = useDispatch();
	const { getFieldDecorator } = props.form;

	const user = useSelector((store: ReduxStoreModel) => store.user);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		props.form.validateFields(
			(err: any, values: { username: string; password: string }) => {
				if (!err) {
					dispatch(logUserIn(values.username, values.password));
				}
			}
		);
	};

	React.useEffect(() => {
		if (user.error)
			notification.error({ message: user.error, duration: 10000 });
	}, [user]);

	return (
		<Form onSubmit={handleSubmit} className="login-form">
			<Form.Item style={{ marginBottom: 5, marginTop: 10 }}>
				<div className="custom-input">
					{getFieldDecorator("username", {
						rules: [{ required: true }],
					})(
						<Input
							disabled={user.loading}
							placeholder={PageDictionary.usernamePlaceHolder}
						></Input>
					)}
					<label>{PageDictionary.usernameLabel}</label>
				</div>
			</Form.Item>
			<Form.Item>
				<div className="custom-input">
					{getFieldDecorator("password", {
						rules: [{ required: true, min: 6 }],
					})(
						<Input.Password
							disabled={user.loading}
							placeholder={PageDictionary.passwordPlaceHolder}
						></Input.Password>
					)}
					<label>{PageDictionary.passwordLabel}</label>
				</div>
			</Form.Item>
			<div
				className="flex align-items-center mt-10"
				style={{ flexWrap: "wrap" }}
			>
				<CustomButton
					type="submit"
					block
					loading={user.loading}
					actionText={PageDictionary.loginButtonText}
				/>
			</div>
		</Form>
	);
}

const LoginFormWrapper = Form.create({ name: "login_form" })(LoginForm);

export default LoginFormWrapper;
