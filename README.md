# Frontend Development Practical Test

---

## Features

- **Dashboard Overview (`/`)**:
    - Key user metric statistics cards.
    - Recent activity log loaded dynamically from local user dataset with avatar initials.
    - Simulated delay with skeleton loading state (`app/loading.tsx`).

- **Users Management (`/users`)**:
    - Interactive data table powered by **TanStack Table v9**.
    - **Global search** filter across columns.
    - **Pagination controls** (first, previous, next, last page).
    - Built-in **Loading State** (`loading.tsx`) and **Error Boundary State** (`error.tsx`).

- **User Profile (`/profile`)**:
    - Profile details, skills badges, contact cards, and social links.

- **Responsive Sidebar & Navigation**:
    - Collapsible sidebar with quick links and user profile dropdown menu.

---

## Tech Stack

- **Framework:** [Next.js 16 (Turbopack, App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) / [@base-ui/react](https://base-ui.com/)
- **Data Table:** [@tanstack/react-table v9](https://tanstack.com/table)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Started Locally

### 1. Prerequisites

Make sure you have Node.js (v18.18+ or v20+) and `pnpm` installed on your system.

### 2. Clone the Repository

```bash
git clone https://github.com/fiqhidayat/frontend-development-pratical-test.git
cd frontend-development-pratical-test
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
