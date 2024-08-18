import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import { JSX } from "react/jsx-runtime";

export const SkeletonProduct = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps,
) => (
  <ContentLoader
    speed={2}
    width={1350}
    height={144}
    viewBox="80 79 1440 155"
    backgroundColor="#e6e6e6"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="83" y="72" rx="0" ry="0" width="1360" height="264" />
  </ContentLoader>
);
