function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
        return null; // Mengembalikan null jika terjadi kesalahan
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Penggunaan fungsi bagi
const hasil1 = bagi(21, 7); // Output: 5
console.log(hasil1); // Menampilkan hasil: 5

const hasil2 = bagi(21, 0); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.
                             //         Operasi pembagian selesai.
console.log(hasil2); // Menampilkan hasil: null
