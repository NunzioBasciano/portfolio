import React from "react";
import classNames from "classnames";

interface IMainLayoutProps {
  children: React.ReactNode;
  layout?: string;
}

function MainLayout(props: IMainLayoutProps) {
  const { children, layout } = props;
  return (
    <div
      className={classNames(
        "grid grid-cols-1 md:grid-cols-2 custom-grid-rows py-3 gap-3",
        layout
      )}
    >
      {" "}
      {children}
    </div>
  );
}

export default MainLayout;
