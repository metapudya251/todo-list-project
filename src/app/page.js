"use client";

import { TodoProvider } from "@/components/Todo/TodoContext";
import TodoForm from "@/components/Todo/TodoForm";
import TodoList from "@/components/Todo/TodoList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      router.push("/login");
    } else {
      setUsername(currentUser);
    }
  }, [router]);

  if (!username) {
    return null;
  }

  return (
    <TodoProvider username={username}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Todo List for {username}</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
