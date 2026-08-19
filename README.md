# Castle Rooms

โปรเจกต์ React สำหรับจำลองการสื่อสารระหว่างห้องต่าง ๆ ในปราสาท โดยใช้ Context API เป็นตัวกลางเก็บข้อความร่วมกัน

## การทำงานหลัก

- `MessageProvider` เก็บข้อความจาก Outside (`inputText`) และ SecretRoom (`secretText`)
- ห้องต่าง ๆ อ่านและแก้ไขข้อความร่วมกันผ่าน `MessageContext`
- ถ้าพิมพ์ `off`, `turnoff` หรือ `turn off` จาก Outside ห้อง SecretRoom จะมืดลง
- ถ้าพิมพ์คำสั่งเดียวกันจาก SecretRoom บริเวณ Outside จะมืดลง
- เอฟเฟกต์ความมืดใช้ overlay สีดำโปร่งใสและค่อย ๆ เปลี่ยนด้วย CSS transition

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

จากนั้นเปิด URL ที่ Vite แสดงใน terminal

## คำสั่งที่ใช้ได้

- `npm run dev` เริ่ม development server
- `npm run build` สร้าง production build
- `npm run preview` preview production build
- `npm run lint` ตรวจสอบโค้ดด้วย ESLint

## โครงสร้างสำคัญ

```text
src/
├─ App.jsx
├─ main.jsx
├─ components/
│  ├─ 00Outside.jsx
│  ├─ 01Castle.jsx
│  ├─ ...
│  └─ 09SecretRoom.jsx
└─ context/
   ├─ MessageContext.jsx
   └─ MessageProvider.jsx
```
