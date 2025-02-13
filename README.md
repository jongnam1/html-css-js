# HTML

1. 컴포넌트가 시작되는 부모요소는 늘 하나다.
2. 클래스를 부모요소에게 준 다음에 시작한다.
3. 클래스를 마구잡이로 부여하지 않는다. 시맨틴 태그를 써서 해결

# CSS

1. .클래스.클래스....: 여러가지 클래스가 한꺼번에 들어간 태그를 선택

   - 응용: #아이디#아이디... : 여러가지 아이디가 한꺼번에 들어간 태그를 선택
   - 한 번 정의해둔 클래스를 다른 태그에서도 마음껏 사용할 수 있음
     - 공통된 스타일을 저장하는 용도로 사용하면 개꿀.

2. 선행 선택자 + 마지막 선택자: 마지막선택자가 내가 스타일링을 줄 태그임.
3. position:
   - relative: 부모요소로 지정, 기준이 됨
   - absolute: 자식요소로 지정, 기준을 따라감
     **주의사항**: top, left 또는 top, right 또는 bottom, left 또는 bottom right 로만 작성하면 됨.
     - content: '';
       **가상요소만드는 친구**: absolute를 섞어서 사용하면 개꿀
4. object-fit:

   - cover: 찌그러진 사진을 예쁘게 펴줌. 단점: 위치 조정은 안됨

5. 태그 + 태그 : 태그 옆의 태그를 선택할 수 잇음.
6. input에서 :checked 라고 하는 상태를 선택할 수 있음.
7. transition: 애니메이션 효과를 적용할 수 잇음
   - 예시: transition: all .5s(속도)
8. label, span: display 속성을 block으로 줘야만 눈으로 확인할 수 있음.

# JS

1. document: DOM (Document Object Model): 웹 그잡채
2. document.querySelector: 추노. CSS 작성 규칙을 따라서 잡아옴
   - 예시: const body = document.querySelector('body')
   - 예시: const btn = document.querySelector('body .btn')
     **주의** 클래스명은 많은 곳에서 사용할 수 잇기 때문에 btn은 복수가 될 수 도 있음.
3. document.createEelement: 태그를 만들어줌
   - 예시: const button = document.createElement('button')
4. 잡아온태그.onclick = 화살표 함수를 사용해서 클릭 하는 이벤트를 설정할 수 있음.
5. setInterval: 설정한 시간 단위마다 계속해서 반복적으로 실행되는 코드를 짤 수 있음
   - 예시
     const intervalId = setInterval(
     () => {
     ....실행할 코드
     }, 3000 //밀리세컨드 단위 1000 = 1초
     )
     **주의사항**: 새로고침 이외에 멈출 방법이 하나밖에 없음, intervalId를 사용해서 꺼줘야 함 - 예시: clearInterval(intervalId) // 이거 쓰면 멈춤
