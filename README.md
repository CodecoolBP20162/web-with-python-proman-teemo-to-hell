# Web with Python: ProMan

This is the second team project in the Web with Python module, see the instructions in Canvas


------------------------ I. Save and get item from local storage

<!DOCTYPE html>
<html>
<body>

<div id="result"></div>

<script>
// Check browser support
if (typeof(Storage) !== "undefined") {

	// Create
	------------------------ Create dictionary
	var boards = {};
    boards.title = "Matyi";
    boards.list = ['First element', 'second element'];

    // Store
    ------------------------ Convert to JSON file and save to storage
    localStorage.boards = JSON.stringify(boards);

    // Retrieve
    ------------------------ Retrieve and convert to dictionary
    var boards = JSON.parse(localStorage.getItem("boards"));
    alert(boards.list[0]);

    // Remove
    ------------------------ Remove item from local storage
    localStorage.removeItem('boards');

} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script>

</body>
</html>

------------------------ I. END