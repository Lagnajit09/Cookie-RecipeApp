import { SetterOrUpdater } from "recoil";

export interface AuthPropsTypes {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export interface AuthStateType {
  username: string | null;
  isAuthenticated: boolean;
  token: string | null;
}

export interface AuthHandlerProps {
  email: string;
  password: string;
  setAuth: SetterOrUpdater<AuthStateType>;
  setIsOpen?: (open: boolean) => void;
}
