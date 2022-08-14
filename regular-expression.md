# 정규 표현식
---
대부분의 회원 가입이 필요한 서비스는 비밀번호 설정 시 특정 조건에 맞추어 입력하라고 요구합니다. 보통의 비밀번호 조건은 영문 대문자, 소문자를 한 번씩 써야 하며 12 자 이상이어야 하고, 특수 문자는 1개 이상 들어가야 하는 등 까다롭게 설정되어 있습니다. 사용자는 본인이 생각한 하나의 비밀번호 패턴만 사용하기 때문에 어렵지 않게 조건에 맞는 비밀번호를 생성할 수 있지만, 관리자의 경우 적게는 열 개, 많게는 수억 개의 달하는 이 수많은 패턴의 유효성을 어떻게 설정하고 관리할까요?

문자를 하나하나 검사하거나, 모든 조건에 대해 조건문을 설정하는 등 다양한 방법이 있겠지만 문자열 관리를 간편하게 하는 방법중엔 대표적으로 정규표현식을 사용합니다.

## 정규 표현식이란?
정규표현식(정규식)은 문자열 에서 **특정한 규칙에 따른 문자열 집합을 표현하기 위해 사용되는 형식 언어**입니다. 정규표현식을 이용한다면 수십 줄이 필요한 코딩 작업을 간단하게 한두 줄로 끝낼 수 있습니다.

## 정규 표현식 예시
아래의 코드는 사용자가 입력한 이메일이나 휴대전화 번호가 유효한지 확인하고자 할 때 사용하는 정규표현식입니다. 정규표현식을 사용한다면, 한 줄의 코드만으로 이메일이나 휴대전화 번호의 유효성을 검사할 수 있지만, 만약 그렇지 않았다면 같은 결과를 얻기 위해서는 굉장히 긴 코드가 필요했을 것입니다.

### 이메일 유효성 검사
```javascript
const email = 'test@example.com';
let result = '올바릅니다.';

// 1. 정규표현식 사용
let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

if(regExp.test(email) === false) result = '올바르지 않습니다.';
result; // '올바르지 않습니다.'

/*----------------------------------------------------*/

// 2. 정규표현식이 아닌 경우, 이메일 아이디가 영문 소문자인지 확인하는 코드
let idx = email.indexOf('@');
if(idx === -1) result = '영문 소문자가 아닙니다.';

let ID = email.slice(0,idx);

ID.split('').forEach(e => {
	e = e.charCodeAt(0);
	if(e < 97 || e > 122){
	result = '영문 소문자가 아닙니다.';
	}
});

result; // '올바릅니다.'
```

### 휴대전화 번호 유효성 검사
```javascript
let regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
```

## 정규표현식 사용하기
정규표현식은 두 가지 방법으로 사용할 수 있습니다.

### 리터럴 패턴
정규표현식 규칙을 슬래시(/)로 감사 사용합니다. 슬래시 안에 들어온 문자열이 찾고자 하는 문자열이며, 컴퓨터에게 '슬래시 사이에 있는 문자열을 찾고 싶어!'라고 명령을 내리는 것입니다.
```javascript
let pattern = /c/;
// 'c 를 찾을 거야!' 라고 컴퓨터에게 명령을 내리는 것입니다.
// 찾고 싶은 c를 pattern 이라는 변수에 담아놨기 때문에 이 변수를 이용하여 c 를 찾을 수 있습니다.
```
### 생성자 함수 호출 패턴
RegExp 객체의 생성자 함수를 호출하여 사용합니다.

## 정규식 패턴
정규표현식에 다양한 특수기호를 함께 사용하면 문자열을 다룰 때에 더 많은 옵션을 설정할 수 있습니다.
|정규식 패턴|설명|
|:-:|:-|
|`^`|줄(Line)의 시작에서 일치 `/^abc/`|
|`$`|줄(Line)의 끝에서 일치 `/xyz$/`|
|`.`|(특수기호, 띄어쓰기를 포함한) 임의의 한 문자|
|`a\|b`|a or b 와 일치, 인덱스가 작은 것을 우선 반환|
|`*`|0회 이상 연속으로 반복되는 문자와 가능한 많이 일치. {0,} 와 동일|
|`*?`|0회 이상 연속으로 반복되는 문자와 가능한 적게 일치. {0} 와 동일|
|`+`|1회 이상 연속으로 반복되는 문자와 가능한 많이 일치. {1,} 와 동일|
|`+?`|1회 이상 연속으로 반복되는 문자와 가능한 적게 일치. {1} 와 동일|
|`{3}`|숫자 3개 연속 일치|
|`{3,}`|3개 이상 연속 일치|
|`{3,5}`|3개 이상 5개 이하 연속 일치|
|`()`|캡쳐(capture)할 그룹|
|`[a-z]`|a부터 z 사이의 문자 구간에 일치(영어 소문자)|
|`[A-Z]`|A부터 Z 사이의 문자 구간에 일치(영어 대문자)|
|`[0-9]`|0부터 9 사이의 문자 구간에 일치(숫자)|
|`\`|escape 문자. 특수 기호 앞에 `\`를 붙이면 정규식 패턴이 아닌, 기호 자체로 인식|
|`\d`|숫자를 검색함. `/[0-9]/`와 동일|
|`\D`|숫자가 아닌 문자를 검색함. `/[^0-9]/`와 동일|
|`\w`|영어대소문자, 숫자, (underscore)를 검색함. `/[A-Za-z0-9]/` 와 동일|
|`\W`|영어대소문자, 숫자, (underscore)가 아닌 문자를 검색함. `/[^A-Za-z0-9]/` 와 동일|
|`[^]`|[]안의 문자열 앞에 `^`이 쓰이면, []안에 없는 문자를 검색함|

## RegExp 객체의 메소드
### `exec()`
`exec()`는 execution의 줄임말로, 원하는 정보를 뽑아내고자 할 때 사용합니다. 검색의 대상이 찾고자 하는 문자열에 대한 정보를 가지고 있다면 이를 배열로 반환하며, 찾는 문자열이 없다면 null을 반환합니다.
```javascript
let pattern, res
pattern = /[b]{1,2}[c]/
res = pattern.exec('aabccbbc')
// 패턴을 만족하는 첫번째 문자열을 담은 배열을 반환
console.log(ans) //[ 'bc', index: 2, input: 'aabccbbc', groups: undefined ]
```
### `test()`
`test()`는 찾고자 하는 문자열이 대상 안에 있는지의 여부를 boolean으로 반환합니다.
```javascript
pattern = /exa/;
res = pattern.test('example') // true
```
## string 객체의 메서드
### `match()`
`match()`는 `RegExp.exex()`와 비슷한 기능을 하며, 정규 표현식을 인자로 받아 주어진 문자열과 일치된 결과를 배열로 반환합니다. 일치되는 결과가 없으면 `null`을 반환합니다.
```javascript
let pattern, res, str
str = 'exampleOfexample'
// 일치하는 첫번째 문자열 반환
pattern = /exa/;
res = str.match(pattern)
res // [ 'exa', index: 0, input: 'exampleOfexample', groups: undefined ]
// golbal flag사용 => 일치하는 모든 문자열
pattern = /exa/g;
res = str.match(pattern)
res // [ 'exa', 'exa' ]
// matchAll => match의 iterator 반환
pattern = /exa/g;
res = str.matchAll(pattern)
res // { [Iterator] }
```
### `replace()`
`replace()`는 검색후 바꾸기를 수행합니다. 첫 번째 인자로는 정규표현식을 받고, 두 번째 인자로는 치환하려는 문자열을 받습니다. 문자열에서 찾고자 하는 대상을 검색해서 이를 치환하려는 문자열로 변경 후 변경된 값을 리턴합니다.
```javascript
let pattern, res, str
str = 'exampleOfexample'
pattern = /exa/;
res = str.replace(pattern, '{replaced}')
res // {replaced}mpleOfexample
//일치하는 문자열을 모두 치환하려면 global flag를 사용
str = 'exampleOfexample'
pattern = /exa/g;
res = str.replace(pattern, '{replaced}')
res // {replaced}mpleOf{replaced}mple 
// replaceAll
str = 'aaaaa'
regex = 'a'
console.log(str.replaceAll(regex,'b')) // bbbb
```
### `split()`
`split()`은 주어진 인자를 구분자로 삼아, 문자열을 부분 문자열로 나누어 그 결과를 배열로 반환합니다.
```javascript
let pattern, res, str
str = 'example Of eXample'
pattern = /x| /i;
res = str.split(pattern)
res // [ 'e', 'ample', 'Of', 'e', 'ample' ]
```
### `search()`
`search()`는 정규표현식을 인자로 받아 가장 처음 매칭되는 부분 문자열의 위치를 반환합니다. 매칭되는 문자열이 없으면 -1을 반환합니다.
```javascript
a = "JavaScript".search(/script/); // -1 대소문자를 구분합니다
a = "JavaScript".search(/Script/); // 4
a = "01234567".search(/67$/); //6
```
## flag
정규표현식은 플래그를 설정해 줄 수 있으며, 플래그는 추가적인 검색 옵션의 역할을 해 줍니다. 이 플래그들은 각자 혹은 함께 사용하는 것이 모두 가능하며, 순서에 구분이 없습니다. 아래는 자주 사용되는 3가지 플래그입니다.
### `i`
`i`를 붙이면 대소문자를 구분하지 않습니다.
```javascript
let withi = /c/i;
let withouti = /c/;
"Code".match(withi); // ['C']
"Code".match(withouti); // null
```
### `g`
`g`는 global의 약자로, `g`를 붙이면 검색된 모든 결과를 리턴합니다.
```javascript
let withg = /c/g;
let withoutg = /c/;
"coolcode".match(withg); // ['c', 'c']
"coolcode".match(withoutg); // ['c'] g 가 없으면 첫 번째 검색 결과만 반환합니다
```
### `m`
`m`은 multiline의 약자로, 다중행을 검사합니다.
```javascript
let str = `1st : bool
2nd : code
3rd : states`;
// 3개의 행을 검색하여 모든 c 를 반환합니다.
str.match(/^[123]/gm) //[ '1', '2', '3' ]
// m flag를 사용하지 않으면 다음과 같습니다.
str.match(/^[123]/g) //[ '1' ]
// m은 다중행을 검색하게 해 주지만, g 를 빼고 검색하면 검색 대상을 찾는 순간 검색을 멈춥니다.
str.match(/^[23]/m) //[ '2', index: 11,input: ... ,groups: undefined ]
```
----
### 정규식 패턴(표현식)
정규표현식에 다양한 특수기호를 함께 사용하면 문자열을 다룰 때에 더 많은 옵션을 설정할 수 있었던 것을 학습했습니다. 이번엔 해당 특수 기호를 사용하는 실례를 보도록 하겠습니다.
## Anchors: `^` and `$`
### `^`
`^`는 문자열의 처음을 의미하며, 문자열에서 `^`뒤에 붙은 단어로 시작하는 부분을 찾습니다. 일치하는 부분이 있더라도, 그 부분이 문자열의 시작 부분이 아니면 `null`을 리턴합니다.
```javascript
"coding is fun".match(/^co/); // ['co']
"coding is fun".match(/^fun/); // null
```
### `$`
`$`는 문자열의 끝을 의미하며, 문자열에서 `$` 앞의 표현식으로 끝나는 부분을 찾습니다. 일치하는 부분이 있더라도, 그 부분이 문자열의 끝부분이 아니면 `null`을 리턴합니다.
```javascript
"coding is fun".match(/un$/); // ['un']
"coding is fun".match(/is$/); // null
"coding is fun".match(/^coding is fun$/);
// 문자열을 ^ 와 $ 로 감싸주면 그 사이에 들어간 문자열과 정확하게 일치하는 부분을 찾습니다
// ["coding is fun"]
```
## Quantifiers: `*`,`+`,`?` and `{}`
### `*`
`*`는 `*` 의 바로 앞의 문자가 0번 이상 나타나는 경우를 검색합니다. 아래와 같은 문자열이 있을 때에 `/ode*/g` 을 사용하게 되면 "od" 가 들어가면서 그 뒤에 "e"가 0번 이상 포함된 모든 문자열을 리턴합니다.
```javascript
"co cod code codee coding codeeeeee codingding".match(/ode*/g);
// ["od", "ode", "odee", "od", "odeeeeee", "od"]
```
### `+`
`+` 도 `*` 와 같은 방식으로 작동하며, 다만 `+` 바로 앞의 문자가 1번 이상 나타나는 경우를 검색한다는 점이 `*`과 다를 뿐입니다.
```javascript
"co cod code codee coding codeeeeee codingding".match(/ode+/g);
// ["ode", "odee", "odeeeeee"]
```
### `?`
`?` 는 `*` 또는 `+` 와 비슷하지만, `?` 앞의 문자가 0번 혹은 1번 나타나는 경우만 검색합니다. `*?` 또는 `+?` 와 같이 `?`는 `*` 혹은 `+` 와 함께 쓰는 것도 가능하며, 함께 사용하였을 경우 검색 결과가 어떻게 달라지는지 아래 예시를 통해 비교해 보세요.
```javascript
"co cod code codee coding codeeeeee codingding".match(/ode?/g);
// ["od", "ode", "ode", "od", "ode", "od"]
"co cod code codee coding codeeeeee codingding".match(/ode*?/g);
// ["od", "od", "od", "od", "od", "od"]
"co cod code codee coding codeeeeee codingding".match(/ode+?/g);
// ["ode", "ode", "ode"]
```
### `{}`
`{}`는 `*`, `*?`, `+`, `+?` 의 확장판으로 생각할 수 있습니다. `*`, `*?`, `+`, `+?` 가 '0개 이상' 또는 '1개 이상' 검색이 전부였던 반면, `{}`는 직접 숫자를 넣어서 연속되는 개수를 설정할 수 있습니다. 아래 예시와 함께 위 표에서 `{}`와 `*`, `*?`, `+`, `+?` 의 차이를 다시 한 번 비교해 보세요.
```javascript
"co cod code codee coding codeeeeee codingding".match(/ode{2}/g);
// 2개의 "e"를 포함한 문자열을 검색합니다.
// ["odee", "odee"]

"co cod code codee coding codeeeeee codingding".match(/ode{2,}/g);
// 2개 이상의 "e"를 포함한 문자열을 검색합니다.
// ["odee", "odeeeeee"]

"co cod code codee coding codeeeeee codingding".match(/ode{2,5}/g);
// 2개 이상 5개 이하의 "e"를 포함한 문자열을 검색합니다.
// ["odee", "odeeeee"]
```
## `OR operator`
`|`는 or 조건 검색 검색하여 `|`의 왼쪽 또는 오른쪽의 검색 결과를 반환합니다.
```javascript
"Cc Oo Dd Ee".match(/O|D/g); // ["O", "D"]
"Cc Oo Dd Ee".match(/c|e/g); // ["c", "e"]
"Cc Oo Dd Ee".match(/D|e/g); // ["D", "e"]
"Ccc Ooo DDd EEeee".match(/D+|e+/g); // + 는 1번 이상 반복을 의미하기 때문에
// ["DD", "eee"] 를 반환합니다.
```
## Bracket Operator - []
대괄호 `[]`안에 명시되 값을 검색합니다.
