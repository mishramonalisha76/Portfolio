export type ButtonProps = {
  text: string;
  link: string;
  fontSize?: number;
  width?: number;
  height?: number;
};

export type ButtonPropsStyle = Omit<ButtonProps, "text" | "link">;

export type ColorType = {
  color: string;
};

export type TextType = {
  fontSize?:number;
  fontWeight?:number;
  fontFamily?:string;
} & ColorType;



