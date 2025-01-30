# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

области хранения данных:

- база данных на json server
- BFF
- Redux store

Сущности приложения:

- пользователь: БД (список польлзователей), BFF (сессия текущего), store
  (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), store
  (использование на клиенте)
- статья: БД (список статей), store (отображение в браузере)
- комментарии: БД (список комментариев), store (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registered_at / role_id
- роль пользователя - roles: id / name
- статья - posts: id / title / image_url / content / published_at
- комментарии - comments: id / autor_id / post_id / content

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте):

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив
  comment: id / autor / content / publishedAt
- users: массив user: id / login / registeredAt / role
