data_condition = [
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Você está agarrado",
        description: "Você está agarrado",
        reference: "PHB, pg. 290.",
        bullets: [
        "Seu deslocamento se torna 0, e você não pode se beneficiar de qualquer bônus em seu deslocamento.",
        "A condição encerra caso a criatura que o agarrou fique incapacitada.",
        "A condição também encerra caso você, por algum efeito, seja removido do alcance da criatura que o agarrou.",
        "A criatura que está agarrando só pode arrastar, puxar ou erguer um peso em kg até duas vezes a sua capacidade de carga (ou 15 vezes o seu valor de Força). Ao empurrar ou arrastar um peso superior a sua capacidade de carga, seu deslocamento é reduzido para 1,5 metro."
        ]
    },
    {
        title: "Amedrontado",
        icon: "sharp-smile",
        subtitle: "Você está amedrontado",
        description: "Você está amedrontado",
        reference: "PHB, pg. 290.",
        bullets: [
        "Você tem desvantagem em testes de habilidade e jogadas de ataque enquanto a fonte do seu medo estiver em sua linha de visão.",
        "Você não pode mover voluntariamente para uma posição que o faça terminar o turno mais próximo de sua fonte de medo do que sua posição inicial."
        ]
    },
    {
        title: "Atordoado",
        icon: "internal-injury",
        subtitle: "Você está atordoado",
        description: "Você está atordoado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você está incapacitado (veja a condição). Você não pode se mover e somente pode falar hesitantemente.",
            "Jogadas de ataque contra você têm vantagem.",
            "Você falha automaticamente em testes de resistência de Força ou Destreza."
        ]
    },
    {
        title: "Caído",
        icon: "crawl",
        subtitle: "Você está caído",
        description: "Você está caído",
        reference: "PHB, pg. 292.",
        bullets: [
            "Sua única opção de movimento é rastejar, a menos que se levante.",
            "Você tem desvantagem nas jogadas de ataque.",
"Jogadas de ataque contra você têm vantagem se o atacante estiver a 1,5 metro de você. De qualquer outra forma a jogada de ataque tem desvantagem."
        ]
    },
    {
        title: "Cego",
        icon: "one-eyed",
        subtitle: "Você não pode enxergar",
        description: "Você não pode enxergar",
        reference: "PHB, pg. 290.",
        bullets: [
        "Você falha automaticamente em qualquer teste de habilidade que requeira o uso da visão.",
        "Você tem desvantagem em suas jogadas de ataque.",
        "Jogadas de ataque contra você têm vantagem."
        ]
    },
    {
        title: "Enfeitiçado",
        icon: "smitten",
        subtitle: "Você está enfeitiçado",
        description: "Você está enfeitiçado por outra criatura",
        reference: "PHB, pg. 290.",
        bullets: [
        "Você não pode atacar quem o enfeitiçou ou tê-lo como alvo de habilidades ou efeitos mágicos nocivos.",
        "Quem o enfeitiçou possui vantagem em testes de habilidade feitos para interagir socialmente com você."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Você está envenenado",
        description: "Você está envenenado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você tem desvantagem em jogadas de ataque e testes de habilidade."
        ]
    },
    {
        title: "Exaustão",
        icon: "crawl",
        subtitle: "Você está exausto",
        description: "Exaustão é medida em seis níveis",
        reference: "PHB, pg. 291.",
        bullets: [
        "<table><tr><th>Nível</th><th></th><th></th><th style='text-align:left'>Efeito</th></tr><tr><td>1</td><td></td><td></td><td>Desvantagem em testes de habilidade</td></tr><tr><td>2</td><td></td><td></td><td>Deslocamento reduzido à metade</td></tr><tr><td>3</td><td></td><td></td><td>Desvantagem nas jogadas de ataque e testes de resistência</td></tr><tr><td>4</td><td></td><td></td><td>Máximo de pontos de vida reduzido à metade</td></tr><tr><td>5</td><td></td><td></td><td>Deslocamento reduzido à 0</td></tr><tr><td>6</td><td></td><td></td><td>Morte</td></tr></table>",
        "Você sofre o efeito do nível atual de exaustão juntamente com todos os níveis anteriores.",
        "Terminar um descanso longo reduz a exaustão em 1 nível, contanto que você também tenha ingerido um pouco de água e comida."
        ]
    },
    {
        title: "Impedido",
        icon: "imprisoned",
        subtitle: "Você está impedido",
        description: "Você está impedido",
        reference: "PHB, pg. 292.",
        bullets: [
            "Seu deslocamento é reduzido a 0, e você não pode se beneficiar de qualquer bônus em seu deslocamento.",
            "Jogadas de ataque contra você têm vantagem.", 
            "Seus ataques têm desvantagem.",
            "Você tem desvantagem em testes de resistência de Destreza."            
            
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "Não realiza ações ou reações",
        description: "Você não pode realizar ações ou reações",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Você está inconsciente",
        description: "Você está inconsciente",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você está incapacitado (veja a condição). Você não pode se mover ou falar e não tem ciência de seus arredores.",
            "Você larga tudo que estiver segurando e fica caído.",
            "Jogadas de ataque contra você têm vantagem.",
            "Qualquer ataque que atinja você é um acerto crítico, se o atacante estiver a 1,5 metro de você.",
            "Você falha automaticamente em testes de resistência de Força ou Destreza."
            
        ]
    },
    {
        title: "Invisível",
        icon: "invisible",
        subtitle: "Você não pode ser visto",
        description: "Você não pode ser visto sem a ajuda de magia ou sentidos especiais",
        reference: "PHB, pg. 291.",
        bullets: [
        "Para o propósito de se esconder, você é considerado em área de escuridão densa.",
        "Você pode ser detectado por qualquer barulho que faça ou rastros que deixe.",
        "Você tem vantagem em jogadas de ataque.",
        "Ataques contra você têm desvantagem."
        ]
    },
    {
        title: "Paralisado",
        icon: "internal-injury",
        subtitle: "Você está paralisado",
        description: "Você não pode fazer nada",
        reference: "PHB, pg. 291.",
        bullets: [
            "Você está incapacitado (veja a condição) e não pode se mover ou falar.",
            "Ataques contra você têm vantagem.",
            "Qualquer ataque que atinja você é um acerto crítico, se o atacante estiver a 1,5 de você.",
            "Você falha automaticamente em teste de resistência de Força e Destreza."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Você é transformado em rocha",
        description: "Você está transformado, juntamente com todos os objetos não-mágicos que estiver vestindo ou carregando, em uma substância sólida e inanimada (geralmente rocha)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Seu peso é multiplicado por dez, e você para de envelhecer.",
            "Você está incapacitado (veja a condição), não pode se mover ou falar, e não tem ciência de seus arredores.",
            "Jogadas de ataque contra você têm vantagem.",
            "Você falha automaticamente em testes de resistência de Força e Destreza.",
            "Você tem resistência a todos os tipos de dano",
            "Você é imune a veneno e doenças, embora um veneno ou doença previamente presente em seu sistema seja apenas suspenso, não neutralizado."
        ]
    },
    {
        title: "Surdo",
        icon: "elf-ear",
        subtitle: "Você não pode ouvir",
        description: "Você não pode ouvir",
        reference: "PHB, pg. 290.",
        bullets: [
        "Você falha automaticamente em qualquer teste de habilidade que requeira o uso da audição."
        ]
    }

]
