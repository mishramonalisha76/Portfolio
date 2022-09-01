export type ColorType = {
  color?: string;
};

export type HWType = {
  width?:number;
  height?:number;
};
export type ButtonProps = {
  text: string;
  link: string;
  fontSize?: number;
} &HWType;

export type ButtonPropsStyle = Omit<ButtonProps, "text" | "link">;



export type TextType = {
  fontSize?:number;
  fontWeight?:number;
  fontFamily?:string;
} & ColorType;



