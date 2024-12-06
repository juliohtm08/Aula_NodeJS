/* 
Componentes:

1.Call Stack (Pilha de chamadas) => Responsável por rastrear as funções em execução e guardando para serem chamadas.
    *A última função que entrou na pilha será a primeira a ser execudada e vice-versa. 
*/

//exemplo:
function greet() {
    return "hello";
}
function respond() {
    return setTimeout(() => {
        return "Hey!";
    }, 1000);
}

greet(); // Última função a entrar na pilha e primeira a ser executada
respond(); // primeira função a ser chamada na pilha, após o setTimout() ser concluído a função respond() será executada

/* 
    2.Callback Queue (Fila de Callbacks) => Armazena as funções a serem executadas quando o Call Stack estiver vazio.

    3.Event Loop => Coordena a transferência de funções da Callback Queue par a Call Stack.
*/
