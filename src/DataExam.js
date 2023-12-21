import React, { useEffect, useState } from "react";
import axios from 'axios';

const DataExam = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        //Axios를 활용해서 API에 GET을 요청
        axios.get('https://jsonplaceholder.typicode.com/todos')
            //만약 데이터를 가져오는데 성공할 경우의 데이터 처리
            .then(response => {
                setData(response.data);
            })

            //만약 데이터를 가져오는데 실패할 경우의 데이터 처리
            .catch(error => {
                console.log('일치하는 데이터가 없습니다.', error)
            });
    }, []); //userEffect에서 함수가 한 번만 실행될 수 있도록 빈 배열을 생성해둠
    return (
        <>
            {data ?(
                <ul>
                    {data.map(item => ( 
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            )  :    (
                <p>데이터가 없습니다.</p>)  
            }
        </>
    )
}

export default DataExam;




{/*
//삼항연산자
{data.map(item => ( (<p>Data : {data}</p>) : (<p>데이터가 없습니다.</p>)} */}