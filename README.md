# Clone X - Frontend

Aplicação React (Vite + TypeScript) que consome a API do backend para publicar posts, curtir, retweetar, comentar, editar perfil e seguir usuários. Responsiva para telas até 768px e 425px.

## Tecnologias
- React + Vite
- TypeScript
- styled-components
- react-router-dom

## Variáveis de ambiente
- `VITE_API_BASE_URL` — origem do backend (ex.: `https://seu-backend.com`). Quando não definido e em `DEV`, usa `/api`.
- `VITE_APP_BASE_URL` — URL base para redirecionar quando a sessão expira (ex.: `https://clone-x-frontend-sigma.vercel.app`).

## Rodando em desenvolvimento
1. `npm install`
2. `npm run dev`
3. Acesse `http://localhost:5173`

Caso o backend esteja local em `http://localhost:8000`, garanta que:
- O backend está com `FRONTEND_DEV_ORIGIN=http://localhost:5173` e configurado em CORS/CSRF.
- O frontend acessa o backend via `/api` (padrão em DEV) ou defina `VITE_API_BASE_URL` corretamente.

## Build
- `npm run build`
- `npm run preview` para validar o build localmente.

## Responsividade
- Ajustes de layout para ≤768px e ≤425px em `src/styles.ts` e estilos das páginas.
- Ações do post mostram ícones em telas pequenas para reduzir largura.

## Organização de estilos
- Estilos centralizados por página: `Feed_styles.ts`, `Login_styles.ts`, `Profile_styles.ts`, `UserPublic_styles.ts`.
- Evita estilos inline; links usam componentes estilizados para manter legibilidade.

## Integração com backend
- Requisições enviam `credentials: include`.
- CSRF é obtido automaticamente quando necessário.
- URLs de mídia são resolvidas com `mediaUrl`.

## Rotas
- `/` feed
- `/login`, `/register`
- `/profile` edição do perfil
- `/user/:id` perfil público

## Deploy
- Em plataformas como Vercel, configure rewrite para SPA: todas as rotas apontam para `index.html`.
