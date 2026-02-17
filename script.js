
//6. Enhanced object literals
var name = 'js';
var price = 1000;

var course = {
    name,
    price,
    getName: function(){
        return name;
    }
};

console.log(course.getName());

/* ================================================================
1. LET & CONST
Description:
- let: dùng khi giá trị có thể thay đổi.
- const: dùng khi giá trị không thay đổi (React dùng rất nhiều).
================================================================ */

let counter = 0;          // có thể thay đổi
counter++;

const appName = "MyApp";  // không thể gán lại
console.log(appName);


/* ================================================================
2. TEMPLATE LITERALS
Description:
- Dùng dấu backtick ``
- Cho phép chèn biến bằng ${}
- Rất hay dùng trong JSX hoặc log data
================================================================ */

const userName = "Hank";
const message = `Hello ${userName}, welcome to React!`;
console.log(message);


/* ================================================================
3. MULTI-LINE STRING
Description:
- Viết chuỗi nhiều dòng mà không cần \n
================================================================ */

const multiLine = `
This is React course
Learning ES6 features
Very important!
`;
console.log(multiLine);


/* ================================================================
4. ARROW FUNCTION
Description:
- Cú pháp viết hàm ngắn gọn
- React dùng arrow function rất nhiều
- Không có this riêng (quan trọng trong React)
================================================================ */

const sum = (a, b) => a + b;
console.log(sum(2, 3));

// Arrow function trong React component
const Greeting = () => {
    return "Hello React";
};
console.log(Greeting());


/* ================================================================
5. CLASSES
Description:
- Tạo class (React cũ dùng Class Component)
- React hiện nay chủ yếu dùng function component
================================================================ */

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `I am ${this.name}, ${this.age} years old`;
    }
}

const s1 = new Student("Hank", 20);
console.log(s1.introduce());


/* ================================================================
6. ENHANCED OBJECT LITERALS
Description:
- Viết object gọn hơn
- Rất hay dùng khi return state hoặc props
================================================================ */

const age = 20;

const user = {
    userName,
    age,
    greet() {
        return "Hello!";
    }
};

console.log(user);


/* ================================================================
7. DEFAULT PARAMETER VALUES
Description:
- Gán giá trị mặc định cho tham số
- Dùng nhiều trong function component props
================================================================ */

const greetUser = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greetUser());
console.log(greetUser("Hank"));


/* ================================================================
8. DESTRUCTURING
Description:
- Lấy dữ liệu từ object hoặc array
- React dùng cực nhiều khi nhận props
================================================================ */

// Object destructuring
const person = {
    fullName: "Hank Nguyen",
    studentAge: 20
};

const { fullName, studentAge } = person;
console.log(fullName, studentAge);

// React props destructuring
const Profile = ({ name, age }) => {
    return `${name} is ${age} years old`;
};

console.log(Profile({ name: "Hank", age: 20 }));

// Array destructuring
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);


/* ================================================================
9. REST PARAMETERS
Description:
- Gom nhiều tham số thành 1 mảng
- Hay dùng khi xử lý nhiều data
================================================================ */

const total = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
};

console.log(total(1, 2, 3, 4));


/* ================================================================
10. TAGGED TEMPLATE LITERAL
Description:
- Hàm xử lý template literal
- Ít dùng trong React cơ bản nhưng dùng trong styling library
================================================================ */

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `**${values[i]}**` : "");
    }, "");
}

const name = "Hank";
console.log(highlight`Hello ${name}`);


/* ================================================================
11. SPREAD OPERATOR
Description:
- Copy mảng hoặc object
- React dùng rất nhiều khi update state
================================================================ */

// Copy array
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

// Copy object (cực quan trọng trong React state)
const oldUser = { name: "Hank", age: 20 };
const updatedUser = { ...oldUser, age: 21 };
console.log(updatedUser);


/* ================================================================
12. MODULES
Description:
- Chia code ra nhiều file
- React dùng import/export liên tục
================================================================ */

// Ví dụ (giả lập, không chạy trong cùng file)

// export const multiply = (a, b) => a * b;

// import { multiply } from "./math";
// console.log(multiply(2, 3));

