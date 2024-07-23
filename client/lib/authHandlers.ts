import { AuthHandlerProps } from "@/constants/types";
import axios from "axios";

export const signUpHandler = async ({
  email,
  password,
  setAuth,
  setIsOpen,
}: AuthHandlerProps) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/signup", {
      email,
      password,
    });
    setAuth({
      isAuthenticated: true,
      username: response.data.email,
      token: response.data.token,
    });
    if (setIsOpen) {
      setIsOpen(false);
    }
    localStorage.setItem("recipe_token", response.data.token);
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const logInHandler = async ({
  email,
  password,
  setAuth,
  setIsOpen,
}: AuthHandlerProps) => {
  const user_token = localStorage.getItem("recipe_token");
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
      user_token: user_token || "",
    });
    setAuth({
      isAuthenticated: true,
      username: response.data.email,
      token: response.data.token,
    });
    if (setIsOpen) {
      setIsOpen(false);
    }
    localStorage.setItem("recipe_token", response.data.token);
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const logOutHandler = () => {};
