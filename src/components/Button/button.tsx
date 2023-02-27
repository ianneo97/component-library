import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
    <button {...props}>{children}</button>
);

export { Button };
export type { ButtonProps };
