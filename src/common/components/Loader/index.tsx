import { Spin, Icon } from "antd";
import * as React from "react";

interface IAppProps {}

const antIcon = (
  <Icon
    type="loading-3-quarters"
    style={{ fontSize: 30, color: "#888", marginBottom: 10 }}
    spin
  />
);

export function Loader(props: IAppProps) {
  return <Spin indicator={antIcon} />;
}
