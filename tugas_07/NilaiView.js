class NilaiView {
    render(rataRata) {
        return Rata-rata nilai: ${rataRata};
    }

    renderError(error) {
        return Error: ${error};
    }
}

// Example usage in Node.js
const view = new NilaiView();

console.log(view.render(90)); // Output average value
console.log(view.renderError("Data nilai tidak valid.")); // Output error message
