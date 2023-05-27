let CarroObject = new Object();
CarroObject.ano = new Date().getFullYear();
CarroObject.getAno = () => {
    return CarroObject.ano;
};
CarroObject.setAno = (ano) => {
    CarroObject.ano = ano;
};

CarroObject.cor = 'Branco';
CarroObject.getCor = () =>{
    return CarroObject.cor;
};
CarroObject.setCor = (cor) =>{
    CarroObject.cor = cor;
};

module.exports = CarroObject;