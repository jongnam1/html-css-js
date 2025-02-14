# 회원가입 양식 만들기

1. form,div, label, input, button 태그 사용하여서 회원가입 양식 뼈대 만들기

   - 영어로 된 아이디가 있어야 합니다.
   - 비밀번호 있어야 합니다.
   - 새로운 비밀번호가 있어야 합니다.
   - 생년월일 //YYYYMMDD
   - 회원가입 / 취소 버튼 만들기

2. styling 하기
   알아서 예쁘게 만들기

3. 자바스크립트로 양식 다루기

- 변수로 잡아와야 할 친구들

1. form
   2.userid
2. password
3. confirmPassword
4. 생년월일

-form + addEventListner 이벤트는 submit 1. 새로고침 방지 필수
2-1. userid 입력했는지 검사
2-2. \*userid input창 포커스
3-1. password 입력했는지 검사
3-2. * password input창 포커스
4-1. confirmPassword 가 password랑 같은지 검사
4-2. *confirmPassword input 창 포커스 5. 생년월일 6자리인지 대충 검사

6. 다 입력되면 회원가입을 축하해주기
7. 취소하면 좀만 더하라고 응원해주기
