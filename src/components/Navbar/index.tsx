import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { logout } from "features";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const user = useAppSelector((state) => state?.userData?.user);
  const dispatch = useAppDispatch();

  const handleLogOut = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center sm:items-stretch justify-between">
            <div className="flex-shrink-0 flex items-center text-white font-bold">
              <Link
                to="/"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Practical
              </Link>
            </div>
            {user && (
              <div>
                <div className="flex space-x-4">
                  <Link
                    to="/profile"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>

                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => handleLogOut()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
