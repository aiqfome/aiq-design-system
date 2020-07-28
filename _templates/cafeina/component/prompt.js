module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Qual o nome do componente?'
  },
  {
    type: 'autocomplete',
    name: 'category',
    message: 'Qual a categoria do componente?',
    limit: 1,
    choices: ['atom', 'molecule', 'organism', 'template', 'page']
  }
]
