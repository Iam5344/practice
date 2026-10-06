import clsx from 'clsx';

interface LessonCardProps {
  topic: string;
  date: string;
  isOnline: boolean;
  zoomLink?: string;
}

export function LessonCard({ topic, date, isOnline, zoomLink }: LessonCardProps) {
  return (
    <div
      className={clsx(
        'p-4 rounded-lg text-white mb-4 shadow-md transition-all',
        isOnline ? 'bg-blue-600' : 'bg-purple-600'
      )}
      style={{
        backgroundColor: isOnline ? '#2563eb' : '#9333ea',
        padding: '16px',
        borderRadius: '8px',
        color: '#ffffff',
        marginBottom: '16px'
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '8px' }}>{topic}</h3>
      <p style={{ margin: '4px 0' }}>
        <strong>Дата та час:</strong> {date}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>Формат:</strong> {isOnline ? 'Онлайн' : 'Офлайн'}
      </p>

      <div style={{ marginTop: '12px' }}>
        {isOnline && zoomLink && (
          <a
            href={zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#ffffff',
              color: '#2563eb',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Підключитися до Zoom
          </a>
        )}

        {!isOnline && (
          <p style={{ margin: 0, fontStyle: 'italic' }}>
            Аудиторія 404. Не забудьте ноутбук
          </p>
        )}
      </div>
    </div>
  );
}
