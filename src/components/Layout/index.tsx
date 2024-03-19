import React, { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className="flex flex-col justify-center py-2 px-4">
      <div className="mt-1">
        <div className="bg-white py-6 px-8 shadow rounded-lg">{children}</div>
      </div>
    </div>
  );
};
