"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const user = localStorage.getItem("currentUser");
      if (!user) {
        router.replace("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };

  AuthenticatedComponent.displayName = `WithAuth(${Component.displayName || Component.name || "Component"})`;

  return AuthenticatedComponent;
};

export default withAuth;
