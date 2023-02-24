import { useEffect, useState } from "react";

import { type AppType } from "next/app";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      setLoggedIn(true);
    } else {
      router.push("/login");
    }
  }, []);

  return (
    (loggedIn || router.pathname === "/login") && (
      <Component {...pageProps} setLoggedIn={setLoggedIn} />
    )
  );
};

export default api.withTRPC(MyApp);
