import { readFile, unlink, writeFile } from "node:fs/promises"
import { encode } from "node:querystring";

const exec = async () => {
    // Escrevendo o conteúdo do Arquivo...
    // const list = ["Flavio", "Rafaela","Charlotte", "Henrique", "Marilene"];
    // const listTxt = list.join("\n");
    // await writeFile('./novo.txt', listTxt);

    // Lendo o conteúdo do Arquivo...
    // const contentText = (await readFile('./novo.txt', { encoding: "utf8" })).split("\n")
    // console.log(contentText)

    // Editando o conteúdo do arquivo...
    // const fileName = "./novo.txt"
    // const content = await readFile(fileName, { encoding: 'utf8' })
    // const listContent = content.split("\n");
    // listContent.push("Fabio");
    // const newList = listContent.join("\n");
    // await writeFile(fileName, newList)
    // console.log(newList)

    // Excluindo o Arquivo local (apaga qualquer arquivo do repositório) --- Usar com CUIDADO!
    // await unlink('./novo.txt')
}

exec();































// import { readFile, writeFile } from "node:fs/promises";

// const exec = async () => {
    // const list = ["Flavio", "Rafaela", "Charlotte", "Henrique"];
    // const listTxt = list.join("\n");

    // await writeFile('./novo.txt', listTxt);

    // const fileContent = await readFile("./novo.txt", { encoding: 'utf8' })
    // const contatos = fileContent.split("\n")

    // contatos.push(fileContent);
    // console.log(contatos)
// }

// exec();