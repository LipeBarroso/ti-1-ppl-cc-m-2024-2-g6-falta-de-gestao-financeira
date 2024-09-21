# Introdução

* **Projeto:** ***Falta de Gestão financeira***
* **Repositório GitHub:** [Grupo 6 - Falta de Gestão Financeira](https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-2024-2-g6-falta-de-gestao-financeira)
* **Membros da equipe:**
  * [Adriano Araújo Domingos dos Santos](https://github.com/adrianoaraujods)
  * [Filipe Nery Rabelo](https://github.com/Filnr)
  * [Gabriel Corrêa Costa](https://github.com/Gabriel00110)
  * [Nikolas Petrick Castro Mendes](https://github.com/nickmiyah)
  * [Rondinelly Martins Silva ](https://github.com/Rondi17)
  * [Victor Rabelo Souza](https://github.com/VictorRS7)



A documentação do projeto é estruturada da seguinte forma:

- [Introdução](#introdução)
- [Contexto](#contexto)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Product Discovery](#product-discovery)
  - [Etapa de Entendimento](#etapa-de-entendimento)
      - [Matriz CSD:](#matriz-csd)
      - [Mapa de Stakeholders:](#mapa-de-stakeholders)
      - [Entrevistas qualitativas](#entrevistas-qualitativas)
      - [Highlight de pesquisa](#highlight-de-pesquisa)
  - [Etapa de Definição](#etapa-de-definição)
    - [Personas](#personas)
      - [João Silva Pereira](#joão-silva-pereira)
      - [Marcos Costa](#marcos-costa)
      - [Anna Ribeiro](#anna-ribeiro)
- [Product Design](#product-design)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Proposta de Valor](#proposta-de-valor)
      - [Proposta de valor para Persona 1](#proposta-de-valor-para-persona-1)
      - [Proposta de valor para Persona 2](#proposta-de-valor-para-persona-2)
      - [Proposta de valor para Persona 3](#proposta-de-valor-para-persona-3)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Projeto de Interface](#projeto-de-interface)
    - [Wireframes](#wireframes)
      - [Login](#login)
      - [Criar Conta](#criar-conta)
      - [Registros](#registros)
      - [Adicionar Registro](#adicionar-registro)
      - [Criar Categoria](#criar-categoria)
      - [NavBar Menu](#navbar-menu)
      - [Evolução](#evolução)
      - [Metas](#metas)
      - [Criar Meta](#criar-meta)
      - [Editar Meta](#editar-meta)
    - [User Flow](#user-flow)
    - [Protótipo Interativo](#protótipo-interativo)
- [Metodologia](#metodologia)
  - [Ferramentas](#ferramentas)
  - [Gerenciamento do Projeto](#gerenciamento-do-projeto)
- [Solução Implementada](#solução-implementada)
  - [Vídeo do Projeto](#vídeo-do-projeto)
  - [Funcionalidades](#funcionalidades)
        - [Funcionalidade 1 - Cadastro de Contatos ⚠️ EXEMPLO ⚠️](#funcionalidade-1---cadastro-de-contatos-️-exemplo-️)
  - [Estruturas de Dados](#estruturas-de-dados)
        - [Estrutura de Dados - Contatos   ⚠️ EXEMPLO ⚠️](#estrutura-de-dados---contatos---️-exemplo-️)
        - [Estrutura de Dados - Usuários  ⚠️ EXEMPLO ⚠️](#estrutura-de-dados---usuários--️-exemplo-️)
  - [Módulos e APIs](#módulos-e-apis)
- [Referências](#referências)

✅ [Documentação de Design Thinking (MIRO)](files/processo-dt.pdf)

# Contexto

A falta de gestão financeira pessoal é um problema crescente, especialmente com o aumento da acessibilidade ao crédito e ao consumo digital. Muitas pessoas enfrentam dificuldades para gerenciar suas finanças de forma adequada, o que resulta em gastos impulsivos, falta de planejamento e endividamento. Essa situação torna difícil para grande parte da população manter uma visão clara e realista de seus ganhos e despesas.



## Problema

A falta de gestão financeira pessoal é um problema crescente, que afeta grande parte da população. Muitas pessoas têm dificuldade em controlar suas finanças, o que resulta em um desequilíbrio financeiro. Isso pode levar ao acúmulo de dívidas, compras impulsivas e gastos desnecessários, prejudicando o planejamento a longo prazo. A ausência de ferramentas acessíveis e de uma educação financeira eficiente contribui para que esses problemas se perpetuem, afetando diretamente a qualidade de vida e a estabilidade financeira das pessoas.



## Objetivos

Nosso objetivo é desenvolver um software educativo, com ferramentas que ensine o usuário a estebelecer uma educação financeira eficiente, identificando os principais pontos onde deve mudar, bem como estebelecer metas de economia e limite de gastos.



## Justificativa

Nós identificamos que grande parte das pessoas possuem dificuldade na gestão do próprio dinheiro. O uso do cartão de crédito aliado à práticas ruins, como inscrição em serviços de assinatura mensal(spotify, netflix, amazon, youtube premium, etc...) e também compras impulsivas de itens superfluos na internet, dentre outras, são fatores que dificultam a organização do dinheiro gasto. Isso tem como consequência o endividamento de muitas pessoas, que acabam vivendo no limite da sua renda.



## Público-Alvo

As pessoas que relatam ter maior dificuldade para gerir seu dinheiro, são os das [gerações Y e Z](https://pontaltech.com.br/blog/marketing/geracoes-x-y-z-alpha-beta/), visto que os mais velhos ainda utilizam bastante dinheiro físico, e tem maior rigor com seus gastos. Jovens e adultos entre 20 e 45 anos são os principais afetados por esse problema.



# Product Discovery

## Etapa de Entendimento

#### Matriz CSD:
![Matriz CSD](./images/MiroImages/MatrizCSD.png)
#### Mapa de Stakeholders:
![Mapa de Stakeholders](./images/MiroImages/MapaStakeholders.png)
#### Entrevistas qualitativas
![Entrevista Qualitativa](./images/MiroImages/EntrevistaQualitativa.png)
#### Highlight de pesquisa
![Highlights de Pesquisa](./images/MiroImages/HighlightsPesquisa.png)


## Etapa de Definição

### Personas

#### João Silva Pereira
![João Silva Pereira](./images/MiroImages/Persona1.png)
<br>

#### Marcos Costa
![Marcos Costa](./images/MiroImages/Persona2.png)
<br>

#### Anna Ribeiro
![Anna Ribeiro](./images/MiroImages/Persona3.png)



# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO... | QUERO/PRECISO ...        | PARA ...               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Endividado  | - Mais dinheiro <br> - Uma forma de organizar minhas finanças| - Quitar minhas dívidas <br> - Ter mais dinheiro <br> - Não me endividar             |
| Consumista         | - Cancelar assinaturas de pouco uso <br> - Diminuir compras banais <br> - Criar limite de gastos no cartão     | - Diminuir gastos <br> - Ter autocontrole <br> - Diminuir a culpa de compras supérfluas |
| Trabalhador  | - Mais dinheiro <br> - Diminuir gastos <br> - Não gastar além do meu salário | - Não endividar <br> - Construir uma reserva de emergência <br> - Ter uma boa saúde financeira |
| Funcionário | - Aumento salarial <br> - Renda extra <br> - Reserva de emergência | - Ter estabilidade financeira <br> - Ajudar em casa |
| Pai | - Estabelecer limites de compras para meus filhos <br> - Definir metas de investimentos e/ou economia <br> - Acompanhar melhor os gastos familiares | - Sobrar dinheiro para uma viagem <br> - Ficar mais tranquilo quanto às despezas |
| Estudante | - Economizar | - O dinheiro não ser um obstáculo aos meus estudos  |



## Proposta de Valor

#### Proposta de valor para Persona 1
![Proposta de valor persona 1](./images/MiroImages/PropostaValorPersona1.png)
<br>

#### Proposta de valor para Persona 2
![Proposta de valor persona 2](./images/MiroImages/ProportaValorPersona2.png)
<br>

#### Proposta de valor para Persona 3
![Proposta de valor persona 3](./images/MiroImages/PropostaValorPersona3.png)
<br>

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                   | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | Anotar receitas e despesas, com possibilidade de categorização. | ALTA       |
| RF-002 | Visualizar todas as entradas e saídas registradas. | MÉDIA     |
| RF-003 | Definir metas e objetivos de economias, podendo estipular a quantidade e a duração. |  |
| RF-004 | Definir um limite de gasto, e verificar se está dentro dele. |  |
| RF-005 | Projeções de valores economizados, um gráfico mostrando o valor que será economizado em relação ao tempo. |  |
| RF-006 | Comparação entre intervalos de tempo, meses, semanas e anos. |  |
| RF-007 | . Área de ensino, disponibilizando conteúdo sobre economia e saúde financeira. |  |
| RF-008 | Definição de receitas e despesas recorrentes de forma automática. |  |
| RF-009 | Importar dados de planilhas (arquivos .csv) |  |
| RF-010 | Exportar dados para arquivo .csv |  |

### Requisitos não Funcionais

| ID    | Descrição do Requisito                                                              | Prioridade |
| ------- | ------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | Sistema de conta, com acesso através de credenciais. |      |
| RNF-002 | Disponibilidade 24 horas, todos os dias da semana. |       |
| RNF-003 | Acesso gratuito, salvo recursos que indicam o contrário. |  |
| RNF-004 | Aplicação Web, possibilitando o uso em qualquer dispositivo e em qualquer hora e local com acesso à internet. |  |



## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.

#### Login
<img src='images/FigmaImages/LoginPage.jpg' alt='Login' width='300' height='550'>

#### Criar Conta
<img src='images/FigmaImages/CriarConta.jpg' alt='Criar conta' width='300' height='550'>

#### Registros
<img src='images/FigmaImages/Registros.jpg' alt='Registros' width='300' height='550'>

#### Adicionar Registro
<img src='images/FigmaImages/AdicionarRegistro.jpg' alt='Adicionar Registro' width='300' height='550'>

#### Criar Categoria
<img src='images/FigmaImages/CriarCategoria.jpg' alt='Criar categoria' width='300' height='550'>

#### NavBar Menu
<img src='images/FigmaImages/NavBar.jpg' alt='NavBar' width='300' height='550'>

#### Evolução
<img src='images/FigmaImages/Evolução.jpg' alt='Evolução' width='300' height='550'>

#### Metas
<img src='images/FigmaImages/Metas.jpg' alt='Metas' width='300' height='550'>

#### Criar Meta
<img src='images/FigmaImages/CriarMeta.jpg' alt='Criar Meta' width='300' height='550'>

#### Editar Meta
<img src='images/FigmaImages/EditarMeta.jpg' alt='Editar Meta' width='300' height='550'>

### User Flow

![Userflow](images/FigmaImages/Userflow.png)



### Protótipo Interativo

**✳️✳️✳️ COLOQUE AQUI UM IFRAME COM SEU PROTÓTIPO INTERATIVO ✳️✳️✳️**

✅ [Protótipo Interativo (MarvelApp)](https://marvelapp.com/prototype/4hd6091?emb=1&iosapp=false&frameless=false)  ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Um protótipo interativo apresenta o projeto de interfaces e permite ao usuário navegar pelas funcionalidades como se estivesse lidando com o software pronto. Utilize as mesmas ferramentas de construção de wireframes para montagem do seu protótipo interativo. Inclua o link para o protótipo interativo do projeto.

# Metodologia

Usamos a metodologia de divisão de tarefas e encontros regulares para alinhamento do andamento do projeto. Durante as reuniões houve a divisão dos papeis de cada um conforme a aptidão de cada integrante do grupo.

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/app/board/uXjVKn-VohI=/           |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-2024-2-g6-falta-de-gestao-financeira    |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo       | MarvelApp  | https://marvelapp.com/XXXXXXX ⚠️ EXEMPLO ⚠️   |
|                             |            |                                                    |

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Liste as ferramentas empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível. Inclua itens como: (1) Editor de código, (2) )ferramentas de comunicação, (3) )ferramentas de diagramação, (4) )plataformas de hospedagem, entre outras.

## Gerenciamento do Projeto

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).

![Exemplo de Kanban](images/exemplo-kanban.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
>
> **Orientações**:
>
> - [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
> - [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
> - [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

# Solução Implementada

Esta seção apresenta todos os detalhes da solução criada no projeto.

## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução. ⚠️ EXEMPLO ⚠️

[![Vídeo do projeto](images/video.png)](https://www.youtube.com/embed/70gGoFyGeqQ)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> O video de apresentação é voltado para que o público externo possa conhecer a solução. O formato é livre, sendo importante que seja apresentado o problema e a solução numa linguagem descomplicada e direta.
>
> Inclua um link para o vídeo do projeto.

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.Info

##### Funcionalidade 1 - Cadastro de Contatos ⚠️ EXEMPLO ⚠️

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Contatos](#ti_ed_contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Cadastros
  * Em seguida, escolha a opção Contatos
* **Tela da funcionalidade**:

![Tela de Funcionalidade](images/exemplo-funcionalidade.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) titulos e descrição da funcionalidade; (2) Estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

## Estruturas de Dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info

##### Estrutura de Dados - Contatos   ⚠️ EXEMPLO ⚠️

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de Dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente as estruturas de dados utilizadas na solução tanto para dados utilizados na essência da aplicação quanto outras estruturas que foram criadas para algum tipo de configuração
>
> Nomeie a estrutura, coloque uma descrição sucinta e apresente um exemplo em formato JSON.
>
> **Orientações:**
>
> * [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
> * [Trabalhando com JSON - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

**Images**:

* Unsplash - [https://unsplash.com/](https://unsplash.com/) ⚠️ EXEMPLO ⚠️

**Fonts:**

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/) ⚠️ EXEMPLO ⚠️

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) Frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.

# Referências

As referências utilizadas no trabalho foram:

* SOBRENOME, Nome do autor. Título da obra. 8. ed. Cidade: Editora, 2000. 287 p ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
>
> **Orientações**:
>
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
