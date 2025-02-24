import "react-loading-skeleton/dist/skeleton.css";

import { PropsWithChildren } from "react";
import Skeleton from "react-loading-skeleton";

import { colors, utils } from "zebpay-ui";

interface SkeletonWrapperProps {
  circle?: boolean;
  count?: number;
  isLoading: boolean;
  inline?: boolean;
  height?: number;
  width?: number;
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
  baseColor?: string;
  highlightColor?: string;
  mode?: "light" | "dark";
  borderRadius?: number;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  children,
  circle,
  count,
  inline,
  isLoading,
  height,
  width,
  wrapper,
  baseColor,
  highlightColor,
  mode = "dark",
  borderRadius
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          circle={circle}
          count={count}
          wrapper={wrapper}
          baseColor={
            baseColor ?? mode === "dark"
              ? colors.Zeb_Solid_Dark_Grey
              : colors.Zeb_BG_Light_Blue
          }
          highlightColor={
            highlightColor ?? mode === "light"
              ? colors.Zeb_BG_Green
              : "rgba(255, 255, 255, 0.5)"
          }
          inline={inline}
          height={height && utils.remConverter(height)}
          width={width ? utils.remConverter(width) : "100%"}
          borderRadius={borderRadius}
        />
      ) : (
        children
      )}
    </>
  );
};

export default SkeletonWrapper;
