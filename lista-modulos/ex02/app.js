import aplicarDesconto from "./aplicarDesconto.js";

 const precoOriginal = 120
 const precoComDesconto = aplicarDesconto(precoOriginal,10)

 console.log(`Preco original: R$ ${precoOriginal}`)
 console.log(`Preco com 10% de seconto: R$ ${precoComDesconto}`)