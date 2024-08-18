import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import { JSX } from "react/jsx-runtime";

export const SkeletonCategory = (
    props: JSX.IntrinsicAttributes & IContentLoaderProps,
) => (
    <ContentLoader
        speed={2}
        width={558}
        height={50}
        viewBox="0 0 558 50"
        backgroundColor="#e6e6e6"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="56" rx="3" ry="3" width="558" height="44" />
    </ContentLoader>
);