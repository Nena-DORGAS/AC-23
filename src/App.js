import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>O Que é REACT?</h1>
        É uma biblioteca javascript, com o react existe uma liberdade na utilização, sem ter uma estrutura fixa pra trabalhar, é um pool de ferramentas que sempre trabalha no front-end. Foi criada pelo facebook, com páginas SPA e não é chamado de framework pois não precisa se encaixar nos padrões de modelos de campos das tabelas.
        <h2>O Que é SPA?</h2>
        Single Page Applications (SPA) são aplicações cuja funcionalidade está concentrada em uma única página. Ao invés de recarregar toda a página ou redirecionar o usuário para uma página nova, só o conteúdo principal é atualizado de forma,mantendo toda a estrutura da página estática.
        <h3>Pra que serve NPX no REACT?</h3>
        O npx também é uma ferramenta de interface de linha de comando, sua função é facilitar a instalação e o gerenciamento de dependências hospedadas no registro do npm. Agora, é muito fácil executar qualquer tipo de executável com base no Node. js que você instalaria normalmente por meio do npm.
        </p>

        <h4>Enzo Segatto e Douglas Benitah</h4>
         <p>
          <div class="coluna">
          <div class = "esquerda">
          <h5>Enzo Segatto</h5>
            Verde <br></br>
            Aclimação <br></br>
            Matue <br></br>
            17 <br></br>
              </div>
              <div class = "direita">
            <h5>Douglas Benitah</h5>
            Verde <br></br>
            Aclimação <br></br>
            Matue <br></br>
            17 <br></br>
   
           </div>
          </div>
         </p>
        </header>
        <main>

        </main>
    </div>
  );
}

export default App;
