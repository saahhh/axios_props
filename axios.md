javascript나 react에서 http요청을 수행하기 위한 라이브러리

주로 웹서버와 통신, API호출, 데이터 가져오기 작업에 사용한다

사용법
    npm install axios
    yarn install axios


 //Axios를 활용해서 API에 GET을 요청
        axios.get('https://jsonplaceholder.typicode.com/todos')
        //만약 데이터를 가져오는데 성공할 경우의 데이터 처리

        axios.get 으로 데이터를 가져오는데 성공한다면 then을 사용해서 응답받을 데이터를 처리한다
        응답받을 때는 response로 서버에서 받은 응답을 표시한다
        response가 실제로 요청에 관한 정보와 서버에서 실제로 반환된 데이터를 보여준다
        response를 활용해서 전달받은 데이터를 업데이트해서 화면에 보여주기 위해 setData를 활용한 것이다
            .then(response => {
                setData(response.data);
            })

        //만약 데이터를 가져오는데 실패할 경우의 데이터 처리

        데이터를 가져오는데 실패하면 catch문을 활용해서 에러를 표시해준다
        에러를 표기할 때는 console.log를 활용해서 개발자들 간에 보여질 수 있도록 표기를 해주고
        에러는 변수명일 뿐, error가 아닌 err, aaa 와 같은 변수명으로 받고 싶다면 변수명을 변경해서 표기해도 좋다
            .catch(error => { ("", error)});
    }, []); //userEffect에서 함수가 한 번만 실행될 수 있도록 빈 배열을 생성해둠
