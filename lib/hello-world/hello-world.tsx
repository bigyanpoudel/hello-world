import { IHelloWorldProps } from "../types";

export const HelloWorld: React.FC<IHelloWorldProps> = ({
  text,
  className = "",
}: IHelloWorldProps) => {
  return <div className={className}>Hello worlds = {text}</div>;
};
