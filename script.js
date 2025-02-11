<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maukah Kamu Menikah Denganku?</title>
    <style type="text/css">
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    padding: 50px;
}

.container {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #ff4081;
    font-size: 3em;
}

p {
    font-size: 1.2em;
    color: #333;
}

button {
    font-size: 1.2em;
    padding: 10px 20px;
    margin: 10px;
    background-color: #ff4081;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #ff6f91;
}

.popup {
    display: none;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
}

#yes:target, #no:target {
    display: block;
}
</style>
</head>
<body>
    <div class="container">
        <h1>Maukah Kamu Menikah Denganku?</h1>
        <p>Untuk Reisya</p>
        <p>Sejak pertama kali kita bertemu, hidupku dipenuhi dengan kebahagiaan. Kamu adalah sahabatku, pendampingku, dan cinta dalam hidupku. Aku tidak bisa membayangkan menghabiskan sisa hidupku dengan orang lain selain dirimu.</p>
        <p>Maukah kamu menikah denganku?</p>
        <button onclick="window.location.href='#yes';">Ya</button>
        <button onclick="window.location.href='#no';">Tidak</button>
    </div>

    <div id="yes" class="popup">
        <h2>Ya! 🎉</h2>
        <p>Terima kasih! Aku orang paling bahagia sekarang! Aku tidak sabar menghabiskan sisa hidup bersamamu.</p>
    </div>

    <div id="no" class="popup">
        <h2>Oh tidak 😢</h2>
        <p>Tidak apa-apa. Bagaimanapun, kamu akan selalu menjadi orang yang spesial untukku.</p>
    </div>
</body>
</html>