import { useHistory } from "react-router";

import { illustrationImg, logoImg, googleImg } from "../assets/images";

import { Button } from "../Components/Button";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory(); // Every function that starts with "use..." needs to be inside the component. Those are called Hooks

  function NavigateToNewRoom() {
    history.push("/rooms/new");
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Simbolizando perguntas e respostas" />
        <strong>Crie salade de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={NavigateToNewRoom} className="create-room">
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
