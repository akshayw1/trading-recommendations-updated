"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../bitcoin/styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoadingToast = () => (
  <div className="loading-toast">
    <div className="loading-circle"></div>
    <div>Verifying user...</div>
  </div>
);

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const verifyUser = async (email, isVerifiedUser) => {
    let toastId;
    try {
      toastId = toast(<LoadingToast />, { autoClose: false });
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, isVerifiedUser }),
      });

      if (res.ok) {
        getUsers();
        toast.update(toastId, {
          render: "User update successfully",
          type: "success",
          autoClose: 5000,
        });
      } else {
        toast.update(toastId, {
          render: res.error,
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: error,
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });
    }
  };

  const getUsers = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ToastContainer />
      <main className={styles.main}>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>isVerifiedUser</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>
                  <input
                    onChange={() =>
                      verifyUser(user.email, !user.isVerifiedUser)
                    }
                    style={{ display: "block" }}
                    type="checkbox"
                    disabled={user.admin}
                    defaultChecked={user.isVerifiedUser}
                  />
                </td>
                <td>{user.admin ? "admin" : "user"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
