// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

// 1 - Realizar leitura do arquivo e armazenar em memória
// 2 - Ordenar alfabeticamente
// 3 - Para cada nome, calcular o SCORE
// 4 - Somar todos os scores

var fs = require('fs');
fs.readFile('names.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    var names = data.split(',');
    names = names.sort();
    //console.log(names);

    var maxScore = 0;
    var nameMaxScore = '';

    var sumTotal = 0;
    for (i = 0; i < names.length; i++) {
      // var name = names[i].split('"')[1];
      var name = names[i];
      var sum = 0;
      for (var j = 0; j < name.length - 1; j++) {
        switch (name[j]) {
          case '"':
            break;
          case 'A':
            sum += 1;
            break;
          case 'B':
            sum += 2;
            break;
          case 'C':
            sum += 3;
            break;
          case 'D':
            sum += 4;
            break;
          case 'E':
            sum += 5;
            break;
          case 'F':
            sum += 6;
            break;
          case 'G':
            sum += 7;
            break;
          case 'H':
            sum += 8;
            break;
          case 'I':
            sum += 9;
            break;
          case 'J':
            sum += 10;
            break;
          case 'K':
            sum += 11;
            break;
          case 'L':
            sum += 12;
            break;
          case 'M':
            sum += 13;
            break;
          case 'N':
            sum += 14;
            break;
          case 'O':
            sum += 15;
            break;
          case 'P':
            sum += 16;
            break;
          case 'Q':
            sum += 17;
            break;
          case 'R':
            sum += 18;
            break;
          case 'S':
            sum += 19;
            break;
          case 'T':
            sum += 20;
            break;
          case 'U':
            sum += 21;
            break;
          case 'V':
            sum += 22;
            break;
          case 'W':
            sum += 23;
            break;
          case 'X':
            sum += 24;
            break;
          case 'Y':
            sum += 25;
            break;
          case 'Z':
            sum += 26;
            break;
        }
      }
      var score = sum * (i + 1);
      sumTotal += score;

      if (score > maxScore) {
        maxScore = score;
        nameMaxScore = names[i];
      }
      //if (score >)
    }
    console.log(nameMaxScore + ' - ' + maxScore);
    console.log(sumTotal);
  }
});
