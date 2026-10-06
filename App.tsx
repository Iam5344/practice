import { HomeworkCard } from './components/HomeworkCard';

interface Homework {
  id: number;
  title: string;
  course: string;
  isCompleted: boolean;
  score?: number;
}

const homeworks: Homework[] = [
  {
    id: 1,
    title: 'Верстка макету на HTML/CSS',
    course: 'Web Development',
    isCompleted: true,
    score: 95
  },
  {
    id: 2,
    title: 'Робота з масивами та .map() у React',
    course: 'React & TypeScript',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Створення компонентів з clsx',
    course: 'React & TypeScript',
    isCompleted: false
  }
];

export default function App() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Мої домашні завдання</h1>
      <section>
        {homeworks.map((item) => (
          <HomeworkCard
            key={item.id}
            title={item.title}
            course={item.course}
            isCompleted={item.isCompleted}
            score={item.score}
          />
        ))}
      </section>
    </main>
  );
}
