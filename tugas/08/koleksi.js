// Menggunakan List (Array)
let listKaryawan = ["Maya", "Caca", "Andri", "Fery", "Kiky"];
listKaryawan.push("Fandi"); // Menambahkan elemen baru
console.log(listKaryawan); // Output: ["Budi", "Siti", "Agus", "Ani"]

// Menggunakan Set
let setKaryawan = new Set(["Maya", "Caca", "Andri", "Fery", "Kiky"]);
setKaryawan.add("Fandi");
setKaryawan.add("Maya"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setKaryawan); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapKPI = new Map();
mapKPI.set("Maya", 80);
mapKPI.set("Caca", 89);
console.log(mapKPI.get("Maya")); // Output: 90
