# jsdsLib(javascript data structure Library)
자바스크립트로 구현된 자료구조 라이브러리

## Contents
- [라이브러리 설치](#라이브러리-설치)
- [List](#list)
- [Queue](#queue)
- [Stack](#stack)
- [Deque](#deque)
- [Priority Queue](#priority-queue)

## 라이브러리 설치

### npm
```
npm install jsdsLib         # local
npm install -g jsdsLib      # global
```

## List

- 라이브러리 추가하기

1. HTML
```html
<-- Used jsdelivr cdn -->
<-- normal file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/src/List.js"></script>
<-- mini file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/dist/List.min.js"></script>
```

2. npm
```js
var List = require("jsdslib").List;
```

- 초기화

```js
var list = new List();
console.log(list.toString());     // ==  document.writeln(list.toString());
```

```
[]
```

- 매서드
  - [.clear()](#clear)
  - [.find()](#find)
  - [.find_reverse()](#find_reverse)
  - [.push_front()](#push_front)
  - [.pop_front()](#pop_front)
  - [.push_back()](#push_back)
  - [.pop_back()](#pop_back)
  - [.insert()](#insert)
  - [.insert_prev()](#insert_prev)
  - [.remove()](#remove)
  - [.merge()](#merge)
  - [.toString()](#toString)
  - [.length(), .size()](#length-size)

### .clear()
리스트를 초기화한다.

- 예제

```js
var list = new List();
list.push_back(1);
list.push_back(2);
list.push_back(3);
console.log(list.toString());     // ==  document.writeln(list.toString());
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
  - item: 찾을 노드
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
  - item: 찾을 노드
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
  - item: 기준 노드
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
  - item: 기준 노드
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
리스트안의 전체 원소를 형식에 맞춰서 반환한다.
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


## Queue

- 라이브러리 추가하기

1. HTML
```html
<-- Used jsdelivr cdn -->
<-- normal file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/src/Queue.js"></script>
<-- mini file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/dist/Queue.min.js"></script>
```

2. npm
```js
var Queue = require("jsdslib").Queue;
```

- 초기화
매개변수에 배열을 추가해서 초기화할 수 있다. 첫 번째 매개변수의 배열만 유효하고 나머지 매개변수는 무시한다.
```js
//방법 1
var q = new Queue();
console.log(q.toString());

//방법 2
var q = new Queue([1, 2, 3]);
console.log(q.toString());
```

```
[]
[1, 2, 3]
```

- 매서드
  - [.clear()](#clear)
  - [.empty()](#empty)
  - [.front()](#front)
  - [.back()](#back)
  - [.enqueue(), .push()](#enqueue-push)
  - [.dequeue(), .pop()](#dequeue-pop)
  - [.toString()](#toString)
  - [.length(), .size()](#length-size)

### .clear()
큐를 초기화한다.

- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.toString());
q.clear();
console.log(q.toString());
```

```
[1, 2, 3]
[]
```

### .empty()
큐가 비어있는지 검사한다.
- ```.empty()```
  - Return Value: 큐가 비어있으면 true, 비어있지 않으면 false 반환
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.empty());
q.clear();
console.log(q.empty());
```

```
false
true
```

### .front()
큐의 맨 앞 원소를 반환한다. (큐가 비어있으면 null 반환)
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
```

```
1
```

### .back()
큐의 맨 앞 원소를 반환한다. (큐가 비어있으면 null 반환)
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.back());
```

```
3
```

### .enqueue(), .push()
큐 맨 뒤에 원소를 삽입한다. (```.push()```도 같은 기능을 한다.)
- ```.enqueue(element)```
  - element: 삽입할 원소
  - Return Value: 삽입한 원소
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.toString());
q.push(4);
q.push(5);
q.push(6);
console.log(q.toString());
```

```
[1, 2, 3]
[1, 2, 3, 4, 5, 6]
```

### .dequeue(), .pop()
큐 맨 앞의 원소를 삭제한다. (```.pop()```도 같은 기능을 한다.)
- ```.dequeue()```
  - Return Value: 큐가 비어있으면 null, 비어있지 않으면 해당 원소 반환
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.pop());
```

```
1
2
3
```

### .toString()
큐안의 전체 원소를 형식에 맞춰서 반환한다.
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue('Hello');
console.log(q.toString());
```

```
[1, 2, 3, 'Hello']
```

### .length(), .size()
큐 길이를 반환한다.
- 예제

```js
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.length());
console.log(q.size());
```

```
3
3
```
