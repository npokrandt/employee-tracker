-- department seeding
INSERT INTO department (name) VALUES 
  ('Human Resources'),
  ('Sales'),
  ('Public Relations'),
  ('Middle Management'),
  ('IT'),
  ('Upper Management');

-- role seeding

INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Marketer', 30000.00, 2),
  ('Sales Manager', 50000.00, 4),
  ('Network Engineer', 85000.00, 5),
  ('Recruiter', 55000.00, 1),
  ('Interviewer', 45000.00, 1),
  ('Modeler', 80000.00, 2),
  ('CEO', 99000.00, 6),
  ('PR Person', 20000.00, 3),
  ('Help Desk', 60000.00, 5),
  ('Specialist', 90000.00, 5);

-- employee seeding

INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager) VALUES 
  ('Nathan', 'Pokrandt', 7, NULL, true),
  ('Bart', 'Simmons', 8, 1, false),
  ('Mary', 'Kilpop', 2, 1, true),
  ('Mann', 'Ajher', 2, 1, true),
  ('Jurgen', 'Yureuio', 4, 1, false),
  ('Kim', 'McKinley', 1, 3, false),
  ('Savannah', 'Trinker', 6, 4, false),
  ('Kurt', 'Rectur', 6, 4, false),
  ('Jim', 'Fedioke', 5, 1, false),
  ('Liam', 'Gruejiow', 3, 1, false),
  ('Tim', 'Nureot', 3, 1, false),
  ('Annie', 'Oklee', 8, 1, false),
  ('Hayley', 'Tucker', 9, 1, false),
  ('Liam', 'Gasser', 9, 1, false),
  ('Nathan', 'Trot', 1, 1, false),
  ('Ursula', 'Sewich', 10, 1, false),
  ('Harlie', 'Beegul', 10, 1, false),
  ('Craig', 'Counsmith', 5, 1, false),
  ('Arnold', 'Benedict', 4, 1, false),
  ('Frie', 'Lanser', 8, NULL, false),
  ('John', 'Doe', 1, 3, false);