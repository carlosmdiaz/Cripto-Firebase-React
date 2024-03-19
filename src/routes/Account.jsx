import React from "react";
import SavedCoins from "../components/SavedCoins";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  if (user == null) {
    return navigate("/signin");
  } else {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>{`Welcome, ${user?.email}`}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Watch List</h1>
            {user ? (
              <SavedCoins />
            ) : (
              <p>
                You don't have any coins saved. Please save a coin to add it to
                your watch list.{" "}
                <Link className="text-accent" to="/">
                  Click here to search coins.
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
