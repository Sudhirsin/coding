#### Coding Session 1

```
Submit to respective folders
```

**Complete the questions by hand and submit your answers in the space provided**  

***You cannot and should not use any JavaScript compliers! Any use of online or offline compliers is considered cheating!***

#### FSD.JS.16.1
######
1. What is the value of arr. If the answer is in an array please use [num1,num2,num3] format
```javascript
arr = [55,200,215,230,280]
arr.map(a=>a*10)


```
[550,2000,2150,2300,2800]

```

```
2. What is the value of b?
```javascript
const func = (a) => a===1?1:a*func(a-1)
b = func(5)
```
120

```

```
3. What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [55,200,215,230,280]
arr.map(a=>a%10)
```
[5.5,20,21.5,23,28]

```

```
4. What is the value of `z`?
```javascript
var x = 110
const y = x => x++;
x++;
z = y(101)
```
101

```

```
5.  What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format
```javascript
arr = [220,200,215,205,280]
arr.filter(a=>a>220)
```
[280]

```

```
6.  What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format
```javascript
arr = [55,200,215,230,280]
arr.filter(a=>a>200)
```
[215, 230, 280]

```

```
7. What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format
```javascript
arr = [55,200,300,230,280]
arr.reduce((a,b)=>a>b?a:b)
```
300

```

```
8.  What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format
```javascript
arr = [55,200,300,230,280]
arr.reduce((a,b)=>a>b?a+100:b)
```
500

```

```
9. What is the value of `x` and `y` ?
```javascript
var x =110
const z = (a) => {
    var x = 100;
    const y = a+10;
    return y
}
y = z(90)

```
100

```

```
