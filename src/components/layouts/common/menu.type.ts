import { ReactNode } from "react";

type MenuItem = {
  /** menu item code */
  code: string;
  label: string;
  icon?: ReactNode;
  path: string;
  children?: MenuItem[];
}

export type MenuChild = Omit<MenuItem, 'children'>;

export type MenuList = MenuItem[];
