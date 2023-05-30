import { Card } from 'react-bootstrap';

const AboutMe = () => (
  <Card className="p-4">
    <span>
      Привет! Меня зовут Михаил. Занимаюсь веб разработкой около двух лет. В процессе обучения
      выполнил следующие проекты:
    </span>
    <ul>
      <li>
        Верстка многостраничного сайта бронирования номеров, разработка UI-Kit (Pug, Scss, JS,
        Webpack).
      </li>
      <li>
        Разработка jQuery слайдера (Typescript, Jest, jQuery, Webpack), Создание проекта с
        использование MVC и Observer паттернов.
      </li>
      <li>
        Командная разработка визуализатора API передачи данных из Trello в Google таблицы и обратно
        (React, Typescript, Redux-toolkit, React Testing Library).
      </li>
    </ul>
    <span>
      После обучения выполнил несколько проектов с использованием: react, nextjs, typescript, redux
      (toolkit / thunk), mobx, saga, а также expressjs, firebase, mongodb, postgresql, mongoose и
      sequelize
    </span>
    <a href="https://react-portfolio-rhccoder.vercel.app/">Портфолио</a>
    <a href="https://github.com/WhiteDevilMan">Github</a>
  </Card>
);

export default AboutMe;
