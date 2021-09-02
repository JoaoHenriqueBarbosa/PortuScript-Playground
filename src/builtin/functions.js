const functions = `
const escrevaEmTabela = (...args) => console.table("psLog", ...args);
const escreva = (...args) => console.log("psLog", ...args);
const alerta = (...args) => alert(...args);
const leia = (...args) => prompt(...args);
const confirma = (...args) => confirm(...args);
`;

export default functions;