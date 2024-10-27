let listKaryawan = ["Maya", "Caca", "Andri", "Fery", "Kiky"];
listKaryawan.push("Fandi"); 
console.log(listKaryawan); 

let setKaryawan = new Set(["Maya", "Caca", "Andri", "Fery", "Kiky"]);
setKaryawan.add("Fandi");
setKaryawan.add("Maya");
console.log(setKaryawan); 

let mapKPI = new Map();
mapKPI.set("Maya", 80);
mapKPI.set("Caca", 89);
console.log(mapKPI.get("Maya")); 
