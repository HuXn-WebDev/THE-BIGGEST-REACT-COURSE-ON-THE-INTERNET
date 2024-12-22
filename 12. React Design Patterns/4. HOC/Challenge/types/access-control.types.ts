import React from "react";

export interface AccessControlProps {
  roles: string[];
  fallbackComponent: React.ComponentType;
  injectedProps?: { [key: string]: any };
}

export interface InjectedProps {
  userName?: string;
  userPermissions?: string[];
}

export interface WrappedComponentProps extends InjectedProps {
  message: string;
}
