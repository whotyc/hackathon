import psycopg2
# Данные для подключения
DB_NAME = "postgres"  # Имя вашей базы данных
DB_USER = "postgres"  # Пользователь
DB_PASSWORD = "1234"  # Пароль
DB_HOST = "localhost"  # Адрес (или IP, если сервер удалённый)
DB_PORT = "5432"  # Порт (по умолчанию 5432)
try:
    # Устанавливаем соединение с базой
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    print("Успешное подключение к базе данных!")
    # Создаём курсор для выполнения SQL-запросов
    cur = conn.cursor()
    # Выполним тестовый запрос
    cur.execute("SELECT version();")
    db_version = cur.fetchone()
    print("Версия PostgreSQL:", db_version)
    # Закрываем соединение
    cur.close()
    conn.close()
except Exception as e:
    print("Ошибка при подключении:", e)
