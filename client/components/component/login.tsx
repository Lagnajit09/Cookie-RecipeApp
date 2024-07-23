import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthPropsTypes } from "@/constants/types";
import { logInHandler } from "@/lib/authHandlers";
import { useSetRecoilState } from "recoil";
import { authState } from "@/store/authState";

const LogIn = ({ isOpen, setIsOpen }: AuthPropsTypes) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuth = useSetRecoilState(authState);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="col-span-3 border-primary"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="col-span-3 border-primary"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="ml-auto"
            onClick={() =>
              logInHandler({ email, password, setAuth, setIsOpen })
            }
          >
            Log In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogIn;
