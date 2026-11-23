
// ========================================
// VANARAKSHA AI - COMPLETE APP.JS
// ========================================

// HTML elements
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const photoStatus = document.getElementById("photoStatus");

const soundButton = document.getElementById("soundButton");
const soundStatus = document.getElementById("soundStatus");

const alertButton = document.getElementById("alertButton");
const alertStatus = document.getElementById("alertStatus");

const languageSelect = document.getElementById("languageSelect");

const detectButton = document.getElementById("detectButton");
const detectionStatus = document.getElementById("detectionStatus");

// ========================================
// 1. THREE LANGUAGE TRANSLATIONS
// ========================================

const translations = {
    en: {
        title: "WILDLIFE EARLY WARNING SYSTEM",
        heading: "Protect Farms. Protect Wildlife.",
        description: "Smart monitoring dashboard for wildlife alerts and farm safety.",
        photoTitle: "📷 Upload Farm Photo",
        photoDescription: "Choose an image to preview.",
        photoEmpty: "No photo selected.",
        photoSuccess: "Photo uploaded successfully!",
        soundTitle: "🔊 Acoustic Monitoring",
        soundDescription: "Test the alert sound system.",
        soundButton: "Test Siren",
        soundInactive: "Siren is inactive.",
        soundSuccess: "Test siren played!",
        alertTitle: "🚨 Wildlife Alert",
        alertEmpty: "No active alerts.",
        alertButton: "Test Wildlife Alert",
        alertMessage: "DEMO ALERT: Possible wildlife movement. Please verify manually.",
        voice: "Warning. Possible wildlife movement detected. Please stay alert.",
        voiceMissing: "English voice is not available on this device."
    },

    kn: {
        title: "ವನ್ಯಜೀವಿ ಮುನ್ನೆಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆ",
        heading: "ಕೃಷಿಯನ್ನು ರಕ್ಷಿಸಿ. ವನ್ಯಜೀವಿಗಳನ್ನು ರಕ್ಷಿಸಿ.",
        description: "ವನ್ಯಜೀವಿಗಳ ಎಚ್ಚರಿಕೆ ಮತ್ತು ಕೃಷಿ ಸುರಕ್ಷತೆಗಾಗಿ ಸ್ಮಾರ್ಟ್ ವ್ಯವಸ್ಥೆ.",
        photoTitle: "📷 ಕೃಷಿ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        photoDescription: "ನೋಡಲು ಒಂದು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        photoEmpty: "ಯಾವುದೇ ಫೋಟೋ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ.",
        photoSuccess: "ಫೋಟೋ ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ!",
        soundTitle: "🔊 ಧ್ವನಿ ಮೇಲ್ವಿಚಾರಣೆ",
        soundDescription: "ಎಚ್ಚರಿಕೆಯ ಧ್ವನಿಯನ್ನು ಪರೀಕ್ಷಿಸಿ.",
        soundButton: "ಸೈರನ್ ಪರೀಕ್ಷಿಸಿ",
        soundInactive: "ಸೈರನ್ ನಿಷ್ಕ್ರಿಯವಾಗಿದೆ.",
        soundSuccess: "ಸೈರನ್ ಪರೀಕ್ಷೆ ಯಶಸ್ವಿಯಾಗಿದೆ!",
        alertTitle: "🚨 ವನ್ಯಜೀವಿ ಎಚ್ಚರಿಕೆ",
        alertEmpty: "ಯಾವುದೇ ಎಚ್ಚರಿಕೆ ಇಲ್ಲ.",
        alertButton: "ಎಚ್ಚರಿಕೆ ಪರೀಕ್ಷಿಸಿ",
        alertMessage: "ಪರೀಕ್ಷಾ ಎಚ್ಚರಿಕೆ: ವನ್ಯಜೀವಿಗಳ ಚಲನೆ ಇರಬಹುದು. ದಯವಿಟ್ಟು ಪರಿಶೀಲಿಸಿ.",
        voice: "ಎಚ್ಚರಿಕೆ. ವನ್ಯಜೀವಿಗಳ ಚಲನೆ ಕಂಡುಬಂದಿರಬಹುದು. ದಯವಿಟ್ಟು ಜಾಗರೂಕರಾಗಿರಿ.",
        voiceMissing: "ಈ ಸಾಧನದಲ್ಲಿ ಕನ್ನಡ ಧ್ವನಿ ಲಭ್ಯವಿಲ್ಲ."
    },

    hi: {
        title: "वन्यजीव प्रारंभिक चेतावनी प्रणाली",
        heading: "खेतों और वन्यजीवों की रक्षा करें।",
        description: "वन्यजीव चेतावनी और खेतों की सुरक्षा के लिए स्मार्ट सिस्टम।",
        photoTitle: "📷 खेत की फोटो अपलोड करें",
        photoDescription: "देखने के लिए एक तस्वीर चुनें।",
        photoEmpty: "कोई फोटो नहीं चुनी गई।",
        photoSuccess: "फोटो सफलतापूर्वक अपलोड हुई!",
        soundTitle: "🔊 ध्वनि निगरानी",
        soundDescription: "अलर्ट ध्वनि का परीक्षण करें।",
        soundButton: "सायरन जांचें",
        soundInactive: "सायरन बंद है।",
        soundSuccess: "सायरन सफलतापूर्वक बजा!",
        alertTitle: "🚨 वन्यजीव चेतावनी",
        alertEmpty: "कोई सक्रिय चेतावनी नहीं है।",
        alertButton: "चेतावनी जांचें",
        alertMessage: "डेमो चेतावनी: वन्यजीवों की हलचल हो सकती है। कृपया जांच करें।",
        voice: "चेतावनी। वन्यजीवों की हलचल हो सकती है। कृपया सतर्क रहें।",
        voiceMissing: "इस डिवाइस पर हिंदी आवाज उपलब्ध नहीं है।"
    }
};

// Language voice codes
const languageCodes = {
    en: "en-IN",
    kn: "kn-IN",
    hi: "hi-IN"
};

// ========================================
// 2. CHANGE DASHBOARD LANGUAGE
// ========================================

function changeLanguage(language) {
    const t = translations[language];

    if (!t) return;

    document.querySelector(".tag").textContent = t.title;
    document.querySelector(".hero h1").textContent = t.heading;
    document.querySelector(".hero p:last-child").textContent = t.description;

    const panelTitles = document.querySelectorAll(".panel h3");

    panelTitles[0].textContent = t.photoTitle;
    panelTitles[1].textContent = t.soundTitle;
    panelTitles[2].textContent = t.alertTitle;

    const panelDescriptions = document.querySelectorAll(".panel p");

    panelDescriptions[0].textContent = t.photoDescription;

    photoStatus.textContent = photoInput.files.length
        ? t.photoSuccess
        : t.photoEmpty;

    panelDescriptions[2].textContent = t.soundDescription;

    soundButton.textContent = t.soundButton;
    soundStatus.textContent = t.soundInactive;

    alertButton.textContent = t.alertButton;
    alertStatus.textContent = t.alertEmpty;
    alertStatus.style.color = "";

    document.documentElement.lang = language;

    window.speechSynthesis.cancel();
}

languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
});

// ========================================
// 3. FARM PHOTO UPLOAD
// ========================================

photoInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        photoStatus.textContent = "Please select an image file.";
        return;
    }

    const imageURL = URL.createObjectURL(file);

    photoPreview.src = imageURL;
    photoPreview.style.display = "block";

    photoStatus.textContent =
        translations[languageSelect.value].photoSuccess;

    detectButton.disabled = false;

    const canvas = document.getElementById("detectionCanvas");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    detectionStatus.textContent =
        "Photo ready. Click Analyze Farm Photo with AI.";
});

// ========================================
// 4. TEST SIREN SOUND
// ========================================

let audioContext;

soundButton.addEventListener("click", async function () {
    try {
        audioContext = audioContext || new (
            window.AudioContext || window.webkitAudioContext
        )();

        if (audioContext.state === "suspended") {
            await audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "sawtooth";

        oscillator.frequency.setValueAtTime(
            650, audioContext.currentTime
        );

        oscillator.frequency.linearRampToValueAtTime(
            950, audioContext.currentTime + 0.5
        );

        oscillator.frequency.linearRampToValueAtTime(
            650, audioContext.currentTime + 1
        );

        gain.gain.setValueAtTime(0.15, audioContext.currentTime);

        gain.gain.linearRampToValueAtTime(
            0, audioContext.currentTime + 2
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 2);

        soundStatus.textContent =
            translations[languageSelect.value].soundSuccess;

    } catch (error) {
        soundStatus.textContent = "Audio could not play.";
        console.error(error);
    }
});

// ========================================
// 5. MULTILINGUAL VOICE ALERT
// ========================================

function speakWildlifeWarning() {
    const selectedLanguage = languageSelect.value;
    const t = translations[selectedLanguage];
    const selectedVoiceCode = languageCodes[selectedLanguage];

    if (!("speechSynthesis" in window)) {
        alertStatus.textContent = "Voice alerts are not supported.";
        return;
    }

    window.speechSynthesis.cancel();

    const availableVoices = window.speechSynthesis.getVoices();

    const matchingVoice = availableVoices.find(voice =>
        voice.lang.toLowerCase() === selectedVoiceCode.toLowerCase()
    );

    const finalVoice = matchingVoice ||
        availableVoices.find(voice =>
            voice.lang.toLowerCase().startsWith(
                selectedVoiceCode.split("-")[0].toLowerCase() + "-"
            )
        );

    if (!finalVoice) {
        alertStatus.textContent = t.voiceMissing;
        return;
    }

    const message = new SpeechSynthesisUtterance(t.voice);

    message.voice = finalVoice;
    message.lang = selectedVoiceCode;
    message.rate = 0.85;
    message.pitch = 1;

    message.onstart = function () {
        alertStatus.textContent = t.alertMessage;
    };

    message.onerror = function (event) {
        alertStatus.textContent = "Voice playback failed: " + event.error;
    };

    window.speechSynthesis.speak(message);
}

alertButton.addEventListener("click", function () {
    const t = translations[languageSelect.value];

    alertStatus.textContent = t.alertMessage;
    alertStatus.style.color = "#ff7777";

    speakWildlifeWarning();
});

// ========================================
// 6. INITIALIZE DASHBOARD
// ========================================

changeLanguage("en");

console.log("VanaRaksha AI loaded successfully!");

window.speechSynthesis.onvoiceschanged = function () {
    const voices = window.speechSynthesis.getVoices();

    voices.forEach(voice => {
        console.log(voice.name, "|", voice.lang);
    });
};

// ========================================
// 7. INTERACTIVE FARM SAFETY MAP
// ========================================

if (typeof L !== "undefined" && document.getElementById("map")) {
    const map = L.map("map").setView([13.34, 77.10], 9);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19
        }
    ).addTo(map);

    let farmMarker = null;
    let safetyCircle = null;

    const mapStatus = document.getElementById("mapStatus");

    map.on("click", function (event) {
        const latitude = event.latlng.lat;
        const longitude = event.latlng.lng;

        if (farmMarker) {
            map.removeLayer(farmMarker);
        }

        if (safetyCircle) {
            map.removeLayer(safetyCircle);
        }

        farmMarker = L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup("📍 Selected Farm Location")
            .openPopup();

        safetyCircle = L.circle([latitude, longitude], {
            color: "red",
            fillColor: "#ff4444",
            fillOpacity: 0.15,
            radius: 2000
        }).addTo(map);

        mapStatus.textContent =
            "Farm selected! Latitude: " +
            latitude.toFixed(5) +
            " | Longitude: " +
            longitude.toFixed(5) +
            " | Safety radius: 2 km";
    });

} else {
    console.error("Leaflet map library not loaded.");
}

// ========================================
// 8. EMERGENCY NOTIFICATION SYSTEM
// ========================================

const generateAlert = document.getElementById("generateAlert");
const copyAlert = document.getElementById("copyAlert");
const whatsappAlert = document.getElementById("whatsappAlert");

const farmerPhone = document.getElementById("farmerPhone");

const notificationPreview =
    document.getElementById("notificationPreview");

const notificationStatus =
    document.getElementById("notificationStatus");

let emergencyMessage = "";

const emergencyTranslations = {
    en: "WILDLIFE ALERT! Possible wild animal movement near your farm. Please stay alert, keep a safe distance and contact local forest officials. This is a demonstration alert.",

    kn: "ವನ್ಯಜೀವಿ ಎಚ್ಚರಿಕೆ! ನಿಮ್ಮ ಕೃಷಿಭೂಮಿಯ ಬಳಿ ಕಾಡುಪ್ರಾಣಿಗಳ ಚಲನೆ ಇರಬಹುದು. ದಯವಿಟ್ಟು ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ, ಸುರಕ್ಷಿತ ಅಂತರ ಕಾಯ್ದುಕೊಳ್ಳಿ ಮತ್ತು ಸ್ಥಳೀಯ ಅರಣ್ಯ ಅಧಿಕಾರಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ. ಇದು ಪರೀಕ್ಷಾ ಸಂದೇಶ.",

    hi: "वन्यजीव चेतावनी! आपके खेत के पास जंगली जानवरों की हलचल हो सकती है। कृपया सतर्क रहें, सुरक्षित दूरी बनाए रखें और स्थानीय वन अधिकारियों से संपर्क करें। यह एक परीक्षण संदेश।"
};

// Generate message
generateAlert.addEventListener("click", function () {
    const language = languageSelect.value;

    emergencyMessage = emergencyTranslations[language];

    notificationPreview.textContent = emergencyMessage;

    notificationStatus.textContent =
        "Emergency message prepared successfully!";
});

// Copy message
copyAlert.addEventListener("click", async function () {
    if (!emergencyMessage) {
        notificationStatus.textContent =
            "Generate a message first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(emergencyMessage);
        notificationStatus.textContent = "Message copied!";

    } catch (error) {
        notificationStatus.textContent =
            "Copy failed. Please select and copy the message manually.";
    }
});

// Share through WhatsApp
whatsappAlert.addEventListener("click", function () {
    if (!emergencyMessage) {
        notificationStatus.textContent =
            "Generate a message first.";
        return;
    }

    const phone = farmerPhone.value.replace(/\D/g, "");

    if (phone && !/^\d{10,15}$/.test(phone)) {
        notificationStatus.textContent =
            "Enter a valid phone number with country code.";
        return;
    }

    const message = encodeURIComponent(emergencyMessage);

    const whatsappURL = phone
        ? "https://wa.me/" + phone + "?text=" + message
        : "https://wa.me/?text=" + message;

    window.open(whatsappURL, "_blank");

    notificationStatus.textContent =
        "WhatsApp message prepared. Review and send it in WhatsApp.";
});

// ========================================
// 9. AI WILDLIFE PHOTO DETECTION
// ========================================

let wildlifeModel = null;

detectButton.addEventListener("click", async function () {
    if (!photoInput.files.length || !photoPreview.src) {
        detectionStatus.textContent =
            "Please upload a photo first.";
        return;
    }

    if (typeof cocoSsd === "undefined") {
        detectionStatus.textContent =
            "AI library not loaded. Check your internet connection and refresh.";
        return;
    }

    try {
        detectButton.disabled = true;

        detectionStatus.textContent =
            "Loading AI model... Please wait.";

        if (!wildlifeModel) {
            wildlifeModel = await cocoSsd.load();
        }

        detectionStatus.textContent =
            "AI is analyzing your photo...";

        // Wait for the uploaded image to load
        if (!photoPreview.complete || photoPreview.naturalWidth === 0) {
            await new Promise((resolve, reject) => {
                photoPreview.onload = resolve;
                photoPreview.onerror = reject;
            });
        }

        // Run AI detection
        const predictions = await wildlifeModel.detect(photoPreview);
        console.log("AI detection results:", predictions);
        

        // Prepare canvas to match displayed image size
        const canvas = document.getElementById("detectionCanvas");

        if (!canvas) {
            throw new Error("Detection canvas not found in HTML.");
        }

        const ctx = canvas.getContext("2d");

        const displayWidth = photoPreview.clientWidth;
        const displayHeight = photoPreview.clientHeight;

        canvas.width = displayWidth;
        canvas.height = displayHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate image scaling
        const scaleX = displayWidth / photoPreview.naturalWidth;
        const scaleY = displayHeight / photoPreview.naturalHeight;

        // Find elephant
        const elephant = predictions.find(
            item => item.class === "elephant"
        );

        if (elephant) {
            const [originalX, originalY, originalWidth, originalHeight] =
                elephant.bbox;

            // Scale AI coordinates to displayed image coordinates
            const x = originalX * scaleX;
            const y = originalY * scaleY;
            const width = originalWidth * scaleX;
            const height = originalHeight * scaleY;

            // Draw green rectangle
            ctx.strokeStyle = "#00ff66";
            ctx.lineWidth = Math.max(3, displayWidth / 150);
            ctx.strokeRect(x, y, width, height);

            // Draw label background
            const label = `ELEPHANT ${(elephant.score * 100).toFixed(1)}%`;

            const fontSize = Math.max(14, displayWidth / 30);

            ctx.font = `bold ${fontSize}px Arial`;

            const labelWidth = ctx.measureText(label).width + 12;
            const labelHeight = fontSize + 10;

            const labelY = Math.max(0, y - labelHeight);

            ctx.fillStyle = "#00aa44";
            ctx.fillRect(x, labelY, labelWidth, labelHeight);

            // Draw label text
            ctx.fillStyle = "#ffffff";

            ctx.fillText(
                label,
                x + 6,
                labelY + fontSize
            );

            detectionStatus.textContent =
                `⚠️ Possible elephant detected! Confidence: ${(elephant.score * 100).toFixed(1)}%. Please verify manually and follow local safety procedures.`;

        } else {
            detectionStatus.textContent =
                "No elephant detected in this image. This does NOT guarantee that the farm is safe.";
        }

        // Show all detected objects
        if (predictions.length > 0) {
            const objects = predictions.map(item =>
                `${item.class} (${(item.score * 100).toFixed(0)}%)`
            );

            detectionStatus.textContent +=
                " Objects detected: " + objects.join(", ");
        }

    } catch (error) {
        console.error("AI detection error:", error);

        detectionStatus.textContent =
            "AI detection failed. Check your internet connection and try again.";

    } finally {
        detectButton.disabled = !photoInput.files.length;
    }
});

// ========================================
// VANARAKSHA AI INITIALIZATION COMPLETE
// ========================================

console.log("🐘 VanaRaksha AI is ready!");
// ========================================
// 10. WILDLIFE ACOUSTIC ANALYSIS
// ========================================

const audioInput = document.getElementById("audioInput");
const audioPlayer = document.getElementById("audioPlayer");
const analyzeAudioButton = document.getElementById("analyzeAudioButton");
const audioAnalysisResult = document.getElementById("audioAnalysisResult");

let uploadedAudioBuffer = null;


// Audio upload
audioInput.addEventListener("change", async function () {

    const file = this.files[0];

    if (!file) return;

    try {

        audioAnalysisResult.textContent = "Loading audio recording...";

        audioPlayer.src = URL.createObjectURL(file);
        audioPlayer.style.display = "block";

        const arrayBuffer = await file.arrayBuffer();

        const audioContextForAnalysis = new (
            window.AudioContext || window.webkitAudioContext
        )();

        uploadedAudioBuffer =
            await audioContextForAnalysis.decodeAudioData(arrayBuffer);

        analyzeAudioButton.disabled = false;

        audioAnalysisResult.textContent =
            "Audio uploaded successfully! Duration: " +
            uploadedAudioBuffer.duration.toFixed(2) +
            " seconds. Ready for analysis.";

        await audioContextForAnalysis.close();

    } catch (error) {

        console.error("Audio upload error:", error);

        audioAnalysisResult.textContent =
            "Could not read this audio. Please try another audio file.";

        analyzeAudioButton.disabled = true;
    }
});


// Analyze audio
analyzeAudioButton.addEventListener("click", function () {

    if (!uploadedAudioBuffer) {
        audioAnalysisResult.textContent =
            "Please upload an audio recording first.";
        return;
    }

    const duration = uploadedAudioBuffer.duration;

    let totalEnergy = 0;
    let peakAmplitude = 0;
    let sampleCount = 0;

    // Analyze every audio channel
    for (
        let channel = 0;
        channel < uploadedAudioBuffer.numberOfChannels;
        channel++
    ) {

        const samples = uploadedAudioBuffer.getChannelData(channel);

        for (let i = 0; i < samples.length; i++) {

            const value = Math.abs(samples[i]);

            totalEnergy += samples[i] * samples[i];

            if (value > peakAmplitude) {
                peakAmplitude = value;
            }

            sampleCount++;
        }
    }

    const rms = Math.sqrt(totalEnergy / sampleCount);

    const intensity = rms * 100;

    let activity;

    if (rms < 0.01) {
        activity = "Very low sound activity";
    } else if (rms < 0.05) {
        activity = "Low sound activity";
    } else if (rms < 0.15) {
        activity = "Moderate sound activity";
    } else {
        activity = "High sound activity";
    }

    const report = `
        <h4>🎙️ Acoustic Analysis Report</h4>

        <p>✅ Audio analyzed successfully!</p>

        <p><b>Recording duration:</b>
        ${duration.toFixed(2)} seconds</p>

        <p><b>Audio channels:</b>
        ${uploadedAudioBuffer.numberOfChannels}</p>

        <p><b>Average sound intensity:</b>
        ${intensity.toFixed(2)}%</p>

        <p><b>Peak amplitude:</b>
        ${(peakAmplitude * 100).toFixed(2)}%</p>

        <p><b>Sound activity:</b>
        ${activity}</p>

        <hr>

        <p>⚠️ This is an acoustic activity analysis,
        not confirmed elephant detection.
        A trained wildlife audio model and field validation
        are required to identify animal species.</p>
    `;

    audioAnalysisResult.innerHTML = report;

    console.log("VanaRaksha Acoustic Analysis:", {
        duration,
        rms,
        peakAmplitude,
        activity
    });

});
// ========================================
// 11. AUDIO WAVEFORM VISUALIZER
// ========================================

const waveformCanvas = document.getElementById("audioWaveform");
const waveformCtx = waveformCanvas.getContext("2d");

audioInput.addEventListener("change", async function () {

    const file = this.files[0];

    if (!file) return;

    try {
        const context = new (
            window.AudioContext || window.webkitAudioContext
        )();

        const buffer = await context.decodeAudioData(
            await file.arrayBuffer()
        );

        const samples = buffer.getChannelData(0);

        const width = 900;
        const height = 150;

        waveformCanvas.width = width;
        waveformCanvas.height = height;

        waveformCtx.clearRect(0, 0, width, height);

        const middle = height / 2;
        const step = Math.ceil(samples.length / width);

        waveformCtx.strokeStyle = "#65d6a0";
        waveformCtx.lineWidth = 2;

        waveformCtx.beginPath();

        for (let x = 0; x < width; x++) {

            const sample = samples[x * step] || 0;
            const amplitude = sample * middle * 0.9;

            waveformCtx.moveTo(x, middle - amplitude);
            waveformCtx.lineTo(x, middle + amplitude);
        }

        waveformCtx.stroke();

        await context.close();

        console.log("Audio waveform generated successfully!");

    } catch (error) {
        console.error("Waveform error:", error);
    }
});
// ========================================
// 12. ACOUSTIC ACTIVITY INDICATOR
// ========================================

const acousticRisk = document.getElementById("acousticRisk");
const riskLevel = document.getElementById("riskLevel");

analyzeAudioButton.addEventListener("click", function () {

    if (!uploadedAudioBuffer) return;

    let totalEnergy = 0;
    let totalSamples = 0;

    for (
        let channel = 0;
        channel < uploadedAudioBuffer.numberOfChannels;
        channel++
    ) {

        const samples = uploadedAudioBuffer.getChannelData(channel);

        for (let i = 0; i < samples.length; i++) {
            totalEnergy += samples[i] * samples[i];
            totalSamples++;
        }
    }

    const rms = Math.sqrt(totalEnergy / totalSamples);

    let level;
    let message;
    let background;

    if (rms < 0.01) {
        level = "LOW";
        message = "Low acoustic activity";
        background = "#245c45";
    } else if (rms < 0.05) {
        level = "MODERATE";
        message = "Moderate acoustic activity";
        background = "#80621c";
    } else {
        level = "HIGH";
        message = "High acoustic activity";
        background = "#842f35";
    }

    riskLevel.textContent =
        level + " — " + message +
        ". Sound intensity only; wildlife presence is not confirmed.";

    acousticRisk.style.background = background;
    acousticRisk.style.padding = "15px";
    acousticRisk.style.borderRadius = "12px";
    acousticRisk.style.color = "white";

    console.log("Acoustic activity level:", level);
});
// =====================================
// SMART COMBINED WILDLIFE ALERT
// =====================================

const combinedCheckButton = document.getElementById("combinedCheckButton");

combinedCheckButton.addEventListener("click", function () {

    const visionSummary = document.getElementById("visionSummary");
    const soundSummary = document.getElementById("soundSummary");
    const locationSummary = document.getElementById("locationSummary");
    const combinedResult = document.getElementById("combinedResult");

    // Get existing photo detection result
    const visionText = document.getElementById("detectionStatus").textContent;

    // Get existing audio risk result
    const soundText = document.getElementById("riskLevel").textContent;

    // Get selected farm location
    const mapText = document.getElementById("mapStatus").textContent;

    // Update vision information
    if (
        visionText.toLowerCase().includes("possible elephant detected")
    ) {
        visionSummary.textContent = "⚠️ " + visionText;
    } else {
        visionSummary.textContent = visionText;
    }

    // Update sound information
    soundSummary.textContent = soundText;

    // Update farm location
    if (
        mapText &&
        !mapText.toLowerCase().includes("select")
    ) {
        locationSummary.textContent = mapText;
    } else {
        locationSummary.textContent = "No farm location selected yet.";
    }

    // Generate combined report
    const possibleElephant =
        visionText.toLowerCase().includes("possible elephant detected");

    const highSound =
        soundText.toLowerCase().includes("high");

    const moderateSound =
        soundText.toLowerCase().includes("moderate");

    let report = "";

    if (possibleElephant && (highSound || moderateSound)) {

        report = "⚠️ PRIORITY REVIEW REQUIRED\n\n" +
            "The uploaded image contains a possible elephant detection, " +
            "and the audio recording shows " + soundText + ".\n\n" +
            "Please verify the situation. Sound intensity does not confirm wildlife presence.";

    } else if (possibleElephant) {

        report = "⚠️ POSSIBLE WILDLIFE IMAGE DETECTION\n\n" +
            "The uploaded image contains a possible elephant detection.\n\n" +
            "Please verify the image and check the farm surroundings.";

    } else {

        report = "ℹ️ MONITORING REPORT\n\n" +
            "No possible elephant detection was reported by the uploaded image analysis.\n\n" +
            "Audio result: " + soundText + "\n\n" +
            "This does not guarantee that the farm is safe.";
    }

    combinedResult.style.whiteSpace = "pre-line";
    combinedResult.textContent = report;

    console.log("Combined wildlife report generated.");
});
// =====================================
// EMERGENCY SMS ALERT SYSTEM
// =====================================

// =====================================
// LAPTOP-FRIENDLY EMERGENCY SMS
// =====================================

const smsAlertButton = document.getElementById("smsAlert");

smsAlertButton.addEventListener("click", function () {

    const vision = document.getElementById("detectionStatus").textContent;
    const location = document.getElementById("mapStatus").textContent;

    const message =
        "🚨 VANARAKSHA AI EMERGENCY ALERT\n\n" +
        "Possible wildlife warning:\n" + vision + "\n\n" +
        "Farm location:\n" + location + "\n\n" +
        "Please verify the situation and stay safe.";

    let smsBox = document.getElementById("smsMessageBox");

    if (!smsBox) {
        smsBox = document.createElement("div");
        smsBox.id = "smsMessageBox";
        smsAlertButton.insertAdjacentElement("afterend", smsBox);
    }

    smsBox.innerHTML = `
        <h3>📩 Emergency SMS Preview</h3>
        <textarea id="smsText" readonly
        style="width:100%;height:150px;padding:10px;"></textarea>
        <button id="copySMS">📋 Copy SMS Message</button>
        <p id="smsStatus"></p>
    `;

    document.getElementById("smsText").value = message;

    document.getElementById("copySMS").addEventListener("click", async function () {
        try {
            await navigator.clipboard.writeText(message);
            document.getElementById("smsStatus").textContent =
                "✅ Emergency message copied successfully!";
        } catch (error) {
            document.getElementById("smsText").select();
            document.execCommand("copy");
            document.getElementById("smsStatus").textContent =
                "✅ Message copied!";
        }
    });

});