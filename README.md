# React Template

+ [React Template](#react-template)
  + [Usage](#usage)
    + [Installation](#installation)
    + [Development](#development)
    + [Production](#production)
    + [Testing](#testing)
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





### Testing

Start tests:
```sh
  npm test
```






## Structure

```sh
  ./
  ├── .vscode/
  │   └── launch.sample.json
  ├── src/
  │   ├── components/
  │   ├── constants/
  │   ├── containers/
  │   ├── pages/
  │   ├── providers/
  │   ├── services/
  │   ├── stores/
  │   ├── types/
  │   ├── utils/
  │   ├── App.tsx
  │   └── main.tsx
  ├── test/
  │   ├── integration/
  │   ├── unit/
  │   └── setup.ts
  ├── .env.sample
  ├── LICENSE
  ├── README.md
  ├── eslint.config.mjs
  ├── index.html
  ├── jest.config.mjs
  ├── package.json
  ├── tsconfig.json
  └── vite.config.ts
```
