# React + TypeScript + Vite + ESLint Template

+ [React + TypeScript + Vite + ESLint Template](#react--typescript--vite--eslint-template)
  + [Usage](#usage)
    + [Installation](#installation)
    + [Development](#development)
    + [Production](#production)
  + [Structure](#structure)






## Usage





### Installation

Установка зависимостей:
  ```sh
    npm i
  ```

Копирование и конфигурация файлов:
  ```sh
    cp ./.env.sample ./.env
    cp ./.vscode/launch.sample.json ./.vscode/launch.json
  ```





### Development

Запуск в режиме *development*:
```sh
  npm run dev
```





### Production

Сборка проекта:
```sh
  npm run build
```

Проверка собранного проекта:
```sh
  npm run preview
```






## Structure

```sh
  ./
  ├── .vscode/
  │   └── launch.sample.json
  ├── dist/
  ├── src/
  │   ├── components/
  │   ├── constants/
  │   ├── containers/
  │   ├── pages/
  │   ├── types/
  │   ├── utils/
  │   ├── App.css
  │   ├── App.tsx
  │   └── main.tsx
  ├── .env.sample
  ├── .eslintrc.cjs
  ├── .gitignore
  ├── README.md
  ├── index.html
  ├── package.json
  ├── tsconfig.json
  └── vite.config.ts
```
