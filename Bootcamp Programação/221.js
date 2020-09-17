/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

/*
1 - Realizar leitura do arquivo e armazenar em memoria
2 - Ordenar em ordem alfabética
3 - Para cada nome, calcular seu SCORE
4 - Somar todos os scores
*/

var fs = require("fs");
fs.readFile("p022_names.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var nomes = data.split(",");
        nomes = nomes.sort();

        var maiorScore = 0;
        var nomeMaiorScore = "";

        var somaTotal = 0;
        for (var i = 0; i < nomes.length; i++) {
            //var nome = nomes[i].split('"')[1];            
            var nome = nomes[i];
            var soma = 0;            
            for (var j = 0; j < nome.length; j++) {                
                switch (nome[j]) {
                    case "A":
                        soma += 1;
                        break;
                    case "B":
                        soma += 2;
                        break;
                    case "C":
                        soma += 3;
                        break;
                    case "D":
                        soma += 4;
                        break;
                    case "E":
                        soma += 5;
                        break;
                    case "F":
                        soma += 6;
                        break;
                    case "G":
                        soma += 7;
                        break;
                    case "H":
                        soma += 8;
                        break;
                    case "I":
                        soma += 9;
                        break;
                    case "J":
                        soma += 10;
                        break;
                    case "K":
                        soma += 11;
                        break;
                    case "L":
                        soma += 12;
                        break;
                    case "M":
                        soma += 13;
                        break;
                    case "N":
                        soma += 14;
                        break;
                    case "O":
                        soma += 15;
                        break;
                    case "P":
                        soma += 16;
                        break;
                    case "Q":
                        soma += 17;
                        break;
                    case "R":
                        soma += 18;
                        break;
                    case "S":
                        soma += 19;
                        break;
                    case "T":
                        soma += 20;
                        break;
                    case "U":
                        soma += 21;
                        break;
                    case "V":
                        soma += 22;
                        break;
                    case "W":
                        soma += 23;
                        break;
                    case "X":
                        soma += 24;
                        break;
                    case "Y":
                        soma += 25;
                        break;
                    case "Z":
                        soma += 26;
                        break;
                }                
            }            
            var score = (soma * (i + 1));
            somaTotal += score;             

            if (score > maiorScore) {
                maiorScore = score;
                nomeMaiorScore = nomes[i];
            }
        }
        
        console.log(nomeMaiorScore + " " + maiorScore);
        console.log(somaTotal);
        //871198282
    }
});
