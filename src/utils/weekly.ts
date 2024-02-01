// Essa função deve ficar no backend

export function obterNomeDiaSemana(numeroDoDia) {
  const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  return nomesDias[numeroDoDia % 7];
}

export function obterDiasDaSemanaProximos() {
  const diasDaSemana = [];
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay(); // Obtém o número do dia atual (0 a 6)
  let posicaoAtual = 0;

  for (let i = 0; i < 7; i++) {
    const indexDia = (diaAtual + i) % 7;
    const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + i);
    const dayActual = i === 0; // Marca apenas o dia atual
    const progresso = Math.floor(Math.random() * 101); // Gera um valor aleatório de progresso entre 0 e 100

    diasDaSemana[posicaoAtual] = {
      day: data.getDate(),
      name: obterNomeDiaSemana(indexDia),
      isSelected: dayActual,
      progress: progresso
    };

    posicaoAtual = (posicaoAtual + 1) % 7;
  }

  console.log("DIAS da semana", diasDaSemana)
  return diasDaSemana;
}


