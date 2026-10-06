import clsx from 'clsx';

interface HomeworkCardProps {
  title: string;
  course: string;
  isCompleted: boolean;
  score?: number;
}

export function HomeworkCard({ title, course, isCompleted, score }: HomeworkCardProps) {
  return (
    <div
      className={clsx(
        'homework-card',
        isCompleted ? 'completed' : 'pending'
      )}
      style={{
        backgroundColor: isCompleted ? '#dcfce7' : '#ffedd5',
        color: isCompleted ? '#166534' : '#9a3412',
        border: `1px solid ${isCompleted ? '#86efac' : '#fdba74'}`,
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px'
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '8px' }}>{title}</h3>
      <p style={{ margin: '4px 0' }}>
        <strong>Курс:</strong> {course}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>Статус:</strong> {isCompleted ? 'Виконано' : 'В процесі'}
      </p>

      <div style={{ marginTop: '12px' }}>
        {isCompleted ? (
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {score !== undefined ? `Оцінка: ${score}/100` : 'Очікує перевірки...'}
          </p>
        ) : (
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#ea580c',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Здати роботу
          </button>
        )}
      </div>
    </div>
  );
}
