import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: ButtonProps) {
  // todas as propriedades que eu receber, vou repassar para **

  return (
    <button className="button" {...props} /> // ** este botão aqui
  ); //spread operator para distribuir cada propriedade do botão
}

// export default Button;
// Se eu exportar o button direto (isso se chama named export), caso eu mude o nome da função nao terei problemas caso precise renomeá-la.
// Porém ao mesmo tempo que eu nao uso o default export, quando eu for importar preciso utilizar as chaves {}
// para especificar o que eu estarei importando.
