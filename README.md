<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0f172a,100:114E34&text=Gabriel%20Felix&fontColor=ffffff&fontSize=42&fontAlignY=40&desc=Software%20Engineer%20%7C%20Backend%20%7C%20Distributed%20Systems%20%7C%20AI-Augmented%20Engineering&descAlignY=58" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=21&pause=1000&color=22C55E&center=true&vCenter=true&width=950&lines=Construindo+sistemas+reais+para+opera%C3%A7%C3%B5es+cr%C3%ADticas;NestJS+%7C+Node.js+%7C+TypeScript+%7C+Azure+Queues+%7C+MongoDB;Sa%C3%BAde+Ocupacional+%7C+Assinatura+Digital+%7C+Automa%C3%A7%C3%A3o+%7C+IA+Aplicada" />
</p>

---

## Sobre mim

Sou **Gabriel Felix**, Analista de Sistemas e desenvolvedor com foco em **backend, arquitetura distribuída, automações e integrações críticas em produção**.

Atuo na construção de soluções para **saúde ocupacional corporativa**, envolvendo atendimento médico, geração de documentos, assinatura digital, processamento assíncrono, filas, integrações com sistemas externos e automação de processos operacionais.

Meu trabalho combina engenharia de software prática com visão de produto: construir sistemas que resolvem problemas reais, operam com consistência e continuam evoluindo sem comprometer a produção.

---

## Principais áreas de atuação

### Backend e arquitetura
- Node.js, NestJS e TypeScript
- APIs REST, WebSocket e serviços internos
- Arquitetura modular distribuída
- Processamento assíncrono com filas
- Idempotência, retry, rastreabilidade e consistência operacional

### Saúde ocupacional e documentos digitais
- Fluxos de atendimento médico ocupacional
- Geração e liberação de ASO
- Geração e manipulação de PDFs
- Assinatura digital PSC / BRYKMS / PAdES
- Integrações com SOC, SOCGED, SOAP e sistemas legados

### Cloud, dados e integrações
- Azure Queue Storage e Azure Blob Storage
- MongoDB e Supabase
- Integrações com serviços externos críticos
- Workers especializados para tarefas longas e instáveis
- Automação com Puppeteer em portais externos

### Engenharia assistida por IA
- Uso de IA para análise de bases complexas
- Apoio com Codex, agentes de código e MCP
- Documentação técnica, auditoria, refatoração e debugging assistidos
- Criação de prompts técnicos para execução segura em produção

---

## Projeto principal

### CMSO360 — Plataforma de Saúde Ocupacional

O **CMSO360** é uma plataforma profissional para gestão de atendimentos em saúde ocupacional, integrando recepção, atendimento médico, exames, geração de documentos, assinatura digital e automações com sistemas externos.

#### Características técnicas

- Frontend em **Next.js, React e Tailwind CSS**
- Backend em **NestJS, Node.js e TypeScript**
- Workers assíncronos com **Azure Queue**
- Armazenamento de PDFs em **Azure Blob Storage**
- Banco principal em **MongoDB**
- Integração com **Supabase** para configurações e sessões
- Geração de documentos com **pdfmake**, **pdf-lib** e **Puppeteer**
- Assinatura digital com **PSC / BRYKMS / BRy HUB Signer**
- Integrações com **SOC, SOCGED, SOAP, e-mail e sistemas externos**
- Comunicação em tempo real com **WebSocket**

#### Arquitetura

O CMSO360 utiliza uma **arquitetura modular distribuída orientada a eventos**, com API central, frontend web, workers especializados e comunicação por filas.

```txt
Frontend Next.js
   ↓
Backend NestJS
   ↓
Azure Queue / MongoDB / Supabase
   ↓
Workers especializados
   ↓
PDFs, assinatura digital, SOCGED, e-mail e integrações externas
```

#### Responsabilidades dos serviços

| Serviço | Responsabilidade |
|---|---|
| `cmso360-frontend` | Interface operacional, atendimento, painéis e fluxos do usuário |
| `cmso360-backend` | API principal, regras de negócio, MongoDB, WebSocket, filas e integrações |
| `cmso360-worker` | Processamento assíncrono, assinatura digital, e-mails e enriquecimento de documentos |
| `cmso360-aso-generate` | Geração automatizada de ASO via Puppeteer e integração com SOC |
| `cmso360-biometry` | Integração biométrica complementar |

---

## Outros projetos e iniciativas

### ESM Pro — eSocial Management Platform
Aplicação desktop para automação e gestão operacional de eventos do eSocial e SOC.

- Puppeteer + Electron
- Automação de matrícula e eventos ocupacionais
- Integração com SOC e portal eSocial
- Visão operacional de pendências e status

### BRY-SIGNER
Portal e fluxo de assinatura digital com foco em documentos PDF e certificados em nuvem.

- Sessões PSC
- Integração com BRy Integra e HUB Signer
- Assinatura PAdES
- Preparação e validação de documentos assinados

### Webhook-Jotform
Microsserviço para recebimento, processamento e triagem de formulários.

- Webhooks
- Integrações externas
- Automação de notificações
- Apoio com IA para classificação e análise

---

## Stack principal

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,ts,nestjs,express,nextjs,react,tailwind,mongodb,postgres,aws,azure,docker,electron,git,github" />
</p>

### Backend
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-Backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-App%20Router-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-UI-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Cloud e dados
![Azure](https://img.shields.io/badge/Azure-Queues%20%7C%20Blob-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Config%20%7C%20Sessions-3FCF8E?style=for-the-badge&logo=supabase&logoColor=111827)

### Automação e documentos
![Puppeteer](https://img.shields.io/badge/Puppeteer-Automation-40B5A4?style=for-the-badge)
![PDF](https://img.shields.io/badge/PDF-pdfmake%20%7C%20pdf--lib-B91C1C?style=for-the-badge)
![Digital Signature](https://img.shields.io/badge/Digital%20Signature-PSC%20%7C%20BRYKMS%20%7C%20PAdES-114E34?style=for-the-badge)

### IA aplicada
![Codex](https://img.shields.io/badge/Codex-AI%20Engineering-412991?style=for-the-badge)
![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-111827?style=for-the-badge)
![AI Agents](https://img.shields.io/badge/AI%20Agents-Code%20Review%20%7C%20Architecture-2563EB?style=for-the-badge)

---

## Diferenciais técnicos

- Desenvolvimento de aplicações reais em produção
- Arquitetura modular distribuída
- Processamento assíncrono orientado a filas
- Integrações com sistemas externos instáveis
- Assinatura digital de documentos médicos
- Geração e manipulação avançada de PDFs
- Automação com Puppeteer e tratamento de sessão
- Compatibilidade entre Node.js, MongoDB e sistemas C# legados
- Uso estratégico de IA para acelerar engenharia, auditoria e documentação

---

## Em evolução

Atualmente estou fortalecendo o ecossistema CMSO360 com práticas de arquitetura e operação mais robustas:

- Biblioteca privada de contratos compartilhados entre projetos
- Enums e schemas oficiais para filas e status
- Melhor rastreabilidade com correlationId
- Política formal de retry e poison queues
- Máquina de estados para ASO e assinatura digital
- Identidade profissional padronizada para PSC/BRYKMS
- Documentação técnica para suporte, operação e evolução com IA

---

## Estatísticas

<p align="center">
  <img height="170" src="https://github-readme-stats.vercel.app/api?username=gfeelixsantos&show_icons=true&theme=tokyonight&hide_border=true" />
  <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gfeelixsantos&layout=compact&theme=tokyonight&hide_border=true" />
</p>

---

## Contato

<p align="center">
  <a href="https://www.linkedin.com/in/gabrieldevx/">
    <img src="https://img.shields.io/badge/LinkedIn-Gabriel%20Felix-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/gfeelixsantos">
    <img src="https://img.shields.io/badge/GitHub-gfeelixsantos-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

---

<p align="center">
  <i>Construindo software para operações reais, com consistência, automação e evolução contínua.</i>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:114E34,100:0f172a" />
</p>
