# 🏰 React Castle Rooms - คู่มือสำหรับผู้เรียน Bootcamp

## 📚 สารบัญ
1. [React คืออะไร?](#react-คืออะไร)
2. [โปรเจกต์นี้คืออะไร?](#โปรเจกต์นี้คืออะไร)
3. [แอปพลิเคชันทำงานอย่างไร](#แอปพลิเคชันทำงานอย่างไร)
4. [แนวคิดหลักที่อธิบาย](#แนวคิดหลักที่อธิบาย)
5. [อธิบายโครงสร้างไฟล์](#อธิบายโครงสร้างไฟล์)
6. [การเดินทางของ Component](#การเดินทางของ-component)
7. [การรันโปรเจกต์](#การรันโปรเจกต์)
8. [วิธีการแก้ไขโปรเจกต์](#วิธีการแก้ไขโปรเจกต์)

---

## React คืออะไร?

### พื้นฐาน
**React** คือ JavaScript library ที่ทำให้สร้างเว็บไซต์และแอปที่โต้ตอบได้ง่ายขึ้น คิดของมันเหมือนบล็อก LEGO:

#### ความแตกต่างระหว่างวิธีการปกติและ React:

**วิธีปกติ (Vanilla JavaScript):**
```javascript
// หน้าแรก
const name = "John";
document.getElementById("greeting").innerText = "สวัสดี " + name;

// เมื่อต้องเปลี่ยนชื่อ ต้องเขียนโค้ดใหม่
const newName = "Jane";
document.getElementById("greeting").innerText = "สวัสดี " + newName;
// ต้องจำไว้ว่ามี element ที่ต้องอัปเดต, ต้องจัดการสถานะเอง ปัญหา!
```

**วิธี React:**
```jsx
function Greeting() {
  const [name, setName] = useState("John");
  
  // React จะเปลี่ยนอัตโนมัติเมื่อ name เปลี่ยน
  return <h1>สวัสดี {name}</h1>;
}
// แค่เขียนว่า UI ควรมีหน้าตาอย่างไร, React ทำให้มันปรากฏ!
```

### ทำไมต้องใช้ React?
- 📱 **Components ที่นำกลับมาใช้ได้**: สร้างชิ้นส่วนครั้งเดียว ใช้หลายครั้ง โดยไม่ต้องเขียนโค้ดใหม่
- 🔄 **Reactive**: เมื่อข้อมูลเปลี่ยน หน้าเว็บจะอัปเดตโดยอัตโนมัติ ไม่ต้องคุณเขียนโค้ดเพิ่มเติม
- 🛠️ **โค้ดที่เป็นระเบียบ**: เก็บโค้ดที่เกี่ยวข้องไว้ด้วยกันใน "components" ทำให้ง่ายต่อการดูแล

### JSX - ไวยากรณ์พิเศษของ React
React ใช้ **JSX** ซึ่งดูเหมือน HTML แต่เป็น JavaScript จริงๆ:

```jsx
// นี่คือ JSX - มันดูเหมือน HTML
const message = <h1>สวัสดี {name}!</h1>

// แต่จริงๆ มันเป็น JavaScript ที่สร้าง elements
// คิดว่ามันเป็นทางลัดในการสร้าง UI
```

#### ทำไมใช้ JSX?

**ไม่มี JSX (ยุ่งมาก):**
```javascript
import { createElement } from 'react';

const greeting = createElement(
  'h1',
  { className: 'text-white' },
  'สวัสดี ' + name
);
```

**มี JSX (ง่ายและสะอาด):**
```jsx
const greeting = <h1 className="text-white">สวัสดี {name}</h1>;
```

JSX ทำให้โค้ดอ่านง่ายและคล้ายกับ HTML ที่คุณรู้จัก!

---

## โปรเจกต์นี้คืออะไร?

### 🎮 เกมสำรวจปราสาท
นี่คือ **เกมสำรวจปราสาทแบบโต้ตอบ** ที่:
- คุณเริ่มต้นนอกปราสาท
- คุณพิมพ์ข้อความลงในกล่องป้อนข้อมูล
- ข้อความนั้นเดินทางผ่านห้องต่างๆ ในปราสาท
- ห้องลับซ่อนลึกภายในสามารถส่งข้อความกลับมาหาคุณได้

### การเปรียบเทียบ
ลองนึกภาพ:
- **Outside** = คุณยืนนอกปราสาท
- **Castle** = ทางเข้าปราสาท
- **Tower** = ข้างในปราสาทหรือไปด้านบน
- **Chamber** = ห้องหรูในหอคอย
- **Room** = ห้องอื่น
- **Hall** = หนึ่งในส่วนเดินทาง
- **Corridor** = ทางเดินอื่น
- **Gallery** = แกลเลอรี่ศิลปะ
- **Nook** = มุมเล็กๆ
- **SecretRoom** = ซ่อนลึกภายในปราสาท

คุณสามารถส่งข้อความที่เดินทางผ่านห้องทั้งหมดนี้ได้ และ SecretRoom สามารถส่งคำตอบกลับมาหาคุณได้

---

## แอปพลิเคชันทำงานอย่างไร

### 🔄 การไหลของข้อมูล

```
คุณพิมพ์นอก Outside
    ↓
[Outside] มีข้อความ
    ↓
ส่งผ่านไปยัง Castle
    ↓
Castle ส่งผ่านไปยัง Tower
    ↓
Tower ส่งผ่านไปยัง Chamber
    ↓
... (ต่อไปผ่านห้องทั้งหมด)
    ↓
SecretRoom รับข้อความ
    ↓
SecretRoom ส่งตอบกลับขึ้นไป
    ↓
ตอบกลับถึง Outside
    ↓
Outside แสดงตอบกลับให้คุณ
```

### โครงสร้าง Component ที่มองเห็นได้

```
Outside (กล่องสีเทา)
  ├─ InputBox (ที่คุณพิมพ์)
  └─ Castle (กล่องส้ม)
       └─ Tower (กล่องเหลือง)
            └─ Chamber (กล่องสีเขียว)
                 └─ Room (กล่องสีเขียวสดใส)
                      └─ Hall (กล่องสีน้ำเงิน)
                           └─ Corridor (กล่องสีน้ำเงินเข้ม)
                                └─ Gallery (กล่องสีม่วง)
                                     └─ Nook (กล่องสีม่วงเข้ม)
                                          └─ SecretRoom (กล่องสีเทาเข้ม)
```

---

## แนวคิดหลักที่อธิบาย

### 1️⃣ **Components**
Component คือ widget ที่นำกลับมาใช้ได้ ห้องแต่ละห้อง (Outside, Castle, Tower ฯลฯ) คือ component

```jsx
// ตัวอย่าง component - มันเป็นแค่ JavaScript function ที่ return JSX
export default function MyRoom() {
  return (
    <div className="bg-blue-500">
      <h2>สวัสดีจากห้องของฉัน!</h2>
    </div>
  );
}
```

### 2️⃣ **Props** - ส่งข้อมูลระหว่าง Components
Props เหมือนพารามิเตอร์ของ function ช่วยให้ parent components ส่งข้อมูลไปยัง child components

คิดว่ามันเหมือนการส่งโน้ตลงมาในปราสาท:
- **Outside** ส่งข้อความ (prop) ไปยัง **Castle**
- **Castle** ส่งไปยัง **Tower**
- **Tower** ส่งไปยัง **Chamber**
- และต่อไป...

```jsx
// Parent component
<Castle message="สวัสดีจาก Outside" />

// Child component รับข้อมูลเป็น prop
function Castle({ message }) {
  return <div>{message}</div>
}
```

**ในโปรเจกต์นี้:**
```jsx
// Outside คือ parent
<Castle 
  textFromInput={inputText}  // ← นี่คือ prop
  onSecretRoomChange={handleSecretRoomChange}  // ← นี่ก็คือ prop
/>

// Castle รับ props เหล่านี้
function Castle({ textFromInput, onSecretRoomChange }) {
  // ตอนนี้ Castle สามารถใช้ค่าเหล่านี้ได้
  return (
    <h2>Castle ${textFromInput}</h2>  // ใช้ prop!
  );
}
```

### 3️⃣ **State** - จดจำข้อมูล
State คือข้อมูลที่ component จดจำไว้ เมื่อ state เปลี่ยน React จะอัปเดตการแสดงผลโดยอัตโนมัติ

```jsx
import { useState } from "react";

export default function Counter() {
  // useState สร้าง state พร้อม getter และ setter
  // count = ค่าปัจจุบัน
  // setCount = function ในการอัปเดตมัน
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>จำนวน: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        เพิ่มจำนวน
      </button>
    </div>
  );
}
```

#### ขั้นตอนการทำงานเมื่อคลิกปุ่ม:
1. ผู้ใช้คลิก "เพิ่มจำนวน"
2. `onClick` ชักนำ callback: `setCount(count + 1)`
3. `setCount(1)` บอก React ว่า count มีค่าใหม่คือ 1
4. React **re-render** component ทั้งหมด
5. `count` เป็น 1 ตอนนี้
6. `<h1>จำนวน: {1}</h1>` แสดงบนหน้าเว็บ
7. ทำซ้ำได้อีก!

#### ทำไมต้องใช้ setState?
```jsx
// ❌ วิธีผิด - เปลี่ยนตัวแปรธรรมดา
let count = 0;
count = 1; // เปลี่ยนค่า แต่ React ไม่รู้!
// หน้าไม่อัปเดต!

// ✅ วิธีถูก - ใช้ setState
const [count, setCount] = useState(0);
setCount(1); // React รู้ว่ามี state เปลี่ยน
// React render หน้าใหม่โดยอัตโนมัติ
```

**ในโปรเจกต์นี้:**
```jsx
const [inputText, setInputText] = useState("");  // State สำหรับ outside input
const [secretText, setSecretText] = useState(""); // State สำหรับข้อความ secret room
```

เมื่อผู้ใช้พิมพ์ในกล่องป้อนข้อมูล `setInputText()` จะอัปเดต state และ React จะ re-render component ด้วยค่าใหม่

### 4️⃣ **Callbacks** - ส่งข้อมูลกลับขึ้นไป
Props ไปลง จาก parent ไปยัง child แต่ถ้า child ต้องการส่งข้อมูลไปยัง parent ล่ะ?

ใช้ **callbacks** (functions ที่ส่งเป็น props)!

```jsx
// Parent
function Parent() {
  const handleChildMessage = (message) => {
    console.log("Child บอกว่า:", message);
  }
  
  return <Child onMessage={handleChildMessage} />
}

// Child
function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage("สวัสดี Parent!")}>
      ส่งข้อความ
    </button>
  );
}
```

#### ขั้นตอนการทำงาน:
1. Parent สร้าง function `handleChildMessage`
2. Parent ส่ง function นี้ไปยัง Child เป็น prop `onMessage`
3. Child รับ prop และเก็บไว้
4. เมื่อคลิกปุ่ม Child เรียก `onMessage("สวัสดี Parent!")`
5. Parent ได้รับข้อความ!

#### ทำไมใช้ Callback?
```jsx
// ❌ Child ไม่สามารถแก้ไข parent state ได้
function Child() {
  const [parentName, setParentName] = useState(""); // ❌ ไม่มี access!
}

// ✅ Callback ให้ child "บอก" parent เมื่อมีอะไรเกิดขึ้น
function Child({ onNameChange }) {
  const handleChange = (e) => {
    onNameChange(e.target.value); // ✅ บอก parent!
  }
}
```

**ในโปรเจกต์นี้:**
- **Outside** ส่ง callback `onSecretRoomChange` ไปยัง **Castle**
- **Castle** ส่งไปยัง **Tower**
- **Tower** ส่งไปยัง **Chamber**
- ... (ทั้งหมดลงไป)
- **SecretRoom** เรียก callback นี้ด้วยข้อความ
- ข้อความเดินทางกลับขึ้นไป และอัปเดต Outside!

```jsx
// ใน SecretRoom
const handleChange = (e) => {
  const newValue = e.target.value;
  if (onSecretRoomChange) {
    onSecretRoomChange(newValue);  // ← ส่งข้อความกลับไปยัง parent
  }
};
```

💡 **สำคัญ:** Props ส่งข้อมูลลงมาเท่านั้น (ทางเดียว) ส่วน Callbacks ช่วยให้ child ส่งข้อมูลกลับขึ้นไปได้

### 5️⃣ **Tailwind CSS** - การจัดรูปแบบที่ง่าย
โปรเจกต์นี้ใช้ Tailwind CSS ซึ่งเป็น utility-first CSS framework แทนที่จะเขียนไฟล์ CSS คุณเพิ่มชื่อ class ใน HTML elements:

```jsx
<div className="w-full h-full bg-gray-500 flex items-center justify-center p-8">
  <h2 className="text-white text-3xl font-bold mb-8">สวัสดี</h2>
</div>
```

แบ่งออก:
- `w-full` = width: 100%
- `h-full` = height: 100%
- `bg-gray-500` = สีพื้นหลังเทา
- `flex items-center justify-center` = ใช้ flexbox เพื่อจัดกึ่งกลาง
- `p-8` = padding 8 หน่วย
- `text-white` = สีข้อความขาว
- `text-3xl` = ขนาดข้อความใหญ่
- `font-bold` = ฟอนต์หนา
- `mb-8` = margin bottom 8 หน่วย

---

## อธิบายโครงสร้างไฟล์

### 📁 รูปแบบโปรเจกต์

```
react-castle-rooms/
├── src/
│   ├── main.jsx              ← เริ่มต้นแอป React
│   ├── App.jsx               ← component แอปหลัก
│   ├── index.css             ← global styles + Tailwind
│   └── components/           ← ทุก component ห้อง
│       ├── Outside.jsx       ← จุดเริ่มต้น (parent)
│       ├── Castle.jsx        ├─ ส่งผ่าน props ลง
│       ├── Tower.jsx         ├─ ไปยังแต่ละห้อง
│       ├── Chamber.jsx       ├─ ในห่วงโซ่
│       ├── Room.jsx          │
│       ├── Hall.jsx          │
│       ├── Corridor.jsx      │
│       ├── Gallery.jsx       │
│       ├── Nook.jsx          ├─ ทั้งหมดไปยัง
│       ├── SecretRoom.jsx    ├─ SecretRoom
│       └── InputBox.jsx      ← Component input ที่นำกลับมาใช้ได้
├── index.html                ← ไฟล์ HTML หลัก
├── package.json              ← dependency ของโปรเจกต์
├── vite.config.js            ← การตั้งค่า Vite build tool
└── eslint.config.js          ← ตัวตรวจสอบคุณภาพโค้ด
```

### 🔍 ไฟล์สำคัญที่อธิบาย

#### **index.html**
```html
<body>
  <div id="root"></div>  <!-- React render ที่นี่ -->
  <script type="module" src="/src/main.jsx"></script>
</body>
```
นี่คือไฟล์ HTML หลัก React จะใส่ components ทั้งหมดไปในส่วน `<div id="root">`

#### **src/main.jsx**
```jsx
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />  // ← Render App component
)
```
นี่บอก React ให้เริ่มแอปโดย render App component

#### **src/App.jsx**
```jsx
import Outside from "./components/Outside.jsx";

export default function App() {
  return <Outside />  // ← Render ก็แค่ Outside component
}
```
Component ระดับบนสุด มันแค่ render `Outside` ซึ่งเป็นจุดเข้าสู่ปราสาท

#### **src/components/Outside.jsx** - หัวใจของแอป
```jsx
import Castle from "./Castle.jsx";
import InputBox from "./InputBox.jsx";
import { useState } from "react";

export default function Outside() {
  // STATE: ตัวแปรเหล่านี้จดจำข้อมูลระหว่าง render
  const [question, setQuestion] = useState("Q");
  const [answer, setAnswer] = useState("A");
  const [inputText, setInputText] = useState("");
  const [secretText, setSecretText] = useState("");

  return (
    <div className="bg-gray-500">
      <h2>Outside</h2>
      
      {/* แสดงข้อความจาก SecretRoom */}
      <p>Secret Room บอกว่า: {secretText}</p>
      
      {/* กล่องป้อนข้อมูล - เมื่อผู้ใช้พิมพ์ มันจะอัปเดต inputText state */}
      <InputBox 
        value={inputText}
        onChange={(e)=> setInputText(e.target.value)}
      />
      
      {/* ส่งข้อมูลลง ไปยัง Castle รับอัปเดตจาก Castle ผ่าน callback */}
      <Castle 
        textFromInput={inputText}
        onSecretRoomChange={(text) => setSecretText(text)}
      />
    </div>
  );
}
```

**สิ่งที่เกิดขึ้น:**
1. ผู้ใช้พิมพ์ใน `InputBox`
2. `setInputText()` อัปเดต state
3. React re-render component
4. ค่า `inputText` ใหม่ถูกส่งลงไปยัง `Castle` เป็น prop
5. `Castle` ส่งไปยัง `Tower` ซึ่งส่งไปยัง `Chamber` ฯลฯ
6. ทั้งหมดลงไปยัง `SecretRoom`
7. เมื่อ `SecretRoom` input เปลี่ยน มันเรียก `onSecretRoomChange()`
8. นี่อัปเดต `secretText` ใน `Outside`
9. `Outside` แสดงข้อความจาก `SecretRoom`

---

## การเดินทางของ Component

### 🚀 สิ่งที่เกิดขึ้นเมื่อคุณพิมพ์บางสิ่ง

ลองติดตามข้อความผ่านปราสาท:

1. **คุณพิมพ์ "สวัสดี"** ใน InputBox ของ Outside
2. **InputBox** trigger callback `onChange`
3. **Outside** รัน: `setInputText("สวัสดี")`
4. **React** re-render Outside
5. **Outside** re-render ด้วยค่า `inputText` ใหม่
6. **Outside** ส่ง `textFromInput="สวัสดี"` ไปยัง **Castle**
7. **Castle** รับ prop และส่งไปยัง **Tower**
8. **Tower** รับแล้วส่งไปยัง **Chamber**
9. **Chamber** รับแล้วส่งไปยัง **Room**
10. **Room** รับแล้วส่งไปยัง **Hall**
11. **Hall** รับแล้วส่งไปยัง **Corridor**
12. **Corridor** รับแล้วส่งไปยัง **Gallery**
13. **Gallery** รับแล้วส่งไปยัง **Nook**
14. **Nook** รับแล้วส่งไปยัง **SecretRoom**
15. **SecretRoom** แสดง: "Outside บอกว่า: สวัสดี"

### 💬 เมื่อ SecretRoom ส่งข้อความกลับ

1. **คุณพิมพ์ "ข้อความลับ"** ใน InputBox ของ SecretRoom
2. **SecretRoom** รัน `onSecretRoomChange("ข้อความลับ")`
3. นี่เรียก callback function จาก **Nook**
4. **Nook** ส่ง callback ไปยัง **Gallery**
5. **Gallery** ส่ง callback ไปยัง **Corridor**
6. **Corridor** ส่ง callback ไปยัง **Hall**
7. **Hall** ส่ง callback ไปยัง **Room**
8. **Room** ส่ง callback ไปยัง **Chamber**
9. **Chamber** ส่ง callback ไปยัง **Tower**
10. **Tower** ส่ง callback ไปยัง **Castle**
11. **Castle** ส่ง callback ไปยัง **Outside**
12. **Outside** รัน: `setSecretText("ข้อความลับ")`
13. **React** re-render Outside
14. **Outside** แสดง: "Secret Room บอกว่า: ข้อความลับ"

---

## การรันโปรเจกต์

### ✅ ข้อกำหนดเบื้องต้น
- **Node.js** ที่ติดตั้ง (ดาวน์โหลดจาก nodejs.org)
- **VS Code** หรือตัวแก้ไขโค้ดใด ๆ
- Terminal

### 🚀 เริ่มเซิร์ฟเวอร์พัฒนา

```bash
# 1. นำทางไปยังโฟลเดอร์โปรเจกต์
cd react-castle-rooms

# 2. ติดตั้ง dependencies (ครั้งแรกเท่านั้น)
npm install

# 3. เริ่มต้น dev server
npm run dev

# 4. เปิด URL ในเบราว์เซอร์ของคุณ (โดยปกติ http://localhost:5173)
```

### 📦 สร้างสำหรับการผลิต

```bash
# สร้างการสร้างที่ปรับให้เหมาะสม
npm run build

# ดูตัวอย่างการสร้างการผลิต
npm run preview
```

### 🧹 ตรวจสอบคุณภาพโค้ด

```bash
# รัน ESLint เพื่อหาข้อผิดพลาดโค้ด
npm run lint
```

---

## วิธีการแก้ไขโปรเจกต์

### 🎨 เปลี่ยนการจัดรูปแบบ

Component แต่ละตัวใช้คลาส Tailwind CSS เพื่อเปลี่ยนสี:

```jsx
// ใน Castle.jsx
// เปลี่ยนจากสีส้มเป็นสีน้ำเงิน
<div className="bg-blue-500">  // ← เคยเป็น bg-orange-500

// สีทั่วไปของ Tailwind:
// bg-red-500, bg-blue-500, bg-green-500, bg-yellow-500, 
// bg-purple-500, bg-pink-500, bg-indigo-500, ฯลฯ
```

### 📝 เปลี่ยนชื่อ Component/ชื่อเรื่อง

```jsx
// ใน Castle.jsx
<h2 className="text-white text-3xl font-bold mb-8">
  Castle ${textFromInput}  // ← เปลี่ยนข้อความนี้
</h2>
```

### ➕ เพิ่มห้องใหม่

สมมติว่าคุณต้องการเพิ่มห้อง "Dungeon" ระหว่าง Chamber และ Room:

1. **สร้าง Dungeon.jsx**:
```jsx
import Room from "./Room.jsx";

export default function Dungeon({ textFromInput, onSecretRoomChange }) {
  return (
    <div className="w-full h-full bg-red-900 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-lg font-bold mb-8">Dungeon</h2>
        <Room textFromInput={textFromInput} onSecretRoomChange={onSecretRoomChange}/>
      </div>
    </div>
  );
}
```

2. **อัปเดต Chamber.jsx**:
```jsx
// เปลี่ยนจากการนำเข้า Room โดยตรง
import Dungeon from "./Dungeon.jsx";  // ← เปลี่ยนนี่

export default function Chamber({ textFromInput, onSecretRoomChange }) {
  return (
    <div className="w-full h-full bg-emerald-400 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-xl font-bold mb-8">Chamber</h2>
        <Dungeon textFromInput={textFromInput} onSecretRoomChange={onSecretRoomChange}/>  {/* ← เปลี่ยนนี่ */}
      </div>
    </div>
  );
}
```

### 🔧 แสดงข้อมูลต่างกันในแต่ละห้อง

```jsx
// ใน Tower.jsx คุณสามารถทำสิ่งต่างๆ กับข้อมูล
export default function Tower({ textFromInput, onSecretRoomChange }) {
  const modifiedText = textFromInput.toUpperCase();  // แปลงเป็นตัวพิมพ์ใหญ่
  
  return (
    <div>
      <p>ข้อความที่ดัดแปลง: {modifiedText}</p>
      <Chamber 
        textFromInput={modifiedText}  // ส่งเวอร์ชันที่ดัดแปลง
        onSecretRoomChange={onSecretRoomChange}
      />
    </div>
  );
}
```

### 🎯 เพิ่ม State เพิ่มเติมให้กับ Component

```jsx
import { useState } from "react";

export default function Tower({ textFromInput, onSecretRoomChange }) {
  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <p>คุณเข้าเยี่ยม Tower {counter} ครั้ง</p>
      <button onClick={() => setCounter(counter + 1)}>
        เข้าเยี่ยมอีกครั้ง
      </button>
    </div>
  );
}
```

---

## แนวปฏิบัติทั่วไป & แนวคิด

### 🔗 Component Tree
```
Outside (parent, มี state)
  ↓ ส่ง props ลงมา
Castle
  ↓ ส่ง props ลงมา
Tower
  ↓ ส่ง props ลงมา
... 
  ↓ ส่ง props ลงมา
SecretRoom
  ↑ เรียก callback
(ข้อความเดินทางกลับขึ้นไปผ่าน callbacks)
```

### 📊 State vs Props - ความแตกต่างที่สำคัญ

| แนวคิด | State | Props |
|---------|-------|-------|
| **มันคืออะไร?** | ข้อมูลที่เปลี่ยน | ข้อมูลจาก parent |
| **อยู่ที่ไหน?** | ภายใน component | จาก parent ไปยัง child |
| **มันสามารถเปลี่ยนได้ไหม?** | ใช่ ใช้ setState | ไม่ (อ่านเท่านั้น) |
| **ใครควบคุมมัน?** | Component เอง | Parent component |
| **ตัวอย่าง** | `const [name, setName] = useState()` | `<Child name="John" />` |
| **เมื่อใช้** | ข้อมูลที่เปลี่ยนในกล่องป้อน | ส่งข้อมูลจาก parent ไป |

#### ตัวอย่างโลกจริง:

```jsx
// Parent Component
function Outside() {
  // State: เก็บข้อมูลของ Outside เอง
  const [myMessage, setMyMessage] = useState("");
  
  return (
    <>
      <input 
        value={myMessage}
        onChange={(e) => setMyMessage(e.target.value)}
        placeholder="พิมพ์ข้อความของคุณ"
      />
      
      {/* Props: ส่งข้อมูลให้ child */}
      <Castle 
        message={myMessage}  // ← นี่คือ prop (ส่ง + อ่าน)
      />
    </>
  );
}

// Child Component - วิธี 1: ไม่ destructure
function Castle(props) {
  // props = { message: "...", ... }
  return <div>Outside บอกว่า: {props.message}</div>;
}

// Child Component - วิธี 2: destructure (สะอาดกว่า! ✅)
function Castle({ message }) {
  // ✅ message ใช้ได้โดยตรง ไม่ต้อง props.message
  return <div>Outside บอกว่า: {message}</div>;
}
```

### 🔄 React Re-renders เมื่อ:
1. **State เปลี่ยน** (ใช้ `setState`)
2. **Props เปลี่ยน** 
3. **Parent component re-render** (เด็ก re-render ด้วย)

#### เมื่อ Re-render เกิดขึ้น:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  console.log("Component render หรือ re-render!");
  
  return (
    <>
      <p>จำนวน: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        เพิ่ม
      </button>
      {/* ทุกครั้งที่คลิก console จะพิมพ์ "Component render" อีกครั้ง */}
    </>
  );
}
```

### 🎪 รูปแบบ Callback - ขั้นตอนแต่ละขั้น

1. **Parent สร้าง handler function:**
   ```jsx
   const handleChildAction = (data) => {
     console.log("Child ส่งข้อมูล:", data);
   };
   ```

2. **Parent ส่ง function ไปยัง child เป็น prop:**
   ```jsx
   <Child onAction={handleChildAction} />
   ```

3. **Child เรียก function นั้น:**
   ```jsx
   function Child({ onAction }) {
     return <button onClick={() => onAction("Hello")}>Click</button>;
   }
   ```

4. **Parent รับข้อมูล!**
   ```
   Console: Child ส่งข้อมูล: Hello
   ```

---

## คำถามยอดนิยม (FAQ)

### ❓ "Props กับ State ต่างกันอย่างไร ฉันควรใช้อันไหน?"

**ใช้ Props เมื่อ:**
- ข้อมูลมาจาก parent
- ต้องส่งข้อมูลจากที่เดียวไปหลายจุด
- ข้อมูลควรเป็น "อ่านเท่านั้น"

```jsx
// ✅ Props: ข้อมูลจาก parent
function Room({ title }) {
  return <h2>{title}</h2>;
}

<Room title="ห้องหลัก" /> // Parent ควบคุมชื่อ
```

**ใช้ State เมื่อ:**
- ข้อมูลเปลี่ยนไปภายในกล่องป้อนหรือปุ่ม
- เก็บข้อมูลที่ใช้ในกล่องป้อนข้อมูล
- ข้อมูลควรมีการเปลี่ยนแปลง

```jsx
// ✅ State: ข้อมูลเฉพาะ component
function InputRoom() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

### ❓ "ทำไม React re-render? จะทำให้มันช้าไหม?"

React re-render เพราะ **state หรือ props เปลี่ยน** นี่คือเอกลักษณ์ของ React!

```jsx
// ทุกครั้งที่คลิก counter เพิ่มขึ้น React re-render
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
      {/* React อัปเดตหน้าจอให้ตรงกับ count ใหม่ */}
    </>
  );
}
```

**React เร็ว** เพราะ:
1. ใช้ Virtual DOM (สำเนาหน้า "ในหน่วยความจำ")
2. เปรียบเทียบก่อนหลัง ("Diffing")
3. แค่อัปเดตส่วนที่เปลี่ยน ไม่ใช่ทั้งหน้า

### ❓ "Props ผ่านไปหลายชั้น (Tower → Chamber → Room) ท่อยุ่งไหม?"

ใช่! นี่เรียกว่า **"Prop Drilling"** ปัญหานี้เกิดในโปรเจกต์นี้

```jsx
// ❌ ต้องส่งผ่านทุกชั้น
Outside 
  → Castle (textFromInput)
    → Tower (textFromInput)
      → Chamber (textFromInput)
        → Room (textFromInput)
          → SecretRoom (textFromInput)
// ซ้ำๆ!
```

**วิธีแก้ไขในอนาคต:** ใช้ `useContext` เพื่อข้าม "ทุกชั้น" ได้
```jsx
// ด้วย useContext สามารถ "อ่าน" ข้อมูลจากที่ไกลโพ้นจากไปตรง!
```

### ❓ "ฉันเขียนโค้ด component ยังไง?"

**โครงสร้างพื้นฐาน:**
```jsx
// 1. import สิ่งที่ต้องใช้
import { useState } from "react";

// 2. สร้าง function (ตัวเลือก: destructure props ที่นี่)
export default function MyComponent({ prop1, prop2 }) {
  // ✅ Destructure ทำให้ prop1, prop2 ใช้ได้โดยตรง
  
  // 3. ใช้ hooks (useState, etc)
  const [state, setState] = useState(defaultValue);
  
  // 4. return JSX
  return (
    <div className="styles">
      <h1>{prop1}</h1>
      <p>{state}</p>
      <button onClick={() => setState(newValue)}>ปุ่ม</button>
    </div>
  );
}
```

**หรือไม่ destructure:**
```jsx
export default function MyComponent(props) {
  // ไม่ destructure ต้องใช้ props.prop1
  return <h1>{props.prop1}</h1>;
}
```

✨ **ข้อแนะนำ:** ใช้ destructuring ทำให้โค้ดสะอาดกว่า!

### 🐛 "หน้าไม่แสดงอะไรเลย"
- ตรวจสอบ browser console (F12 > Console tab)
- มองหาข้อความข้อผิดพลาดสีแดง
- ตรวจสอบให้แน่ใจว่า components ทั้งหมดนำเข้าอย่างถูกต้อง

### 🐛 ปัญหา 2: "ข้อมูลไม่ได้อัปเดต"

**สาเหตุทั่วไป:**
- ลืม `setState()` เปลี่ยนตัวแปรแทน
- ลืม import `useState`

```jsx
// ❌ ผิด: เปลี่ยนตัวแปรธรรมดา (React ไม่รู้!)
let name = "John";
name = "Jane"; // ❌ หน้าไม่อัปเดต!

// ✅ ถูก: ใช้ setState
const [name, setName] = useState("John");
setName("Jane"); // ✅ React รู้และ re-render!
```

**ตรวจสอบด้วย console.log:**
```jsx
function MyComponent({ prop }) {
  const [state, setState] = useState("start");
  
  console.log("prop:", prop);      // ดู prop ได้ค่าไหม?
  console.log("state:", state);    // state มีค่าอะไร?
  
  return <div>{prop} - {state}</div>;
}
```

### 🐛 ปัญหา 3: "ข้อความไม่ผ่านปราสาท"

**เช็คลิสต์:**
```
Outside ส่ง textFromInput ไปยัง Castle?
  → Castle รับ { textFromInput } ไหม?
    → Castle ส่งไป Tower ไหม?
      → Tower รับและส่ง Chamber ไหม?
        → ... ต่อไปจนถึง SecretRoom
          → SecretRoom แสดง textFromInput ไหม?
```

**ใช้ console.log ติดตามการเดินทาง:**
```jsx
function Tower({ textFromInput, onSecretRoomChange }) {
  console.log("🏯 Tower ได้รับ:", textFromInput); // ← ดูค่า
  
  return (
    <Chamber 
      textFromInput={textFromInput}
      onSecretRoomChange={onSecretRoomChange}
    />
  );
}
```

### 🐛 ปัญหา 4: "Callback ไม่ทำงาน"

**เช็คลิสต์:**
```
SecretRoom มี onSecretRoomChange ไหม?
  → SecretRoom เรียก onSecretRoomChange() ไหม?
    → Parent ได้รับข้อมูล ไหม?
      → Parent อัปเดต state ไหม?
```

**ตัวอย่างการแก้ไข:**
```jsx
// ❌ ผิด: callback ไม่ถูก pass ลงมา
function Tower({ textFromInput }) {
  return <Chamber textFromInput={textFromInput} />
  // ❌ ลืม onSecretRoomChange!
}

// ✅ ถูก: ต้อง pass callback ลงไปหมด
function Tower({ textFromInput, onSecretRoomChange }) {
  return (
    <Chamber 
      textFromInput={textFromInput}
      onSecretRoomChange={onSecretRoomChange}  // ← ส่งให้!
    />
  );
}
```

**ใช้ console.log ตรวจสอบ callback:**
```jsx
// วิธี 1: ไม่ destructure
function SecretRoom(secretRoom) {
  const handleChange = (e) => {
    console.log("🤫 SecretRoom พยายามส่ง:", e.target.value);
    if (secretRoom.onSecretRoomChange) {
      console.log("✅ Callback มี!");
      secretRoom.onSecretRoomChange(e.target.value);
    } else {
      console.log("❌ Callback ไม่มี!");
    }
  };
  return <input onChange={handleChange} />;
}

// วิธี 2: Destructure (สะอาดกว่า! ✅)
function SecretRoom({ onSecretRoomChange }) {
  const handleChange = (e) => {
    console.log("🤫 SecretRoom พยายามส่ง:", e.target.value);
    if (onSecretRoomChange) {
      console.log("✅ Callback มี!");
      onSecretRoomChange(e.target.value);
    } else {
      console.log("❌ Callback ไม่มี!");
    }
  };
  return <input onChange={handleChange} />;
}
```

---

## เคล็ดลับมืออาชีพสำหรับผู้เริ่มต้น

### 💡 เทคนิค 1: ใช้ Meaningful Names

**❌ ชื่อไม่ดี:**
```jsx
const [x, setX] = useState(""); // x คืออะไร?
const handleClick = () => {}; // click อะไร?
<Component data={something} /> // data คืออะไร?
```

**✅ ชื่อที่ดี:**
```jsx
const [userName, setUserName] = useState(""); // ชัดเจน!
const handlePasswordChange = () => {}; // รู้ว่าทำอะไร
<Component username={userProfile} /> // ทำงานชัดเจน
```

### 💡 เทคนิค 2: ทำให้ Components ขนาดเล็ก

**❌ Component ใหญ่เกินไป (500 บรรทัด!)**
```jsx
export default function SuperBigComponent() {
  // ... 500 บรรทัดโค้ด!
  // ยากต่อการแก้ไข ยากเข้าใจ
}
```

**✅ แบ่ง Components เล็กๆ:**
```jsx
// ทำให้ components เล็กและเฉพาะเจาะจง
export default function UserProfile() {
  return (
    <>
      <UserHeader />
      <UserBio />
      <UserStats />
    </>
  );
}
```

### 💡 เทคนิค 3: Props Destructuring

```jsx
// ❌ ไม่ destructure - ยุ่ง
function MyComponent(props) {
  return <div>{props.name} - {props.age}</div>;
}

// ✅ Destructure props - สะอาด!
function MyComponent({ name, age }) {
  return <div>{name} - {age}</div>;
}

// ✅ Destructure ในโปรเจกต์นี้
function SecretRoom({ textFromInput, onSecretRoomChange }) {
  // ✅ ใช้ได้ทันที ไม่ต้อง secretRoom.textFromInput
  return <p>Outside said: {textFromInput}</p>;
}
```

### 💡 เทคนิค 4: Early Return

```jsx
// ❌ Nested if (ยากอ่าน)
function MyComponent({ user }) {
  if (user) {
    if (user.isAdmin) {
      return <AdminDashboard />;
    } else {
      return <UserDashboard />;
    }
  } else {
    return <Login />;
  }
}

// ✅ Early return (ง่ายอ่าน!)
function MyComponent({ user }) {
  if (!user) return <Login />;
  if (user.isAdmin) return <AdminDashboard />;
  return <UserDashboard />;
}
```

### 💡 เทคนิค 5: const vs let

```jsx
// ✅ ใช้ const เสมอ (เว้นแต่ต้องเปลี่ยน)
const name = "John"; // ✅
const [count, setCount] = useState(0); // ✅

// ❌ หลีกเลี่ยง let และ var
let age = 25; // ❌ (ใช้ state แทน)
var email = "..."; // ❌ (ใช้ const)
```

---

## สรุป: สิ่งที่คุณเรียนรู้

✅ **React** ใช้ components เพื่อสร้าง UIs  
✅ **Props** ส่งข้อมูลจาก parent ไปยัง child (ลงมา)  
✅ **Callbacks** ส่งข้อมูลจาก child ไปยัง parent (ขึ้นไป)  
✅ **State** จดจำข้อมูลภายใน component  
✅ **React re-render** เมื่อ state หรือ props เปลี่ยน  
✅ **Tailwind CSS** ทำให้การจัดรูปแบบเป็นเรื่องง่าย  
✅ **Component Tree** แสดงว่า components เกี่ยวข้องกันอย่างไร  

---

## ขั้นตอนต่อไปเพื่อจะก้าวขึ้น

1. **เพิ่มการโต้ตอบ**: คลิกปุ่มเพื่อแก้ไขข้อมูล
2. **เพิ่มห้องเพิ่มเติม**: ขยายปราสาทด้วย components ใหม่
3. **แปลงข้อมูล**: แก้ไขข้อความเมื่อมันผ่านห้อง
4. **เพิ่มการตรวจสอบ**: ตรวจสอบว่า input ถูกต้องก่อนส่ง
5. **ใช้ useEffect**: เรียนรู้เกี่ยวกับผลข้างเคียงและการโทร API
6. **ใช้ useContext**: เรียนรู้วิธีส่งข้อมูลโดยไม่ต้อง prop drilling (โดยไม่ต้องส่งผ่านทุก component)
7. **เพิ่มการจัดรูปแบบ**: ปรับแต่งสี ฟอนต์ และเค้าโครง

---

## 📋 Cheat Sheet - เอกสารอ้างอิงด่วน

### สร้าง State
```jsx
const [value, setValue] = useState(initialValue);
```

### ส่ง Props
```jsx
<ChildComponent prop1="value" prop2={variable} />
```

### รับ Props
```jsx
function ChildComponent({ prop1, prop2 }) {
  return <div>{prop1}</div>;
}
```

### Callback
```jsx
// Parent
const handleAction = (data) => setMyState(data);
<Child onAction={handleAction} />

// Child
function Child({ onAction }) {
  return <button onClick={() => onAction("value")}>Click</button>;
}
```

### อัปเดต State
```jsx
// ❌ ผิด
state = newValue;

// ✅ ถูก
setState(newValue);
```

### Conditional Rendering
```jsx
// เพียง if
if (!user) return <Login />;

// Ternary operator
{user ? <Dashboard /> : <Login />}

// Logical AND
{isLoggedIn && <Dashboard />}
```

### ลูป/Map
```jsx
// แสดง array
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}
```

### Event Handlers
```jsx
// Click
<button onClick={() => handleClick()}>Click</button>

// Change
<input onChange={(e) => setValue(e.target.value)} />

// Submit
<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
```

### Tailwind Classes ทั่วไป
```
Sizing: w-full, h-full, w-96, p-4
Colors: bg-blue-500, text-white, text-red-500
Flex: flex, items-center, justify-center
Spacing: mb-4, mt-2, px-8
Text: text-lg, font-bold, text-center
```

---

## ทรัพยากรที่เป็นประโยชน์

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vite.dev
- **React Hooks Guide**: https://react.dev/reference/react

---

## 🎯 หมายเหตุสำคัญสำหรับผู้เรียน

### ✨ ทำไม Castle นี้มีความสำคัญ?

โปรเจกต์นี้สอนแนวคิดหลักของ React:

| แนวคิด | ตัวอย่างในเกม |
|--------|--------------|
| **Components** | Outside, Castle, Tower, ... (ห้องแต่ละห้องคือ component) |
| **Props** | ข้อความจาก Outside ไปยังห้องทั้งหมด |
| **State** | inputText และ secretText ที่จดจำค่า |
| **Callbacks** | SecretRoom ส่งข้อความกลับไป |
| **Re-rendering** | เมื่อใส่ข้อความ หน้าอัปเดตทั้งหมด |

### 🚀 เมื่อไหร่จะพร้อม?

✅ เมื่อคุณสามารถ:
- [ ] เข้าใจ Props vs State
- [ ] เขียน Component ธรรมดา
- [ ] ใช้ useState ได้
- [ ] เข้าใจ Callback
- [ ] แก้ไขจำหน่าย ด้วย console.log

⏭️ ขั้นตอนต่อไป:
- useEffect (ทำงานที่หลังจาก render)
- useContext (ส่งข้อมูลข้ามหลายชั้น)
- Custom Hooks (สร้าง logic ใหม่)
- API Calls (ดึงข้อมูลจากเซิร์ฟเวอร์)

---

## 💪 ท้าทายสำหรับผู้เรียน

### ท้าทาย 1: ขยายปราสาท ⭐
**เพิ่มห้องใหม่** ระหว่างห้องใด ๆ ตามตัวอย่างที่อธิบายไว้

### ท้าทาย 2: แปลงข้อความ ⭐⭐
**แก้ไข Tower เพื่อ:**
```jsx
// แปลงข้อความเป็นตัวพิมพ์ใหญ่
const modifiedText = textFromInput.toUpperCase();
```

### ท้าทาย 3: นับจำนวนการส่ง ⭐⭐⭐
**เพิ่ม state ใน Outside:**
```jsx
const [messageCount, setMessageCount] = useState(0);
// เพิ่ม 1 ทุกครั้งที่ SecretRoom ส่งข้อความ
```

### ท้าทาย 4: ป้องกัน Empty Message ⭐⭐⭐
**ในกล่องป้อน:**
```jsx
// ไม่อนุญาต ""
if (newValue.trim() === "") return;
```

---

## 📖 หลักการที่ต้องจำ

### 1. **Unidirectional Data Flow** (ข้อมูลไหลทางเดียว)
Props ลงจากบนลงล่าง → ทำให้ง่ายต่อการติดตามข้อมูล

### 2. **Components Should Be Pure**
ให้ props เดียวกัน → ผลลัพธ์เดียวกัน (ไม่มี "magic")

### 3. **State Lives at the Right Level**
state ควรอยู่ที่ component ที่ต้องใช้

### 4. **Lift State Up**
ถ้าหลาย component ต้องข้อมูลเดียวกัน → ยกขึ้นไปที่ parent

---

**ขอให้สนุกกับการเรียนรู้! 🎓 ปราสาทนี้คือสนามของคุณสำหรับการทำความเข้าใจ React! 🏰**
