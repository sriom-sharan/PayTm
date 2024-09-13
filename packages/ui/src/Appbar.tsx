import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between bg-white border-b py-2 px-4">
      <div className="text-lg flex justify-center items-center text-[#6a51a6] font-bold">
        Pay<span className="text-black">TM</span>
      </div>

      <div className="flex items-center gap-4 justify-center ">
        <p className="p-1.5 px-3 rounded-full bg-red-300">
          {user?.name?.charAt(0).toUpperCase()}
        </p>
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
