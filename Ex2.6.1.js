const alunos = [
    {
      nome: 'Mathias',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'Luiza',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'Pedro',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 10 },
      ],
    }
  ]

  const alunosComMedia = alunos.map(aluno => {
    const somaNotas = aluno.notas.reduce((acumulador, nota) => acumulador + nota.nota, 0);
    const media = somaNotas / aluno.notas.length;
    return {
      ...aluno,
      mediaGeral: media,
    };
  });
  
  console.log(alunosComMedia);
  