const task = require('./task');

task.methods(['get', 'post', 'put', 'delete']);

//retornar o novo registro atualizado e rodar as validações
task.updateOptions({new: true, runValidators: true});

module.exports = task;