# xlsx-node-fetch

Fetch for https://fingertips.phe.org.uk/documents/Historic%20COVID-19%20Dashboard%20Data.xlsx

This is not working an producing a file 75,335 bytes long rather than 43,410 bytes.

# CURL

curl https://fingertips.phe.org.uk/documents/Historic%20COVID-19%20Dashboard%20Data.xlsx -output "Historic COVID-19 Dashboard Data.xlsx"

Works fine, but using curl from node fails
