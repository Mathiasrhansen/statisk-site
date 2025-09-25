const ek = {
    studerende: {
        Mathias: {
            kursus: {
                tema7: { karakter: 10 },
                tema8: { karakter: 12}
            }
        },
        Lulu: {
            kursus: {
                tema7: { karakter: 4},
                tema8: { karakter: 2}
            }
        }
    }
}

console.log(ek.studerende.Mathias.kursus.tema7.karakter);
console.log(ek.studerende.Lulu.kursus.tema7.karakter);