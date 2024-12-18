B.class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// Inisialisasi data dan pemanggilan metode
try {
    const nilaiSiswa = new Nilai([80, 90, 100]); // Masukkan nilai yang diinginkan
    const rataRata = nilaiSiswa.hitungRataRata();
    console.log(Rata-rata nilai adalah: ${rataRata});
} catch (error) {
    console.log(Kesalahan: ${error.message});
}
