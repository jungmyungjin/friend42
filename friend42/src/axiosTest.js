import React, { useState, useEffect } from "react";
import axios from "axios";

function DataTest() {
  const [data, setData] = useState(null);
  // const [users, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("any body here..?");
  const fetchData = async () => {
    console.log("hello");
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      // setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      // setLoading(true);
      const response = await axios.get("http://localhost:3000");
      setData(JSON.stringify(response)); // 데이터는 response.data 안에 들어있습니다.
      console.log(response);
    } catch (e) {
      // console("it's error");
      setError(e);
    }
    // setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;

  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  // if (!users) return null;

  // 드디어 users가 성공적으로 받아와 진 상태입니다.
  return (
    <>
      <div>this is axios</div>
      <br />"good"
    </>
  );
}

export default DataTest;
