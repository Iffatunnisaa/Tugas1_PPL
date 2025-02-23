// Kalkulator sederhana
const mathFunctions = require('./solution');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n=== KALKULATOR SEDERHANA ===");
    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("5. Pangkat");
    console.log("6. Faktorial");
    console.log("7. Cek Bilangan Prima");
    console.log("8. Modulus");
    console.log("9. Nilai Absolut");
    console.log("10. Nilai Maksimum");
    console.log("11. Nilai Minimum");
    console.log("12. Pembulatan");
    console.log("0. Keluar");
    rl.question("Pilih operasi (0-12): ", handleMenu);
}

function handleMenu(choice) {
    if (choice === '0') {
        console.log("Terima kasih telah menggunakan kalkulator!");
        rl.close();
        return;
    }

    let a, b;
    switch (choice) {
        case '1':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.tambah(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '2':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.kurang(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '3':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.kali(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '4':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.bagi(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '5':
            rl.question("Masukkan angka basis: ", (num1) => {
                rl.question("Masukkan pangkat: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.pangkat(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '6':
            rl.question("Masukkan angka: ", (num) => {
                console.log("Hasil: ", mathFunctions.faktorial(Number(num)));
                showMenu();
            });
            break;
        case '7':
            rl.question("Masukkan angka: ", (num) => {
                console.log("Hasil: ", mathFunctions.isPrima(Number(num)));
                showMenu();
            });
            break;
        case '8':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.modulus(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '9':
            rl.question("Masukkan angka: ", (num) => {
                console.log("Hasil: ", mathFunctions.absolut(Number(num)));
                showMenu();
            });
            break;
        case '10':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.maksimum(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '11':
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    console.log("Hasil: ", mathFunctions.minimum(Number(num1), Number(num2)));
                    showMenu();
                });
            });
            break;
        case '12':
            rl.question("Masukkan angka: ", (num) => {
                console.log("Hasil: ", mathFunctions.bulatkan(Number(num)));
                showMenu();
            });
            break;
        default:
            console.log("Pilihan tidak valid!");
            showMenu();
    }
}

showMenu();