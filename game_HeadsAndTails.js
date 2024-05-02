const readline = require('readline');
const fs = require('fs');
const readerStream = fs.createReadStream('namber.json')

const writerStr = fs.createWriteStream('log.txt', { flags: 'a' });

let namberUser = '';
readerStream
.setEncoding('UTF8')
.on('data', (chank) =>{
  namberUser += chank
})

const randomNumber = Math.floor(Math.random() * 2) + 1;
const newNumber = randomNumber;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let newResult = '';

function askQuestion() {
  rl.question('Загадано число в диапазоне от 1 (орел) до 2 (решка)', (answer) => {
    if (parseInt(answer) === newNumber) {
      console.log(`Вы выйграли, загаданное число: ${newNumber}`);
      newResult = 'Выигрыш';
    } else {
      console.log(`Вы проиграли, загаданное число: ${newNumber}`);
      newResult = 'Проигрыш';
    }
    rl.close();
    log(newResult);
  });
}

askQuestion();

function log(){
  const content = `${newResult}\n`
  writerStr.write(content, 'UTF8')
};