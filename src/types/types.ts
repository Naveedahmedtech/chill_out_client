import React from "react";
import { FieldHookConfig } from "formik";

export interface IClassNameProps {
  className?: string;
}

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface ICommonHeaderProps extends IClassNameProps, IChildrenProps {
  image: string;
  primaryHeading: React.ReactNode;
  secondaryHeading: string;
  paragraph?: string;
  type?: "sign-in" | "sign-up";
  additionBody?: React.ReactNode;
}

export interface ITextProps extends IClassNameProps, IChildrenProps {}

export interface IIconLink extends IClassNameProps {
  url: string;
  Icon: React.ComponentType<{ className?: string }>; // Adjust the type of Icon prop
  text: string;
}

// Define IInputFieldPropsBase for the custom properties you want to add
export interface IInputFieldPropsBase {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Use type intersection to combine IInputFieldPropsBase with FieldHookConfig<string>
export type IInputFieldProps = IInputFieldPropsBase & FieldHookConfig<string>;
