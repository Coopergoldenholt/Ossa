UPDATE emails
SET first_name = $2, last_name = $3, message = $4, phone_number = $5
WHERE email = $1;