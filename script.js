body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.input-container {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    background: #28a745;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #218838;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    background: #f9f9f9;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
}

.delete-btn {
    background: red;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
}

.delete-btn:hover {
    background: darkred;
}

