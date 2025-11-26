-- Write your UP SQL here
CREATE TABLE IF NOT EXISTS todos.todo (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    description text,
    created_at TIMESTAMPTZ DEFAULT clock_timestamp(),
    is_completed BOOLEAN DEFAULT FALSE,
    is_deleted BOOLEAN DEFAULT FALSE,
    deleted_at TIMESTAMPTZ
);