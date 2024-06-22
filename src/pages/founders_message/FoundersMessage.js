import React, { useEffect } from "react";
import Message from "../../component/message/Message";
import { Helmet } from "react-helmet";

const FoundersMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Chairman's message</title>
      </Helmet>
      <div>
        <Message />
      </div>
    </>
  );
};

export default FoundersMessage;
