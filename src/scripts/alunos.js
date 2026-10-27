const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alunos = [];

class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

async function perguntarNumero(mensagem) {
    while (true) {
        const resposta = (await rl.question(mensagem)).trim();
        const numero = Number(resposta.replace(",", "."));

        if (resposta !== "" && Number.isFinite(numero)) {
            return numero;
        }

        console.log("Digite um número válido.");
    }
}

async function perguntarQuantidade() {
    while (true) {
        const quantidade = await perguntarNumero("Quantos alunos deseja registrar? ");

        if (Number.isInteger(quantidade) && quantidade > 0) {
            return quantidade;
        }

        console.log("Digite um número inteiro maior que zero.");
    }
}

async function perguntarNome() {
    while (true) {
        const nome = (await rl.question("Nome do aluno: ")).trim();

        if (nome !== "") {
            return nome;
        }

        console.log("O nome não pode ficar vazio.");
    }
}

function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter((aluno) => aluno.nota >= 6);
}

async function registrarAlunos() {
    try {
        const quantidade = await perguntarQuantidade();

        for (let i = 0; i < quantidade; i++) {
            console.log(`\nCadastro do aluno ${i + 1} de ${quantidade}`);
            const nome = await perguntarNome();
            const nota = await perguntarNumero("Nota do aluno: ");

            alunos.push(new Aluno(nome, nota));
        }

        const aprovados = filtrarAprovados(alunos);
        console.log("\nAlunos com nota maior ou igual a 6:");

        if (aprovados.length === 0) {
            console.log("Nenhum aluno atingiu a nota mínima.");
            return;
        }

        for (const aluno of aprovados) {
            console.log(`${aluno.nome}: ${aluno.nota}`);
        }
    } finally {
        rl.close();
    }
}

registrarAlunos().catch((erro) => {
    console.error("Não foi possível concluir o cadastro:", erro);
    process.exitCode = 1;
});
