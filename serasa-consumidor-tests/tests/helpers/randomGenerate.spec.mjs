function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomName() {
    const firstNames = ["Nicolas", "Maria", "Joana", "Carlos", "Julia", "Pedro", "Paulo", "Mariana"];
    const lastNames = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Almeida", "Costa", "Gomes", "Martins"];

    const firstName = getRandomElement(firstNames);
    // const lastName = getRandomElement(lastNames);

    // return `${firstName} ${lastName}`;
    return `${firstName}`;
}

function generateRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function generateRandomPassword(length) {
    let password = '';
    for (let i= 0; i < length; i++) {
        password += generateRandomNumber(0,9);
    }
    return password;
}

export {generateRandomPassword};
export {generateRandomName};
