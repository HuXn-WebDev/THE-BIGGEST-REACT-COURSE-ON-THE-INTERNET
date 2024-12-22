import React, { useEffect, useState, ReactNode } from "react";

interface DataSourceProps {
  getDataFunc?: () => void;
  resourceName: string;
  children: ReactNode;
}

const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}: DataSourceProps) => {
  const [state, setState] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFunc();
        setState(data);
      } catch (err) {
        setError("Failed to fetch data.");
      }
    })();
  }, [getDataFunc]);

  return (
    <>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              [resourceName]: state,
            });
          }
          return child;
        })
      )}
    </>
  );
};

export default DataSource;
