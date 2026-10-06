import { LessonCard } from './components/LessonCard';

interface Lesson {
  id: number;
  topic: string;
  date: string;
  isOnline: boolean;
  zoomLink?: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    topic: 'Основи React та JSX',
    date: '10 Жовтня, 18:00',
    isOnline: true,
    zoomLink: 'https://zoom.us/j/123456789'
  },
  {
    id: 2,
    topic: 'Компоненти та Пропси в TypeScript',
    date: '12 Жовтня, 16:30',
    isOnline: false
  },
  {
    id: 3,
    topic: 'Умовний рендеринг та робота з clsx',
    date: '15 Жовтня, 18:00',
    isOnline: true,
    zoomLink: 'https://zoom.us/j/987654321'
  },
  {
    id: 4,
    topic: 'Практикум: Створення списків та метод map()',
    date: '17 Жовтня, 15:00',
    isOnline: false
  }
];

export default function App() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Найближчі заняття</h1>
      <section>
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            topic={lesson.topic}
            date={lesson.date}
            isOnline={lesson.isOnline}
            zoomLink={lesson.zoomLink}
          />
        ))}
      </section>
    </main>
  );
}
