"use client";

import {
  ErrorBoundaries,
  getLocalStorage,
  setLocalStorage,
} from "@app/helpers";
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { get_teacher_me } from "../../services";

export type ProfileProps = {
  // types...
};

const Profile = ({}: ProfileProps) => {
  const { callEndpoint } = useFetchAndLoad();
  const [me, setMe] = useState(getLocalStorage({ key: "user" }));

  useEffect(() => {
    async function getMe() {
      const { data } = await callEndpoint(get_teacher_me());
      if (data) {
        setLocalStorage({ key: "user", value: data });
        setMe(data);
      }
    }
    getMe();
    return () => {
      setMe(null);
    };
  }, []);
  return (
    <ErrorBoundaries fallBackComponent={<p>Upps</p>} resetCondition={me}>
      <div>{me}</div>
    </ErrorBoundaries>
  );
};

export default Profile;
