# Pendências Internas Antes da Publicação Definitiva

> Documento de uso interno. Em produção (`import.meta.env.PROD`), fotografias e vídeos sem autorização ou arquivo disponível são ocultados automaticamente sem exibir avisos ao visitante.

## 1. Informações que dependem de confirmação da direção
- [ ] **Telefone do cartaz de Reforço Escolar:** confirmar o uso/divulgação pública do número `(91) 99824-8944` especificamente vinculado ao serviço de Reforço Escolar na Unidade II.
- [ ] **Ano letivo dos projetos e matrículas:** confirmar quando a escola deseja associar o calendário a um ano letivo específico ou divulgar campanha de matrículas sazonal.
- [ ] **Serviços complementares da Unidade II (Psicologia, Psicopedagogia, Musicoterapia e Reforço Escolar):** confirmar disponibilidade atual, profissionais responsáveis, horários e condições de atendimento presencial e online.
- [ ] **Dados opcionais de rodapé:** horário de atendimento presencial da secretaria e eventual exibição de CNPJ.
- [ ] **Analytics opcional:** definir `VITE_CF_BEACON_TOKEN` caso desejem métricas sem cookies do Cloudflare Web Analytics.

## 2. Mídias pendentes de inserção / autorização
### Fotografias (`public/images/`)
- [ ] `logo-sonho-encantado.png` (confirmar versão de alta resolução / fundo transparente).
- [ ] `hero-escola.jpg`, `historia-escola.jpg`.
- [ ] `etapa-baby-class.jpg`, `etapa-infantil.jpg`, `etapa-fundamental.jpg`.
- [ ] `atividade-musica.jpg` (vivência pedagógica com música e movimento na rotina).
- [ ] `ambiente-sala.jpg`, `ambiente-fachada.jpg`.
- [ ] `galeria-01.jpg` a `galeria-04.jpg`.
*(Todas com termo de autorização de uso de imagem assinado sempre que houver menores identificáveis.)*

### Vídeos (`public/videos/` — atualmente `authorized: false` em `schoolContent.ts`)
- [ ] `01-apresentacao-pedagogica.mp4` (~57s horizontal): contém referência a 2026 — revisar/reeditar antes de habilitar `authorized: true` e gerar capa `/images/capa-video-pedagogico.jpg`.
- [ ] `02-equipe-e-acolhimento-vertical.mp4` (~10s vertical): confirmar autorização de imagem da equipe/crianças antes de habilitar `authorized: true` e gerar capa `/images/capa-video-equipe.jpg`.
