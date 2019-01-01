# jsdsLib(javascript data structure Library)
자바스크립트로 구현된 자료구조 라이브러리

## Contents
- [자료구조 시각화 서비스](https://github.com/CODEMCD/jsdsLib-Visualization)
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
List 를 초기화한다.

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
원소를 List 앞에서 부터 찾는다.
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
원소를 List 뒤에서 부터 찾는다.
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
원소를 List 맨 앞에 삽입한다.
- ```.push_front(element)```
  - element: 삽입할 원소
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
List 맨 앞의 원소를 삭제한다.
- ```.pop_front()```
  - Return Value: List 가 비어있으면 null, 비어있지 않으면 해당 노드 반환
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
원소를 List 맨 뒤에 삽입한다.
- ```.push_back(element)```
  - element: 삽입할 원소
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
List 맨 뒤의 원소를 삭제한다.
- ```.pop_front()```
  - Return Value: List 가 비어있으면 null, 비어있지 않으면 해당 노드 반환
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
원소를 해당 노드 뒤에 삽입한다.
- ```.insert(element, item)```
  - element: 삽입할 원소
  - item: 기준 노드
  - Return Value: item 을 찾지 못하면 null 반환
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
원소를 해당 노드 앞에 삽입한다.
- ```.insert_prev(element, item)```
  - element: 삽입할 원소
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
두 List 를 합친다.
- ```.merge(otherList)```
  - otherList: 합칠 List 오브젝트
  - Return Value: otherList가 List 오브젝트가 아니라면 에러 반환
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
List 안의 전체 원소를 형식에 맞춰서 반환한다.
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
List 길이를 반환한다.
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
console.log(q.toString());       // ==  document.writeln(q.toString());

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
Queue 를 초기화한다.

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
Queue 가 비어있는지 검사한다.
- ```.empty()```
  - Return Value: Queue 가 비어있으면 true, 비어있지 않으면 false 반환
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
Queue 의 맨 앞 원소를 반환한다. (Queue 가 비어있으면 null 반환)
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
Queue 의 맨 앞 원소를 반환한다. (Queue 가 비어있으면 null 반환)
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
Queue 맨 뒤에 원소를 삽입한다. (```.push()```도 같은 기능을 한다.)
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
Queue 맨 앞의 원소를 삭제한다. (```.pop()```도 같은 기능을 한다.)
- ```.dequeue()```
  - Return Value: Queue 가 비어있으면 null, 비어있지 않으면 해당 원소 반환
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
Queue 안의 전체 원소를 형식에 맞춰서 반환한다.
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
Queue 길이를 반환한다.
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

## Stack

- 라이브러리 추가하기

1. HTML
```html
<-- Used jsdelivr cdn -->
<-- normal file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/src/Stack.js"></script>
<-- mini file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/dist/Stack.min.js"></script>
```

2. npm
```js
var Queue = require("jsdslib").Stack;
```

- 초기화
매개변수에 배열을 추가해서 초기화할 수 있다. 첫 번째 매개변수의 배열만 유효하고 나머지 매개변수는 무시한다.
```js
//방법 1
var s = new Stack();
console.log(s.toString());       // ==  document.writeln(s.toString());

//방법 2
var s = new Stack([1, 2, 3]);
console.log(s.toString());
```

```
[]
[1, 2, 3]
```

- 매서드
  - [.clear()](#clear)
  - [.empty()](#empty)
  - [.peek()](#peek)
  - [.push()](#push)
  - [.pop()](#pop)
  - [.toString()](#toString)
  - [.length(), .size()](#length-size)

### .clear()
Stack 을 초기화한다.

- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.toString());
s.clear();
console.log(s.toString());
```

```
[1, 2, 3]
[]
```

### .empty()
Stack 이 비어있는지 검사한다.
- ```.empty()```
  - Return Value: Stack 이 비어있으면 true, 비어있지 않으면 false 반환
- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.empty());
s.clear();
console.log(s.empty());
```

```
false
true
```

### .peek()
Stack 의 맨 뒤 원소를 반환한다. (Stack 이 비어있으면 null 반환)
- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());
```

```
3
```

### .push()
Stack 맨 뒤에 원소를 삽입한다.
- ```.push(element)```
  - element: 삽입할 원소
  - Return Value: 삽입한 원소
- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.toString());
```

```
[1, 2, 3]
```

### .pop()
Stack 맨 뒤의 원소를 삭제한다.
- ```.dequeue()```
  - Return Value: Stack 이 비어있으면 null, 비어있지 않으면 해당 원소 반환
- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
```

```
3
2
1
```

### .toString()
Stack 안의 전체 원소를 형식에 맞춰서 반환한다.
- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push('Hello');
console.log(s.toString());
```

```
[1, 2, 3, 'Hello']
```

### .length(), .size()
Stack 길이를 반환한다.
- 예제

```js
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.length());
console.log(s.size());
```

```
3
3
```


## Deque

- 라이브러리 추가하기

1. HTML
```html
<-- Used jsdelivr cdn -->
<-- normal file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/src/Deque.js"></script>
<-- mini file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/dist/Deque.min.js"></script>
```

2. npm
```js
var Deque = require("jsdslib").Deque;
```

- 초기화

```js
var dq = new Deque();
console.log(dq.toString());       // ==  document.writeln(dq.toString());
```

```
[]
```

- 매서드
  - [.clear()](#clear)
  - [.empty()](#empty)
  - [.front()](#front)
  - [.back()](#back)
  - [.push_front(), .unshift()](#push_front-unshift)
  - [.pop_front(), .dequeue(), .shift()](#pop_front-dequeue-shift)
  - [.push_back(), .push(), .enqueue()](#push_back-push-enqueue)
  - [.pop_back(), .pop()](#pop_back-pop)
  - [.toString()](#toString)
  - [.length(), .size()](#length-size)

### .clear()
Deque 을 초기화한다.

- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.toString());
dq.clear();
console.log(dq.toString());
```

```
[1, 2, 3]
[]
```

### .empty()
Deque 이 비어있는지 검사한다.
- ```.empty()```
  - Return Value: Deque 이 비어있으면 true, 비어있지 않으면 false 반환
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.empty());
dq.clear();
console.log(dq.empty());
```

```
false
true
```

### .front()
Deque 의 맨 앞 원소를 반환한다. (Deque 이 비어있으면 null 반환)
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.front().element);     //해당 노드의 element 를 반환한다.
```

```
1
```

### .back()
Deque 의 맨 뒤 원소를 반환한다. (Deque 이 비어있으면 null 반환)
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.back().element);     //해당 노드의 element 를 반환한다.
```

```
3
```

### .push_front(), .unshift()
Deque 맨 앞에 원소를 삽입한다.
- ```.push_front(element)```
  - element: 삽입할 원소
- 예제

```js
var dq = new Deque();
dq.push_front(1);
dq.push_front(2);
dq.unshift(3);
console.log(dq.toString());
```

```
[3, 2, 1]
```

### .pop_front(), .dequeue(), .shift()
Deque 맨 앞의 원소를 삭제한다.
- ```.pop_front()```
  - Return Value: Deque 이 비어있으면 null, 비어있지 않으면 해당 노드 반환
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.pop_front().element);
console.log(dq.dequeue().element);
console.log(dq.shift().element);
```

```
1
2
3
```

### .push_back(), .push(), .enqueue()
Deque 맨 뒤에 원소를 삽입한다.
- ```.push_back(element)```
  - element: 삽입할 원소
- 예제

```js
var dq = new Deque();
dq.push_back(1);
dq.push(2);
dq.enqueue(3);
console.log(dq.toString());
```

```
[1, 2 ,3]]
```

### .pop_back(), .pop()
Deque 맨 앞의 원소를 삭제한다.
- ```.pop_front()```
  - Return Value: Deque 이 비어있으면 null, 비어있지 않으면 해당 노드 반환
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.pop_back().element);
console.log(dq.pop_back().element);
console.log(dq.pop().element);
```

```
3
2
1
```

### .toString()
Deque 안의 전체 원소를 형식에 맞춰서 반환한다.
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
dq.push('Hello');
console.log(dq.toString());
```

```
[1, 2, 3, 'Hello']
```

### .length(), .size()
Deque 길이를 반환한다.
- 예제

```js
var dq = new Deque();
dq.push(1);
dq.push(2);
dq.push(3);
console.log(dq.length());
console.log(dq.size());
```

```
3
3
```


## Priority Queue

- 라이브러리 추가하기

1. HTML
```html
<-- Used jsdelivr cdn -->
<-- normal file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/src/Priority_Queue.js"></script>
<-- mini file -->
<script src="https://cdn.jsdelivr.net/gh/CODEMCD/jsdsLib@latest/dist/Priority_Queue.min.js"></script>
```

2. npm
```js
var PriorityQueue = require("jsdslib").PriorityQueue;
```

- 초기화
Priority Queue 는 최대 2개의 매개변수를 가질 수 있다.
- ```PriorityQueue(arr, comp)```
  - arr: 데이터가 담긴 배열
  - comp: 비교 함수, 설정하지 않으면 기본적으로 오름차순 정렬을 수행한다.
```js
//비교 함수(내림차순)
var comp = function(a, b) {
    return a - b;
}

//방법 1, 매개변수 0개
var pq = new PriorityQueue();
//방법 2, 매개변수 1개(배열)
var pq = new PriorityQueue([2, 1, 3]);
//방법 3, 매개변수 1개(비교함수)
var pq = new PriorityQueue(comp);
//방법 4, 매개변수 1개(배열, 비교함수)
var pq = new PriorityQueue([2, 1, 3], comp);
```

- 매서드
  - [.clear()](#clear)
  - [.empty()](#empty)
  - [.enqueue(), .push()](#enqueue-push)
  - [.dequeue(), .pop()](#dequeue-pop)
  - [.toString()](#toString)
  - [.length(), .size()](#length-size)

### .clear()
Priority Queue 을 초기화한다.

- 예제

```js
var pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
pq.clear();
console.log(pq.toString());
```

```
[]
```

### .empty()
Priority Queue 가 비어있는지 검사한다.
- ```.empty()```
  - Return Value: Priority Queue 가 비어있으면 true, 비어있지 않으면 false 반환
- 예제

```js
var pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
console.log(pq.empty());
pq.clear();
console.log(pq.empty());
```

```
false
true
```

### .enqueue(), .push()
Priority Queue 에 원소를 삽입한다.
- ```.enqueue(element)```
  - element: 삽입할 원소
- 예제

```js
var pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
console.log(pq.toString());
```

```
[1, 3, 2]
```

### .dequeue(), .pop()
Priority Queue 에서 우선순위가 가장 높은 원소를 삭제한다.
- ```.dequeue()```
  - Return Value: Priority Queue 가 비어있으면 null, 비어있지 않으면 해당 노드 반환
- 예제

```js
var pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
```

```
1
2
3
```

### .toString()
Priority Queue 안의 전체 원소를 형식에 맞춰서 반환한다.
- 예제

```js
var pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
pq.enqueue('Hello');
console.log(pq.toString());
```

```
[1, 3, 2, 'Hello']
```

### .length(), .size()
Priority Queue 길이를 반환한다.
- 예제

```js
var pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
console.log(pq.length());
console.log(pq.size());
```

```
3
3
```
