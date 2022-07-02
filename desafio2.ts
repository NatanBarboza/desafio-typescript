interface IPessoa {
    name: string;
    age: number;
    occupation: 'actress' | 'padeiro';
};

let pessoa1: IPessoa = {
    name: 'Maria',
    age: 29,
    occupation: 'actress'
};

let pessoa2: IPessoa = {
    name: 'Roberto',
    age: 19,
    occupation: 'padeiro'
};

let pessoa3: IPessoa = {
    name: 'Laura',
    age: 32,
    occupation: 'actress'
};

let pessoa4: IPessoa = {
    name: 'Carlos',
    age: 19,
    occupation: 'padeiro'
};