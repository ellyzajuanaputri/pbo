function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [55, 60, 65, 70, 75, 80];
let kata = ["satu", "dua", "tiga", "empat", "lima", "enam"];

console.log(getElementAtIndex(angka, 5)); 
console.log(getElementAtIndex(kata, 4)); 
