interface IHelloWorldProps {
  text: string;
  className?: string;
}
export const HelloWorld = ({ text, className = "" }: IHelloWorldProps) => {
  return <div className={className}>Hello worlds = ${text}</div>;
};
