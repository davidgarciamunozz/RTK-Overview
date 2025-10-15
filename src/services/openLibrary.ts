export default function getAllBooks() {
    return fetch('https://openlibrary.org/search.json?q=King&limit=10')
    .then(response => response.json())
    .then(data => data.docs)
    .catch(error => console.error('Error fetching books', error))
}