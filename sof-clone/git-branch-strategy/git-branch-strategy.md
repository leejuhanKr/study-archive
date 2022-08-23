# git-branch 전략 수립
## 이 프로젝트의 개발 환경 분석
- stackoverflow-clone
- 팀원: FE 2명, BE 2명
- 예상 개발 기간 20일

20일의 짧은 개발 기간동안 협업 경험이 없는 사람들이 모인 팀에서 가장 효율적으로 개발할 수 있는 git branch 전략을 찾아야 합니다. 그래서 다음과 같은 사항들을 염두해두고 git-branch 전략을 수립하게 되었습니다.

1. 짧은 개발 기간, 빠른 배포, 버저닝이 필요없는 어플리케이션임을 고려해야합니다.
2. git-branch, PR 사용이 익숙하지 않으므로, 개발 리소스가 낭비되지 않고 flow가 복잡하지 않으며 오류 발생시 쉽게 해결할 수 있는 전략을 찾아야합니다.
----
## 잘 알려진 git branch 전략 분석
### Git-Flow
### github-Flow
### gitlab-Flow
----
## 전략 수립
### git-flow 제외
### github-flow
git-flow 보다 간단하지만 너무 간단한 탓에 미숙하게 main 브랜치로 merge 했다가 나중에 오류 발견시 대처하는 데 시간이 오래 걸릴 것 같음
### gitlab-flow
gitlab-flow는 github-flow와 git-flow의 절충안. 배포만을 담당하는 production 브랜치와 production 브랜치로 결과를 넘기기 전에 테스트를 수행하는 브랜치로 


-----
## github setting

----
참고자료
- [git-flow]https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
- [github-flow]https://docs.github.com/en/get-started/quickstart/github-flow
- [gitlab-flow]https://docs.gitlab.com/ee/topics/gitlab_flow.html
