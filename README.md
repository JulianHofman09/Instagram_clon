# Instagram Clone — Trabajo Práctico React

Clon de la interfaz web de Instagram con publicaciones de gatos desde [The Cat API](https://thecatapi.com/).

**Diseño Figma de referencia:**  
https://www.figma.com/community/file/1004033523744290376

---

## Ejecución

```bash
npm install
npm run dev
```

Abrir la URL que muestra la terminal (por ejemplo `http://localhost:5173`).

No es necesario `npm run build` para corregir el TP.

---


## Estructura del proyecto

```
src/
├── App.tsx                 # Estado global, vistas y modal
├── main.tsx
├── types/index.ts          # Post, UserProfile, ViewType...
├── data/                   # Datos locales (ver data/README.md)
├── services/catApi.ts      # fetchCatPosts() con Axios
├── utils/format.ts         # formatLikes, formatLargeNumber
└── components/
    ├── Sidebar/            # Navegación lateral
    ├── Header/             # Barra superior (móvil)
    ├── Feed/               # Muro de publicaciones
    ├── Post/               # Una publicación
    ├── PostModal/          # Vista ampliada
    ├── Stories/
    ├── RightSidebar/
    └── Profile/
```

---

## Componentes y responsabilidades

| Componente | Responsabilidad |
|------------|-----------------|
| `App` | `useEffect` carga posts; `useState` para posts, modal y vista feed/profile |
| `Feed` | Renderiza historias y lista de `Post` con `.map()` |
| `Post` | Muestra una publicación; like/guardar con estado local |
| `PostModal` | Detalle: imagen grande, caption, likes, comentarios |
| `Profile` | Usuario simulado sin login; grilla de publicaciones |
| `Sidebar` | Cambia entre feed y perfil |
| `RightSidebar` | Usuario actual y sugerencias (datos en `data/`) |

---

## Props entre componentes

- `App` → `Feed`: `posts`, `loading`, `error`, `onOpenPost`
- `Feed` → `Post`: `post`, `onOpen`
- `App` → `PostModal`: `post`, `onClose`
- `App` → `Sidebar`: `activeView`, `onNavigate`

---

## Hooks

| Hook | Uso |
|------|-----|
| `useState<Post[]>` | Lista de publicaciones desde la API |
| `useState<Post \| null>` | Post seleccionado para el modal |
| `useState<ViewType>` | Vista activa: `'feed'` o `'profile'` |
| `useState` en `Post` | Like y guardar |
| `useEffect` | Al montar `App`, ejecuta `fetchCatPosts()` |

---

## API externa

```ts
// services/catApi.ts
const response = await axios.get<CatImage[]>(API_URL, {
  params: { limit: 10, size: 'med' },
});
```

Los tipos están en `types/index.ts` y se reutilizan en servicios y componentes.

---

## Visualización individual de publicaciones

Se implementó con un **modal** (`PostModal`). Al hacer clic en la imagen o en “Ver comentarios”, `App` guarda `selectedPost` y muestra el modal con imagen ampliada, usuario, descripción, likes y comentarios de ejemplo.

---

## Perfil de usuario emulado

Datos en `data/user.ts` (`currentUser`). No hay login ni registro. El menú **Perfil** muestra bio, estadísticas y grilla con las mismas imágenes del feed.

---

## Tecnologías

React , TypeScript, Vite, Axios, react-icons, CSS modular por componente.
