import { useState } from "react";

/* type ButtonProps = {
  text?: String;
}; */
export function Button() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return <button onClick={increment}>{counter}</button>;
}

// export default Button;
// Se eu exportar o button direto (isso se chama named export), caso eu mude o nome da função nao terei problemas caso precise renomeá-la.
// Porém ao mesmo tempo que eu nao uso o default export, quando eu for importar preciso utilizar as chaves {}
// para especificar o que eu estarei importando.
