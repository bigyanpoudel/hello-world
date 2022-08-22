import React from "react";
import { IHelloWorldProps } from "../../@types";

export const HelloWorld = ({ text, className = "" }: IHelloWorldProps) => {
  return <div className={className}>Hello worlds = {text}</div>;
};
