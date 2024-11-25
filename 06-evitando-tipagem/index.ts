function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
  // ...
}

sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' });
sendSpaceship({ pilot: 'Han Solo' });
// Utilizando  o ?: para definir o tipo, tornamos não obrigatório o uso do parâmetro

let input: unknown;

input = 'Teste';
input = 0;
input = false;
// Unknown define o tipo apenas após recebe-lo

let input2: any;

input2 = 'Teste';
input2 = 0;
input2 = false;
// Any possibilita a atribuição de qualquer tipo
