import { IHelloWorldProps } from "./@types/hello";
export const HelloWorld = ({ text, className = "" }: IHelloWorldProps) => {
  return <div className={className}>Hello worlds = ${text}</div>;
};
