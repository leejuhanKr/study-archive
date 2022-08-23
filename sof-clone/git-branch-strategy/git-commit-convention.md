# git branch strategy & commit convention
----
## git branch strategy

### Coz’ Git flow

- `production branch`: release되는 브랜치, 항상 bug free 상태 유지해야 합니다.  
- `dev branch`: 개발 단계의 브랜치, 이 브랜치에서 feat브랜치를 파생시켜 각자 개발을 진행합니다.  
- `feat branch`: 실제 새로운 기능을 구현하는 브랜치, `dev` 브랜치로 부터 feat 브랜치를 생성, `dev` branch로 merge하고 나면 삭제 합니다. merge는 항상 pull request를 통해 진행합니다.  

~~솔직히 이 밑에 부분 맞는지 모르겠습니다..~~
~~레포 하나 파서 확인해 봐야 될듯~~
1. 원본 repository(codestates-seb/seb39_pre_041)에서 내 github 계정으로 fork
2. 내 github 계정의 원격 repo를 로컬로 clone
3. dev 브랜치에서 새로운 기능 구현을 위한 feat 브랜치 생성
4. feat 브랜치에서 기능 개발이 완료되면 원본 레포지토리로 pull request
5. 월요일 정기 회의에서 최종 test를 거쳐 dev -> production으로 release

참고자료: 
- [코드스테이츠 Pre-Project unit2 chapter2-2]
- [깃허브 오픈소스 프로젝트에 참여하기](https://cselabnotes.com/kr/2021/03/26/46/)
----
## commit convention
- `feat`: 새로운 기능에 대한 커밋
- `fix`: 버그 수정에 대한 커밋
- `build`: 빌드 관련 파일 수정에 대한 커밋(빌드 업무 패키지 매니저)
- `ci`: CI 관련 설정 수정에 대한 커밋
- `docs`: 문서 수정에 대한 커밋
- `refactor`: 코드 리팩토링에 대한 커밋
- `style`: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우의 커밋
- `chore`: 그 외, 자잘한 수정에 대한 커밋
- ~~`test`: 테스트 추가, 테스트 리팩토링~~

커밋 예시
```bash
git commit -m "feat: github 소셜 로그인 기능 추가(#123)
Oauth 인증 방식으로 사용자의 로그인 정보를 받아올 수 있도록 기능을 추가함
해결: close(#123)
"
```
커밋 메시지의 subject, body, footer는 위와 같은 형식을 갖습니다. (#123은 해당 issue 번호를 의미합니다.)

로컬 레포지토리에서 작업할 경우, 위 컨벤션을 꼭 지킬 필요는 없으나, **dev branch로 pull request할 경우에는 꼭 지키셔야 합니다.**

참고자료:
- [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/#%ea%b7%9c%ea%b2%a9)
- [git - 커밋 메시지 컨벤션](https://doublesprogramming.tistory.com/256)
- [규칙적인 Commit 메세지로 개발팀 협업하기](https://xtring-dev.tistory.com/m/entry/Git-%EA%B7%9C%EC%B9%99%EC%A0%81%EC%9D%B8-Commit-%EB%A9%94%EC%84%B8%EC%A7%80%EB%A1%9C-%EA%B0%9C%EB%B0%9C%ED%8C%80-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0-%F0%9F%91%BE)
# 폴더 구조
*작성중*