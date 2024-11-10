// Step 1: Store images in an array (vector)
var images = ["11.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg", 
              "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
var currentIndex = 0;  // Initialize the index for the image to be displayed

// Step 2: Create a function to display images sequentially on each click
function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();  // Play the audio
    alert("lala");
    console.log(114514);

    // Step 3: Create and append the next image in the sequence
    var img = document.createElement("img");
    img.src = images[currentIndex];  // Set the source to the image at currentIndex
    document.getElementById("container").appendChild(img);

    // Step 4: Update the index for the next image
    currentIndex++;

    // Step 5: Loop back to the first image if the end is reached
    if (currentIndex >= images.length) {
        currentIndex = 0;  // Reset to the first image
    }
}
