# jsdsLib(javascript datastructure Library)
자바스크립트로 구현된 자료구조 라이브러리

## 자료구조 목록
- [List](##List)
- [Queue](##Queue)
- [Stack](##Stack)
- [Deque](##Deque)
- [Priority Queue](##Priority Queue)

## 라이브러리 설치

### npm
```
npm install jsdsLib         # local
npm install -g jsdsLib      # global
```

## List

- 라이브러리 추가하기

```html
<-- jsdelivr cdn in html -->
<-- normal file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/src/List.js"></script>
<-- mini file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/dist/List.min.js"></script>
```

```js
//in module
var List = require("jsdslib").List;
```

- 초기화

```js
var List = require("jsdslib").List;

var list1 = new List();
console.log(list1.toString());
```

```
[]
```

- 매서드
  - [.clear()](###.clear())
  - [.find()](###.find())
  - [.find_reverse()](###.find_reverse())
  - [.push_front()](###.push_front())
  - [.pop_front()](###.pop_front())
  - [.push_back()](###.push_back())
  - [.pop_back()](###.pop_back())
  - [.insert()](###.insert())
  - [.insert_prev()](###.insert_prev())
  - [.remove()](###.remove())
  - [.merge()](###.merge())
  - [.toString()](###.toString())
  - [.length(), .size()](###.length(), .size())

### .clear()
리스트를 초기화한다.

- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
list.clear();
console.log(list.toString());
```

```
[1, 2, 3]
[]
```

### .find()
원소를 리스트 앞에서 부터 찾는다.
- ```.find(item)```
  - item: 찾을 원소
  - Return Value: 찾았다면 해당 노드, 찾지못했다면 null 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.find(2).element);   //해당 노드의 element를 반환
console.log(list.find(4));
```

```
2
null
```

### .find_reverse()
원소를 리스트 뒤에서 부터 찾는다.
- ```.find_reverse(item)```
  - item: 찾을 원소
  - Return Value: 찾았다면 해당 노드, 찾지못했다면 null 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.find_reverse(2).element);   //해당 노드의 element를 반환
console.log(list.find_reverse(4));
```

```
2
null
```

### .push_front()
원소를 리스트 맨 앞에 삽입한다.
- ```.push_front(newElement)```
  - newElement: 삽입할 원소
  - Return Value: 없음
- 예제

```js
var list = new List();
list.push_front(1);
list.push_front(2);
list.push_front(3);
console.log(list.toString());
```

```
[3, 2, 1]
```

### .pop_front()
리스트 맨 앞의 원소를 삭제한다.
- ```.pop_front()```
  - Return Value: 리스트가 비어있으면 null, 비어있지 않으면 해당 노드 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
console.log(list.pop_front().element);
console.log(list.pop_front().element);
console.log(list.pop_front().element);
```

```
[1, 2, 3]
1
2
3
```

### .push_back()
원소를 리스트 맨 뒤에 삽입한다.
- ```.push_back(newElement)```
  - newElement: 삽입할 원소
  - Return Value: 없음
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
```

```
[1, 2, 3]
```

### .pop_back()
리스트 맨 뒤의 원소를 삭제한다.
- ```.pop_front()```
  - Return Value: 리스트가 비어있으면 null, 비어있지 않으면 해당 노드 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
console.log(list.pop_back().element);
console.log(list.pop_back().element);
console.log(list.pop_back().element);
```

```
[1, 2, 3]
3
2
1
```

### .insert()
삽일할 원소를 해당 노드 뒤에 삽입한다.
- ```.insert(newElement, item)```
  - newElement: 삽입할 원소
  - item: 찾을 노드
  - Return Value: item을 찾지 못하면 null 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
list.insert(2.5, 2);
console.log(list.toString());
```

```
[1, 2, 3]
[1, 2, 2.5, 3]
```

### .insert_prev()
삽일할 원소를 해당 노드 앞에 삽입한다.
- ```.insert_prev(newElement, item)```
  - newElement: 삽입할 원소
  - item: 찾을 노드
  - Return Value: item 노드를 찾지 못하면 null 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
list.insert_prev(2.5, 3);
console.log(list.toString());
```

```
[1, 2, 3]
[1, 2, 2.5, 3]
```

### .remove()
해당 노드를 삭제한다.
- ```.remove(item)```
  - item: 삭제할 노드
  - Return Value: item 노드를 찾지 못하면 null, 찾으면 해당 노드 반환
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());
list.remove(2);
console.log(list.toString());
```

```
[1, 2, 3]
[1, 3]
```

### .merge()
두 리스트를 합친다.
- ```.merge(otherList)```
  - otherList: 합칠 리스트 오브젝트
  - Return Value: otherList가 리스트 오브젝트가 아니라면 에러 반환
- 예제

```js
var list1 = new List();
list1.push_back(1);
list1.push_back(2);
list1.push_back(3);
console.log('list1: ', list1.toString());

var list2 = new List();
list2.push_back(4);
list2.push_back(5);
list2.push_back(6);
console.log('list2: ', list2.toString());

list1.merge(list2);
console.log('merged list1: ', list1.toString());
```

```
list1:  [1, 2, 3]
list2:  [4, 5, 6]
merged list1:  [1, 2, 3, 4, 5, 6]
```

### .toString()
리스트 원소를 형식에 맞춰서 반환한다.
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
list.push_back('Hello');
console.log(list.toString());
```

```
[1, 2, 3, 'Hello']
```

### .length(), .size()
리스트 길이를 반환한다.
- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.length());
console.log(list.size());
```

```
3
3
```
