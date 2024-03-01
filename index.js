const fs = require('fs').promises;
const inquirer = require('inquirer');
const chalk = require('chalk')

//проверка корректности ответа
function correctnessResponse(answerUsers, answer) {
  if (answer === answerUsers) {
    return answerUsers;
  }
}

//выбор тем и возвращение пути к файлу темы
async function topics() {
  const func = await inquirer.prompt([
    {
      type: 'list',
      name: 'team',
      message: 'Какую тему вы хотите?',
      choices: ['Ты точно умный?', 'Или ты не очень?'],
    },
  ]);
  if (func.team === 'Ты точно умный?') {
    return './topics/marvel.txt';
  }
  return './topics/mems.txt';
}