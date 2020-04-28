insert into emails (email, email_list, contacted, subscribed, email_received, first_name, last_name, message, phone_number)
values($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;