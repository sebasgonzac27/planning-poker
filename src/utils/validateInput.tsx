export function validateInput(text: string) {
    // El texto tiene entre 5 y 20 caracteres, no puede tener caracteres especiales (_,.*#/-), maximo puede tener 3 numeros el nombre, y no puede contener solo numeros
    const errors: string[] = [];
    if (text.length < 5) {
        errors.push('El nombre de la partida debe tener al menos 5 caracteres.');
    }
    if (text.length > 20) {
        errors.push('El nombre de la partida no debe tener más de 20 caracteres.');
    }
    if (text.match(/[_.*#/-]/)) {
        errors.push('El nombre de la partida no puede contener caracteres especiales.');
    }
    if ((text.match(/\d/g) ?? []).length > 3) {
        errors.push('El nombre de la partida no puede tener más de 3 números.');
    }
    return errors;
}