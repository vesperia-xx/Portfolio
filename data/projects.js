const projects = [
  {
    id: 1,
    title: 'Vortex Metrics',
    description: {
      es: 'Plataforma SaaS multi-tenant de analytics con aislamiento por organización y RBAC. Métricas reales sobre PostgreSQL, exportaciones CSV/PDF y audit trail completo de cada cambio.',
      en: 'Multi-tenant SaaS analytics platform with per-organization isolation and RBAC. Real metrics on PostgreSQL, CSV/PDF exports and a full audit trail for every change.',
    },
    tags: ['Next.js', 'PostgreSQL', 'RLS', 'RBAC', 'Vercel'],
    image: '/projects/vortex-metrics.png',
    github: 'https://github.com/vesperia-xx/Multi-tenant-Analytics-SaaS',
    demo: 'https://vortex-metrics.vercel.app/',
  },
  {
    id: 2,
    title: 'Liveboard',
    description: {
      es: 'Workspace colaborativo en tiempo real con tablero Kanban, presencia en vivo, comentarios, feed de actividad y UI optimista con reconexión automática.',
      en: 'Real-time collaborative workspace with a Kanban board, live presence, comments, activity feed and optimistic UI with automatic reconnection.',
    },
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io', 'Tailwind'],
    image: '/projects/liveboard.png',
    github: 'https://github.com/vesperia-xx/liveboard',
    demo: 'https://liveboard-chi.vercel.app/',
  },
  {
    id: 3,
    title: 'Recall',
    description: {
      es: 'Asistente de conocimiento interno con IA que responde a partir de tus propios documentos, cita sus fuentes y respeta los límites de cada workspace.',
      en: 'AI-powered internal knowledge assistant that answers from your own documents, cites its sources and respects each workspace’s boundaries.',
    },
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI', 'Tailwind'],
    image: '/projects/recall.png',
    github: 'https://github.com/vesperia-xx/AI-Knowledge-Workspace',
    demo: 'https://ai-knowledge-workspace-one.vercel.app/',
  },
];

export default projects;
