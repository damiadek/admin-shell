import { Row } from "antd";
import React from "react";
import Language from "../../utils/language/en";
import { Loader } from "../Loader";

const { SuspenseFallback: PageDictionary } = Language;

export const SuspenseFallback = () => (
  <Row
    style={{
      padding: 20,
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}
  >
    <Loader />
    {PageDictionary.fallbackText}
  </Row>
);
