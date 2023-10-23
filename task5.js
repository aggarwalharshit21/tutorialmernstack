<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
    <style>
        .input-box {
            display: block;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" class="input-box"><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" class="input-box"><br>

        <label for="website">Website:</label>
        <input type="url" id="website" class="input-box"><br>

        <label for="message">Message:</label>
        <textarea id="message" class="input-box" rows="4" cols="50"></textarea><br>

        <input type="button" value="Submit" onclick="submitForm()" class="input-box">
    </form>

    <script>
        function submitForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let website = document.getElementById("website").value;
            let message = document.getElementById("message").value;

            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Website:", website);
            console.log("Message:", message);
        }
    </script>
</body>
</html>
