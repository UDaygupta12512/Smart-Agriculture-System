// Function to handle query submission
function submitQuery() {
  let query = document.getElementById("queryInput").value;
  let responseBox = document.getElementById("responseOutput");

  if (query.trim() === "") {
    responseBox.innerHTML = "⚠️ Please enter a question.";
    return;
  }

  // For now, just simulate AI response
  responseBox.innerHTML = "🤖 Analyzing your query...<br><br> Suggestion: Water your crops early in the morning.";
}

// Voice input using Web Speech API
function startVoice() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-IN"; // Can change to Hindi, etc.
  recognition.start();

  recognition.onresult = function(event) {
    let speechResult = event.results[0][0].transcript;
    document.getElementById("queryInput").value = speechResult;
  }
}

// Handle image upload
document.getElementById("imageUpload").addEventListener("change", function() {
  let file = this.files[0];
  if (file) {
    document.getElementById("responseOutput").innerHTML = "📷 Image uploaded: " + file.name + "<br> (Future: send to AI for analysis)";
  }
});
