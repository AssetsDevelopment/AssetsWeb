import { ComponentType } from "react";
import { HomeLayout } from "../layout/HomeLayout";

// TODO: tipado

export const RouteWrapper = ({ component: Component }: { component: ComponentType }) => {
  return (
    <HomeLayout>
      <Component />
    </HomeLayout>
  );
};
