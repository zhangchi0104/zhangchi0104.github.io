import React from "react";
import { MutuallyExclude } from "@/utils";
interface TypographyCommmonProps {
  className?: string;
}

type TypographyTypes = MutuallyExclude<{
  heading: boolean;
  subheading: boolean;
  body: boolean;
  title: boolean;
  label: boolean;
}>;

type TypographyProps = React.PropsWithChildren<
  TypographyTypes & TypographyCommmonProps
>;

const type2FontSizes = {
  title: "text-xl"
};
