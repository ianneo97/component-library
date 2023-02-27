// import { ReactNode } from "react";

// interface ButtonProps {
//     children: ReactNode;
// }

// const Table = ({ children, ...props }: ButtonProps) => (
//     <button {...props}>{children}</button>
// );

// export { Table };
// export type { ButtonProps };
import { Table as AntdTable } from "antd";

const Table = () => {
    return <AntdTable dataSource={[]} columns={[]} />;
};

export { Table };
