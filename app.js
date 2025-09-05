const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Debashish..");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Debashish..");
    } else {
        speak("Good Evening Debashish..");
    }
}

window.addEventListener('load', () => {
    speak("Initializing AI...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Debashish,how may i help you?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening instagram...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://whatsapp.com", "_blank");
        speak("Opening whatsapp");
    } else if (message.includes("open flipkart")) {
        window.open("https://flipkart.com", "_blank");
        speak("Opening flipkart");
    } else if (message.includes("open amazon")) {
        window.open("https://amazon.in", "_blank");
        speak("Opening amazon");
    } else if (message.includes("open zepto")) {
        window.open("https://zeptonow.com", "_blank");
        speak("Opening zepto");
    } else if (message.includes("open map")) {
        window.open("https://maps.google.com", "_blank");
        speak("Opening googlemap");
    } else if (message.includes("open paytm")) {
        window.open("https://paytm.com", "_blank");
        speak("Opening paytm");
    } else if (message.includes("open phonepe")) {
        window.open("https://phonepe.com", "_blank");
        speak("Opening phonepe");
    } else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening linkedin");
    } else if (message.includes("open gpay")) {
        window.open("https://pay.google.com", "_blank");
        speak("Opening googlepay");
    } else if (message.includes("open groww")) {
        window.open("https://groww.in", "_blank");
        speak("Opening groww");
    } else if (message.includes("open uber")) {
        window.open("https://uber.com", "_blank");
        speak("Opening uber");
    } else if (message.includes("open rapido")) {
        window.open("https://rapido.bike", "_blank");
        speak("Opening rapido");
    } else if (message.includes("open sintch app")) {
        window.open("https://snitch.com", "_blank");
        speak("Opening snitch");
    } else if (message.includes("open telegram")) {
        window.open("https://telegram.org", "_blank");
        speak("Opening telegram");
    } else if (message.includes("open spotify")) {
        window.open("https://spotify.com", "_blank");
        speak("Opening spotify");
    } else if (message.includes("gmail")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening gmail");
    } else if (message.includes("open play store")) {
        window.open("https://play.google.com", "_blank");
        speak("Opening play store");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}