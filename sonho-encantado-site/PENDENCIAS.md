# Pendências Internas Antes da Publicação Definitiva

> Documento de uso interno. Em produção (`import.meta.env.PROD`), fotografias e vídeos sem autorização ou arquivo disponível são ocultados automaticamente sem exibir avisos ao visitante.

## 1. Informações que dependem de confirmação da direção
- [ ] **Telefone do cartaz de Reforço Escolar:** confirmar o uso/divulgação pública do número `(91) 99824-8944` apresentado no cartaz promocional `05-reforco-escolar-cartaz.jpeg` antes de exibi-lo especificamente na seção de Reforço Escolar.
- [ ] **Posicionamento religioso e referenciais teóricos:** materiais audiovisuais mencionam *princípios cristãos* e referências a *Lev Vygotsky*. Confirmar com a direção se devem constar oficialmente no site e se há base documental/pedagógica formal.
- [ ] **Ano letivo dos projetos e matrículas:** confirmar a qual ano letivo associar o calendário de *Projetos que encantam* e qual campanha de matrículas vigente deve ser anunciada (evitando publicar referências antigas a 2026 ou não confirmadas a 2027).
- [ ] **Histórico e ano de fundação:** confirmar ano exato de fundação (mantido como “aproximadamente 20 anos”) e confirmar se preferem exibir “aproximadamente 20 anos” ou “mais de 18 anos”.
- [ ] **Serviços complementares da Unidade II (Psicologia, Psicopedagogia, Musicoterapia e Reforço Escolar):** confirmar disponibilidade atual, profissionais responsáveis, horários e condições de atendimento presencial e online.
- [ ] **Dados opcionais de rodapé:** horário de atendimento presencial da secretaria e eventual exibição de CNPJ.
- [ ] **Domínio e Analytics:** garantir `VITE_SITE_URL=https://colegiosonhoencantado.com.br` configurado no build de produção do Cloudflare e definir `VITE_CF_BEACON_TOKEN` se desejarem métricas sem cookies.

## 2. Materiais de referência (não usar como fotos finais)
- `01-musicoterapia-cartaz.jpeg`, `02-psicopedagogia-texto.jpeg`, `03-psicologia-texto.jpeg`, `04-musicoterapia-texto.jpeg`, `05-reforco-escolar-cartaz.jpeg`, `06-matriculas-2026-cartaz.jpeg`, `07-ludicidade-texto.jpeg`: utilizados apenas como fonte textual de informações.

## 3. Mídias pendentes de inserção / autorização
### Fotografias (`public/images/`)
- [ ] `logo-sonho-encantado.png` (confirmar versão de alta resolução / fundo transparente).
- [ ] `hero-escola.jpg`, `historia-escola.jpg`.
- [ ] `etapa-baby-class.jpg`, `etapa-infantil.jpg`, `etapa-fundamental.jpg`.
- [ ] `atividade-musica.jpg` (aula curricular de Música).
- [ ] `ambiente-sala.jpg`, `ambiente-fachada.jpg`.
- [ ] `galeria-01.jpg` a `galeria-04.jpg`.
*(Todas com termo de autorização de uso de imagem assinado sempre que houver menores identificáveis.)*

### Vídeos (`public/videos/` — atualmente `authorized: false` em `schoolContent.ts`)
- [ ] `01-apresentacao-pedagogica.mp4` (~57s horizontal): contém referência a 2026 — revisar/reeditar antes de habilitar `authorized: true` e gerar capa `/images/capa-video-pedagogico.jpg`.
- [ ] `02-equipe-e-acolhimento-vertical.mp4` (~10s vertical): confirmar autorização de imagem da equipe/crianças antes de habilitar `authorized: true` e gerar capa `/images/capa-video-equipe.jpg`.
