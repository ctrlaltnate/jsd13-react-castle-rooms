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

- **HTML/CSS/JS ปกติ**: คุณต้องเปลี่ยน DOM (เนื้อหาหน้าเว็บ) ด้วยตนเองเมื่อมีบางอย่างเกิดขึ้น
- **React**: คุณอธิบายว่าหน้าเว็บควรมีหน้าตาอย่างไร แล้ว React จะอัปเดตมันให้คุณโดยอัตโนมัติ

### ทำไมต้องใช้ React?
- 📱 **Components ที่นำกลับมาใช้ได้**: สร้างชิ้นส่วนครั้งเดียว ใช้หลายครั้ง
- 🔄 **Reactive**: เมื่อข้อมูลเปลี่ยน หน้าเว็บจะอัปเดตโดยอัตโนมัติ
- 🛠️ **โค้ดที่เป็นระเบียบ**: เก็บโค้ดที่เกี่ยวข้องไว้ด้วยกันใน "components"

### JSX - ไวยากรณ์พิเศษของ React
React ใช้ **JSX** ซึ่งดูเหมือน HTML แต่เป็น JavaScript จริงๆ:

```jsx
// นี่คือ JSX - มันดูเหมือน HTML
const message = <h1>สวัสดี {name}!</h1>

// แต่จริงๆ มันเป็น JavaScript ที่สร้าง elements
// คิดว่ามันเป็นทางลัดในการสร้าง UI
```

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

export default function Outside() {
  // สร้าง state ที่เริ่มต้นด้วย "Q"
  const [question, setQuestion] = useState("Q");
  
  // question = ค่าปัจจุบัน
  // setQuestion = function ในการอัปเดตมัน
  
  return (
    <div>
      <h1>{question}</h1>
      <button onClick={() => setQuestion("คำถามใหม่")}>
        เปลี่ยนคำถาม
      </button>
    </div>
  );
}
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

### 📊 State vs Props

| แนวคิด | State | Props |
|---------|-------|-------|
| มันคืออะไร? | ข้อมูลที่เปลี่ยน | ข้อมูลจาก parent |
| อยู่ที่ไหน? | ภายในกำแพง | จาก parent ไปยัง child |
| มันสามารถเปลี่ยนได้ไหม? | ใช่ ใช้ setState | ไม่ (อ่านเท่านั้น) |
| ใครควบคุมมัน? | Component เอง | Parent component |
| ตัวอย่าง | `const [name, setName] = useState()` | `<Child name="John" />` |

### 🔄 React Re-renders เมื่อ:
1. State เปลี่ยน (ใช้ `setState`)
2. Props เปลี่ยน
3. Parent component re-render

เมื่อ React re-render มันจะอัปเดตการแสดงผลเพื่อให้ตรงกับข้อมูลใหม่

### 🎪 รูปแบบ Callback
- Parent ส่ง function ไปยัง child เป็น prop
- Child เรียก function นั้นเพื่อส่งข้อมูลกลับ
- Parent รับข้อมูลใน function
- Parent อัปเดต state ด้วยข้อมูล

---

## เคล็ดลับการแก้ไขจำหน่ายสำหรับผู้เริ่มต้น

### 🐛 "หน้าไม่แสดงอะไรเลย"
- ตรวจสอบ browser console (F12 > Console tab)
- มองหาข้อความข้อผิดพลาดสีแดง
- ตรวจสอบให้แน่ใจว่า components ทั้งหมดนำเข้าอย่างถูกต้อง

### 🐛 "ข้อมูลไม่ได้อัปเดต"
- ตรวจสอบว่าคุณใช้ `setState` เพื่ออัปเดต state
- ตรวจสอบให้แน่ใจว่า component re-render (React DevTools สามารถช่วยได้)
- ตรวจสอบว่า props ถูกส่งลงมาอย่างถูกต้อง
- ใช้ `console.log()` เพื่อแก้ไขจำหน่าย:
```jsx
function Tower({ textFromInput }) {
  console.log("Tower ได้รับ:", textFromInput);
  return <Chamber textFromInput={textFromInput} />;
}
```

### 🐛 "ข้อความไม่ผ่านปราสาท"
- ติดตามตัว props: Outside → Castle → Tower → ... → SecretRoom
- ตรวจสอบให้แน่ใจว่าแต่ละ component ยอมรับและส่ง prop
- ใช้ `console.log()` เพื่อแก้ไขจำหน่าย:
```jsx
function Tower({ textFromInput }) {
  console.log("Tower ได้รับ:", textFromInput);
  return <Chamber textFromInput={textFromInput} />;
}
```

### 🐛 "Callback ไม่ทำงาน"
- ตรวจสอบว่า callback ถูกส่งลงไปทั้งหมดเป็น prop
- ตรวจสอบว่า component เรียก callback นั้นจริงๆ (ไม่ใช่ undefined)
- ตรวจสอบว่า callback ถูกเรียกด้วย `onCallbackName()`

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

## ทรัพยากรที่เป็นประโยชน์

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vite.dev
- **React Hooks Guide**: https://react.dev/reference/react

---

**ขอให้สนุกกับการเรียนรู้! 🎓 ปราสาทนี้คือสนามของคุณสำหรับการทำความเข้าใจ React! 🏰**
