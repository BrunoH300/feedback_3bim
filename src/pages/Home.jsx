import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";
import iconStarImg from "../assets/icon-star.svg";
import thankyouImg from "../assets/illustration-thank-you.svg";

let aparecerResultado = true

export function Home() {
  return (
   aparecerResultado === false ? (
    <CardContainer>
    <IconContainer>
      <img src={iconStarImg} alt="estrela" />
    </IconContainer>
    <h1>Como foi o atendimento?</h1>
    <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento.</p> 

    <ButtonContainer>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </ButtonContainer>

    <button>Enviar</button>
  </CardContainer>
   
  ) :(
    <CardContainer>
    <img src= {thankyouImg} alt="" />
    <ResultContainer>
      <p>Você selecionou 4 de 5</p>
    </ResultContainer>
    <h1>Obrigado!</h1>
    <p>Agradeçemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entar em contato!</p>
    </CardContainer>
   )
  );
}