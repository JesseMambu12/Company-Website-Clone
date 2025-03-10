"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";

type User = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
};

export default function Teams() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=6");
      setUsers(response.data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header />
      <main className="p-6 flex-grow bg-white text-gray-900">
        <div className="text-center py-20 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Meet Our Dream Team</h1>
        </div>
        <div className="p-6 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <Image
                  src={user.picture.large}
                  alt={user.name.first}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-center">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="text-center text-gray-600">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
