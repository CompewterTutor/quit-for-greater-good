-- Create Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Create Habits table
CREATE TABLE IF NOT EXISTS habits (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    habit_type VARCHAR(50) NOT NULL CHECK (habit_type IN ('smoking', 'drinking')),
    baseline_consumption INT NOT NULL,
    local_price NUMERIC(10, 2) NOT NULL
);

-- Create Progress table
CREATE TABLE IF NOT EXISTS progress (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    daily_consumption INT NOT NULL,
    UNIQUE(user_id, date)
);

-- Create Reports table
CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    report_period VARCHAR(50) NOT NULL,
    total_saved NUMERIC(10, 2) NOT NULL,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Charities table
CREATE TABLE IF NOT EXISTS charities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    donation_link VARCHAR(255) NOT NULL
);

-- Create Donations table
CREATE TABLE IF NOT EXISTS donations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    charity_id INT REFERENCES charities(id) ON DELETE CASCADE,
    amount NUMERIC(10, 2) NOT NULL,
    donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
