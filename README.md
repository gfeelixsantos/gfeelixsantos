# Gabriel Felix

**Engenheiro de Software | Node.js, NestJS, TypeScript | Sistemas Distribuídos, Filas Assíncronas e Integração com Assinatura Digital PSC/BRy**

---

## Sobre Mim

Desenvolvo sistemas distribuídos que operam em ambientes de alta criticidade — onde cada bug tem impacto real e cada decisão arquitetural afeta centenas de pessoas.

Nos últimos anos, construí e mantive a infraestrutura de um ecossistema para clínicas de saúde ocupacional que processa milhares de atendimentos mensais.

### O que já fiz na prática:

**Integração com Assinatura Digital (PSC/BRy)**
Implementei do zero a integração com o BRy Integra + HUB Signer, incluindo sessões com escopo "signature_session" que permitem ao médico assinar 30+ documentos por dia sem precisar autorizar cada um. Isso exigiu entender profundamente OAuth do provedor PSC, validação de certificado em nuvem, e a diferença entre assinatura híbrida e qualificada.

**Processamento Assíncrono com Filas (Azure Queue)**
Desenhei e implementei uma arquitetura onde o backend NestJS enfileira mensagens para workers que processam PDFs em background. O desafio foi garantir idempotência — o mesmo documento não pode ser assinado duas vezes se o worker cair no meio do processo. Implementei política de retry com backoff exponencial e circuit breaker.

**Geração e Manipulação de PDFs Médicos**
Utilizei pdf-lib e pdfmake para gerar documentos ASO e resultados de exames. O tricky part foi sobrepor dados do médico (CRM, UF) no PDF antes da assinatura digital, respeitando as coordenadas exatas exigidas pelo formato PAdES.

**Automação de Portais Governamentais (Puppeteer)**
Construí um desktop app (Electron) que automatiza o preenchimento de eventos S-2240 e S-2220 no portal SOCGED/eSocial. O desafio foi lidar com CAPTCHAs, timeouts de sessão, e a instabilidade inerente de automações de browser.

**Integração C# + Node.js**
O sistema legado em C# consome dados do MongoDB sincronizado pelo backend Node.js. Isso exigiu implementar strategies de reconciliação de dados entre dois mundos diferentes.

---

## Experiências

### CMSO360 — Backend/Infraestrutura (Node.js/NestJS)
Sistema de gestão completo para clínicas de saúde ocupacional. Atuei como único desenvolvedor backend em um ecossistema que processa agendamentos, exames, ASOs e assinaturas digitais.

**Principais entregas:**

- Backend NestJS + Arquitetura Distribuída
- Integração BRy para Assinatura Digital
- Sistema de Retry com Backoff Exponencial
- Validação de Identidade Profissional

### BRY-SIGNER — Portal de Assinatura Digital (Next.js)
Frontend Next.js para gerenciar envelopes de assinatura digital híbrida (PSC + BRy Easy Sign).

**Principais entregas:**
- Interface para Configuração de Sessão PSC
- Gerenciamento de Envelopes

### eSocial Manager — Automação Desktop (Electron)
Desktop app para automatizar o envio de eventos eSocial (S-2240, S-2220, S-2210) para o governo brasileiro.

**Principais entregas:**
- Automação Puppeteer do Portal SOCGED
- Loteamento Inteligente
- Integração SOAP para Web Services
- Geração de XML eSocial

### Webhook-Jotform — Integração de Formulários (Express.js)
Microsserviço para receber webhooks do Jotform, processar agendamentos e notificar profissionais.

**Principais entregas:**
- Recebimento e Validação de Webhooks
- Integração WhatsApp
- Integração AWS (SQS + DynamoDB)
- IA para Triagem (Gemini)

---

## Stack Consolidada

### Backend
- Node.js (v18+) / **NestJS** (v11+)
- **TypeScript** (strict mode)
- **Express.js** (microsserviços leves)

### Frontend
- **Next.js** (v14+)
- **React** (v18+)
- **Tailwind CSS** (v4)

### Database
- **MongoDB** (collections, aggregations, transactions)
- **Supabase** (auth, realtime)
- **PostgreSQL** (via Prisma)

### Cloud & Infra
- **Azure** (Blob Storage, Queue Storage, App Service)
- **AWS** (SQS, DynamoDB)
- **Docker** (multi-stage builds)

### Desktop
- **Electron** (desktop apps)

### PDF & Documentos
- **pdf-lib** (manipulação low-level)
- **pdfmake** (geração por templates)

### Automação
- **Puppeteer Extra** (+ stealth plugins)
- **Playwright** (cenários de teste)

### Integração
- **SOAP** (wssecurity-soap)
- **BRy API** (assinatura digital)
- **Google APIs** (Drive, Sheets)

---

## Diferenciais Competitivos

1. **Experiência com Sistemas Críticos em Produção** — Sistemas que processam dados médicos reais
2. **Integração com Assinatura Digital PSC/BRy** — OAuth PSC, token scopes, PAdES
3. **Processamento Assíncrono com Filas (Azure Queue)** — Idempotência, retry com backoff
4. **Manipulação de PDFs Médicos** — Geração ASOs, sobreposição de dados, validação PAdES
5. **Automação de Portais com Puppeteer** — CAPTCHAs, reCAPTCHAs, sessões expiradas
6. **Integração SOAP + XML** — WS-Security, validação XSD
7. **Reconciliação de Dados entre Sistemas** — MongoDB ↔ C# legado
8. **Full-stack com Responsabilidade Real** — Opero em produção, debugo em produção

---

## Projetos em Destaque

### CMSO360 — Ecossistema de Saúde Ocupacional
- Backend NestJS, Next.js, MongoDB, Azure Queue, Azure Blob, Supabase
- Integração com BRy HUB Signer para assinatura PAdES
- Sessions PSC com escopo de assinatura reutilizável
- Retry com backoff exponencial e circuit breaker
- Upload automático para SOCGED e Google Drive

### eSocial Manager — Automação eSocial
- Electron, React, Puppeteer, fast-xml-parser, SOAP, ExcelJS
- Loteamento automático de funcionários (60 dias por empresa)
- Automação stealth de browser com detecção de CAPTCHA
- Geração de XML válido contra schemas eSocial

---

## Conecte-se

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrieldevx/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gfeelixsantos)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/feliquitox/)

---

*"Código limpo não é escrito seguindo regras. É escrito com o coração."*
