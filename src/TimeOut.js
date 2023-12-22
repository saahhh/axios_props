import React, { useState, useEffect } from "react";

const TimeOut = () => {
  const [msg, setMsg] = useState([]);
  //promise 타임 아웃을 설정하는 함수

  useEffect(() => {
    // ms : 몇 초만큼 지연시킬지 초 값을 설정해주기위해 ms라는 이름을 지어줌
    // ms : milliseconds
    // Promise는 ms로 주어진 시간이 지난 후 실행할 코드를 작성
    // fulfilled(이행)을 하기 위해서 resolve라는 변수명을 작성
    const delay = (ms) => {
      //Promist는 사용할 때 새로운 객체를 생성해서 사용하기 때문에 new를 붙여서 사용
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    //비동기 작업 진행 후 타임아웃 설정
    //async : 자바스크립트에서 비동기 작업을 다루는데 사용되는 키워드
    //함수 앞에 async를 선언하면 해당 함수는 암묵적으로 추후에 Promise를 반환할 것이라 설정
    const waitTimeout = async () => {
      try {
        //비동기 작업 시뮬레이션
        await delay(2000);
        setMsg("시간이 지났습니다.");
      } catch (err) {
        console.log("에러발생", err);
      }
    };
    waitTimeout();
  }, []);
  return <div>{msg ? <p>{msg}</p> : <p>2초 대기하는 중</p>}</div>;
};

export default TimeOut;
