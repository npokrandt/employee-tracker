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

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
  ('Nathan', 'Pokrandt', 7, NULL),
  ('Bart', 'Simmons', 8, 1),
  ('Mary', 'Kilpop', 2, 1),
  ('Mann', 'Ajher', 2, 1),
  ('Jurgen', 'Yureuio', 4, 1),
  ('Kim', 'McKinley', 1, 3),
  ('Savannah', 'Trinker', 6, 4),
  ('Kurt', 'Rectur', 6, 4),
  ('Jim', 'Fedioke', 5, 1),
  ('Liam', 'Gruejiow', 3, 1),
  ('Tim', 'Nureot', 3, 1),
  ('Annie', 'Oklee', 8, 1),
  ('Hayley', 'tucker', 9, 1),
  ('Liam', 'Gasser', 9, 1),
  ('Nathan', 'Trot', 1, 1),
  ('Ursula', 'Sewich', 10, 1),
  ('Harlie', 'Beegul', 10, 1),
  ('Craig', 'Counsmith', 5, 1),
  ('Arnold', 'Benedict', 4, 1),
  ('Frie', 'Lanser', 8, NULL),
  ('John', 'Doe', 1, 3);