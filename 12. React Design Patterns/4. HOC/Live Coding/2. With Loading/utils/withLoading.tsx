import React from "react";

interface WithLoadingProps {
  isLoading: boolean;
  [key: string]: any;
}

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithLoading({ isLoading, ...props }: WithLoadingProps & P) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withLoading;
