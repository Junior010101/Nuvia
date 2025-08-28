<img src="https://github.com/Junior010101/Nuvia/blob/main/Frontend/src/assets/img/Favicon.png?raw=true" width="200" height="200" />

> Projeto acadêmico desenvolvido para o **Orgulho SESI**, com foco em **gestão, integração e acessibilidade**.  
> O sistema é **real e funcional**, construído em arquitetura monolítica modular.

![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)
![Version](https://img.shields.io/badge/version-0.1-blue)
![Stack](https://img.shields.io/badge/stack-Node.js%20%7C%20Express%20%7C%20MySQL%20%7C%20Angular-green)

---

## 📑 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Arquitetura](#-arquitetura)
- [Protótipo](#-protótipo)
- [Fluxograma](#-fluxograma)
- [Requisitos de Sistema](#-requisitos-de-sistema)
- [Como Executar](#-como-executar)
- [Equipe](#-equipe)
- [Licença](#-licença)

## 📖 Sobre o Projeto
O **Nuvia** é um **sistema integrado** que permite **cadastro, gerenciamento e consulta de informações** de forma simples e intuitiva.  
Ele foi desenvolvido em formato **monolito modular**, visando clareza, organização e escalabilidade.  

Este projeto é parte do **Orgulho de ser SESI** e foi totalmente implementado e demonstrado em ambiente real.

---

## 🏗 Arquitetura

### Backend
- **Node.js** com **Express**  
- Banco de dados **MySQL**  
- Estrutura monolítica organizada em camadas:  
  - `config/` → conexão com banco  
  - `controllers/` → lógica de entrada/saída  
  - `modules/` → camada de negócio (services, models)  
  - `middleware/` → validações e autenticação  
  - `utils/` → funções auxiliares  
  - `server.ts` → ponto de entrada  

### Frontend
- **Angular 20** + **Bootstrap 5** + **Tailwind 4**
- Requisitos Funcionais:  
  - [ ] Login  
  - [ ] Cadastro de usuários  
  - [ ] Autenticação com tratamento de erros  
  - [ ] Tela principal  
  - [ ] Atividades  
  - [ ] Jogos  
  - [ ] Material didático  
  - [ ] Feedback  

---

## 🎨 Protótipo

Protótipo inicial criado no **Figma**, representando o fluxo e design da interface:  

[![Figma](https://img.shields.io/badge/Figma-View-blue?logo=figma)](https://www.figma.com/design/gdpUL4jo7zat9q4YVNgPJm/Nuvia?m=auto&t=GPzbP8Z7V2SMTxTA-6)

## 🔀 Fluxograma

Fluxograma do sistema, detalhando o fluxo de usuários e dados:  

[![Figma](https://img.shields.io/badge/Figma-View-blue?logo=figma)](https://www.figma.com/board/K6uekkQey6R03ballExgLq/Fluxograma-Nuvia?t=GPzbP8Z7V2SMTxTA-6)


## 📂 Estrutura Backend
  ```bash
  src/
  ├── config/ # conexão com MySQL
  ├── controllers/ # lógica de cadastro (entrada/saída HTTP)
  ├── middleware/ # validações e autenticação
  ├── modules/ # camada de negócio (services, models)
  ├── utils/ # helpers
  └── server.ts # ponto de entrada do Express
  ```

---

## 💻 Requisitos de Sistema

Antes de rodar o projeto, garanta que sua máquina atende aos requisitos:

- **Sistema Operacional**: Linux, macOS ou Windows  
- **Docker**: >= 20.10  
- **Docker Compose**: >= 2.0  
- **Node.js**: >= 20.x (para desenvolvimento local sem container)  
- **Angular CLI**: >= 20.x (para desenvolvimento local sem container)  
- **RAM mínima**: 4 GB
- **Banco de dados**: MySQL (já incluso no container)  

## 🚀 Como Executar

### Usando Docker Compose (recomendado)
```bash
# Clone o repositório
git clone https://github.com/seu-repo/nuvia.git
cd nuvia

# Suba os containers
docker compose up --build

#A aplicação estará disponível em:
- Frontend → http://localhost:4200
- Backend → http://localhost:3000
- MySQL → localhost:3306
```
### Desenvolvimento Local (sem Docker)
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
ng serve
```
## 👥 Equipe

| Avatar | Nome | GitHub |
|--------|------|--------|
| <img src="https://avatars.githubusercontent.com/u/169189388?v=4" width="60"> | **Diego Gabriel** | [@diego10gabriel](https://github.com/diego10gabriel) |
| <img src="https://avatars.githubusercontent.com/u/169695398?v=4" width="60"> | **Douglas Santos** | [@douglasrfsantos](https://github.com/douglasrfsantos) |
| <img src="https://avatars.githubusercontent.com/u/169388159?v=4" width="60"> | **Jotapeqzz** | [@Jotapeqzz](https://github.com/Jotapeqzz) |
| <img src="https://avatars.githubusercontent.com/u/203883716?v=4" width="60"> | **Vinícius Rodrigues** | [@ViniciusRodrigues0079](https://github.com/ViniciusRodrigues0079) |
| <img src="https://avatars.githubusercontent.com/u/162238592?v=4" width="60"> | **Júnior** | [@Junior010101](https://github.com/Junior010101) |

## 📜 Licença

Este projeto foi desenvolvido **exclusivamente para fins acadêmicos e empresariais (SESI)**. Não é permitida a distribuição, cópia ou uso fora deste contexto.




