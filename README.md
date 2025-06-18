# 💖 Life Manager

**Life Manager** is a full-stack modular life management webapp — built to organize and monitor every aspect of personal
and professional life: work, habits, finances, mental health, goals, and more.  
This project prioritizes scalability, personalization, and long-term usability.

---

## ⚙️ Tech Stack

| Layer    | Tech                             |
|----------|----------------------------------|
| Frontend | React + Vite + Styled Components |
| Backend  | Node.js + Fastify                |
| Database | PostgreSQL (via Docker)          |
| ORM      | Prisma                           |
| Monorepo | pnpm workspaces                  |
| Language | TypeScript (full-stack)          |

---

## 📁 Monorepo Structure

```
life-manager/
├── .github/       # PR templates, workflows, etc.
├── apps/
│   ├── web/       # Frontend (React)
│   └── api/       # Backend (Fastify + Prisma)
├── packages/
│   ├── types/     # Shared TypeScript types
│   ├── utils/     # Utility functions
└── config files   # docker-compose, eslint, prettier, etc
```

---

## 🐳 Local Development Setup

### Requirements

- Node.js 18+
- pnpm
- Docker Desktop

### 1. Clone and install dependencies

```bash
git clone https://github.com/lorenaaxbastos/life-manager.git
cd life-manager
pnpm install --recursive
```

### 2. Create a `.env` file in `apps/api`

```env
DATABASE_URL=postgresql://postgres:admin@localhost:5433/lifemanager
```

> Change the port to 5432 if you're not overriding it in docker-compose.yml.

### 3. Start PostgreSQL via Docker

```bash
docker compose up -d
```

> Default port is `5433`. See `.env` for details.

### 4. Run Prisma migration to create tables

```bash
cd apps/api
pnpm dlx prisma migrate dev --name init
```

---

## 📦 Useful Scripts

From `apps/api`:

```bash
pnpm migrate      # Run Prisma migrations
pnpm studio       # Open Prisma Studio
pnpm generate     # Generate Prisma client
pnpm pull         # Pull schema from DB
```

From `apps/web`:

```bash
pnpm dev          # Start frontend dev server
```

---

## 🧱 MVP Modules (Planned)

- [x] ✅ Project structure (modular monorepo)
- [ ] 🧠 Habit tracker (check-ins, streaks)
- [ ] 💼 Task manager (smart scheduling)
- [ ] 💸 Finance tracker (incomes, expenses)
- [ ] ❤️‍🩹 Emotional health (mood logs)
- [ ] 🔧 Smart dashboard (priorities, focus zones)

---

## 🛡️ Git & CI Setup

- PR template with checklist
- Labels by branch prefix (feat/, fix/, chore/, etc.)
- Conventional commits (`chore:`, `feat:`, etc.)
- Branch protection recommended on `main`

---

## 🚀 Future Goals

- [ ] Export as PWA for mobile installability
- [ ] Offline-first support
- [ ] Deploy to Vercel (frontend) and Railway (backend/db)
- [ ] Cross-platform release (Capacitor or React Native wrapper)

---

## 📄 License

MIT © Lorena Bastos
