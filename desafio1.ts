// Resposta Criada 
function user(name: string, code: number) {
    let employee = {
        name: name,
        code: code
    };

    return employee;
}

console.log(user('João', 10));


// Respostas Corrigidas

// / RESPOSTA 1
const funcionario = {
    code: 10,
    name: 'João'
};

// / RESPOSTA 2
const funcionario2: {code: number, name: string} = {
    name: 'João',
    code: 10
};

// / RESPOSTA 3
interface Funcionario {
    name: string;
    code: number;
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.name = 'João';
funcionarioObj.code = 10;

// / RESPOSTA 4
// É utilizada a interface Funcionario
const funcionarioObj2: Funcionario = {
    name: 'João',
    code: 10
};