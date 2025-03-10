import "react-loading-skeleton/dist/skeleton.css";
import { Shimmer } from "zebpay-ui";
import { SizeType } from "zebpay-ui/dist/cjs/components/Shimmer/typings";
import { Theme } from "zebpay-ui/dist/cjs/globalTypings";
import { SerializedStyles } from "@emotion/react";
import React from "react";

interface ShimmerWrapperProps {
  children;
  height: number;
  width: number;
  style?: SerializedStyles;
  mode?: Theme;
  typeLightdDark?: boolean;
  isLoading: boolean;
  widthSizeType?: SizeType;
  heightSizeType?: SizeType;
}

const ShimmerWrapper: React.FC<ShimmerWrapperProps> = ({
  children,
  isLoading,
  height,
  width,
  mode = "dark",
  style,
  typeLightdDark,
  widthSizeType = "px",
  heightSizeType = "px"
}) => {
  return (
    <>
      {isLoading ? (
        <Shimmer
          mode={mode}
          height={height}
          width={width}
          typeLightdDark={typeLightdDark}
          style={style}
          widthSizeType={widthSizeType}
          heightSizeType={heightSizeType}
        />
      ) : (
        children
      )}
    </>
  );
};

export default ShimmerWrapper;