function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ linear search
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm เพราะ array ไม่ได้เรียงข้อมูล
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
   เป็น O(n) เพราะเป็นการ loop ผ่านสมาชิกทุกตัวใน array
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
