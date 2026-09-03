// // // 

// // //Faça um programa que apresente o menu de opções a seguir, 
// // // que permita ao usuário escolher a opção desejada, 
// // // receba os dados necessários para executar a operação e mostre o resultado. 
// // // Verificar a possibilidade de opção inválida e não se preocupar com as restrições, 
// // // como salário inválido.

// // // Menu de opções:

// // // - Novo salário
// // // - Férias
// // // - Décimo terceiro
// // // - Sair


// // let opcao = 0

// // while(opcao != 4){


// // opcao =  Number(prompt("MENU DE OPCOES \n" +
// //              "1. Novo salário. \n" +
// //              "2. Férias \n" +
// //              "3. Décimo terceiro \n" +
// //              "4. Sair \n" 
// //             ))


// // if(opcao === 1 ){

// //        let salario = Number(prompt("Digite o salário do funcionario"))
// //        let aumento;
// //        let novoSalario;
 
// //        if (salario <= 350)
// //             aumento = salario * 0.15
// //        else if  (salario <= 600)
// //             aumento = salario * 0.10
// //         else 
// //             aumento  = salario * 0.05

// //       novoSalario = salario + aumento

// //       console.log("Novo salário: " + novoSalario.toFixed(2))
// // }


// // else if (opcao == 2 ){
        
// //     let salario = Number(prompt("Digite o salário do funcionario"))
// //     let ferias;

// //     ferias = salario + (salario/2)
// //     console.log("Valor das férias: " + ferias.toFixed(2))
// // }

// // else if (opcao == 3){

// //         let salario = Number(prompt("Digite o salário do funcionario"))
// //         let meses = Number(prompt("Digite o numero de meses trabalhado"))
// //         let decimoTerceiro;

// //          decimoTerceiro = (salario * meses) / 12


// //         console.log("Valor das férias: " + ferias.toFixed(2))
// // }
// // else if (opcao == 4){
      
// //              alert("Programa encerrado!")     
// // }

// // else{

// //         alert("Opcao inválida! Digite uma opca de 1 a 4")
// // }  


// // }

// function novoSalario() {
//     const salario = parseFloat(prompt("Digite o salário atual: R$"));
//     let aumento;

//     if (salario <= 350.00) {
//         aumento = salario * 0.15;
//     } else if (salario <= 600.00) {
//         aumento = salario * 0.10;
//     } else {
//         aumento = salario * 0.05;
//     }

//     const novo = salario + aumento;
//     alert(`Novo salário: R$ ${novo.toFixed(2)}`);
// }

// function ferias() {
//     const salario = parseFloat(prompt("Digite o salário do funcionário: R$"));
//     const valorFerias = salario + (salario / 2);
//     alert(`Valor das férias: R$ ${valorFerias.toFixed(2)}`);
// }

// function decimoTerceiro() {
//     const salario = parseFloat(prompt("Digite o salário do funcionário: R$"));
//     const meses = parseInt(prompt("Digite o número de meses trabalhados (máx 12):"));
//     const valor = (salario * meses) / 12;
//     alert(`Valor do décimo terceiro: R$ ${valor.toFixed(2)}`);
// }

// function menu() {
//     let sair = false;

//     while (!sair) {
//         const opcao = prompt(
//             "===== MENU DE OPÇÕES =====\n" +
//             "1 - Novo salário\n" +
//             "2 - Férias\n" +
//             "3 - Décimo terceiro\n" +
//             "4 - Sair\n\n" +
//             "Digite a opção desejada:"
//         );

//         switch (opcao) {
//             case "1":
//                 novoSalario();
//                 break;
//             case "2":
//                 ferias();
//                 break;
//             case "3":
//                 decimoTerceiro();
//                 break;
//             case "4":
//                 alert("Saindo do programa...");
//                 sair = true;
//                 break;
//             default:
//                 alert("Opção inválida! Tente novamente.");
//         }
//     }
// }

// menu();
// menu();
// menu();





   


