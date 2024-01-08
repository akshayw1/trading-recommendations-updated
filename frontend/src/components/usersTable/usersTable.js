"use client";
import { useState, useEffect } from "react";
import styles from "../bitcoin/styles.module.css";
export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const verifyUser = async (email, isVerifiedUser) => {
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, isVerifiedUser }),
      });
      if (res.ok) {
        getUsers();
      }
    } catch (error) {
      console.log(error);
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
                  onChange={() => verifyUser(user.email, !user.isVerifiedUser)}
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
  );
}
