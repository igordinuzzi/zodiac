document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for Zodiac sign selections
    document.getElementById('sign').addEventListener('change', checkCompatibility);
    document.getElementById('sign1-direct').addEventListener('change', checkDirectCompatibility);
    document.getElementById('sign2-direct').addEventListener('change', checkDirectCompatibility);

    // Theme switch event listener
    document.getElementById('checkbox').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });
});


var compatibility = {
    "Aries": {
        "mostCompatible": ["Leo", "Sagittarius"],
        "alsoCompatible": ["Aquarius", "Gemini"],
        "lessCompatible": ["Cancer", "Capricorn"]
    },
    "Taurus": {
        "mostCompatible": ["Virgo", "Capricorn"],
        "alsoCompatible": ["Cancer", "Pisces"],
        "lessCompatible": ["Leo", "Aquarius"]
    },
    "Gemini": {
        "mostCompatible": ["Libra", "Aquarius"],
        "alsoCompatible": ["Aries", "Leo"],
        "lessCompatible": ["Virgo", "Pisces"]
    },
    "Cancer": {
        "mostCompatible": ["Scorpio", "Pisces"],
        "alsoCompatible": ["Taurus", "Virgo"],
        "lessCompatible": ["Aries", "Libra"]
    },
    "Leo": {
        "mostCompatible": ["Aries", "Sagittarius"],
        "alsoCompatible": ["Gemini", "Libra"],
        "lessCompatible": ["Taurus", "Scorpio"]
    },
    "Virgo": {
        "mostCompatible": ["Taurus", "Capricorn"],
        "alsoCompatible": ["Cancer", "Scorpio"],
        "lessCompatible": ["Gemini", "Sagittarius"]
    },
    "Libra": {
        "mostCompatible": ["Gemini", "Aquarius"],
        "alsoCompatible": ["Leo", "Sagittarius"],
        "lessCompatible": ["Cancer", "Capricorn"]
    },
    "Scorpio": {
        "mostCompatible": ["Cancer", "Pisces"],
        "alsoCompatible": ["Virgo", "Capricorn"],
        "lessCompatible": ["Leo", "Aquarius"]
    },
    "Sagittarius": {
        "mostCompatible": ["Aries", "Leo"],
        "alsoCompatible": ["Libra", "Aquarius"],
        "lessCompatible": ["Virgo", "Pisces"]
    },
    "Capricorn": {
        "mostCompatible": ["Taurus", "Virgo"],
        "alsoCompatible": ["Scorpio", "Pisces"],
        "lessCompatible": ["Aries", "Libra"]
    },
    "Aquarius": {
        "mostCompatible": ["Gemini", "Libra"],
        "alsoCompatible": ["Aries", "Sagittarius"],
        "lessCompatible": ["Taurus", "Scorpio"]
    },
    "Pisces": {
        "mostCompatible": ["Cancer", "Scorpio"],
        "alsoCompatible": ["Taurus", "Capricorn"],
        "lessCompatible": ["Gemini", "Sagittarius"]
    }
};

function checkCompatibility() {
    var sign = document.getElementById("sign").value;
    displayResults("mostCompatible", sign);
    displayResults("alsoCompatible", sign);
    displayResults("lessCompatible", sign);
}

function displayResults(category, sign) {
    var resultElementId = category + "Result";
    
    var resultText = compatibility[sign][category].join(", ");
    document.getElementById(resultElementId).innerText = resultText;

    // Show the corresponding image
    var img = document.getElementById(category + "Image");
    img.style.display = "block";
}

function checkDirectCompatibility() {
    var sign1 = document.getElementById("sign1-direct").value;
    var sign2 = document.getElementById("sign2-direct").value;

    var mostCompatible = compatibility[sign1].mostCompatible.includes(sign2);
    var alsoCompatible = compatibility[sign1].alsoCompatible.includes(sign2);
    var lessCompatible = compatibility[sign1].lessCompatible.includes(sign2);

    console.log("Compatibility Check:", {mostCompatible, alsoCompatible, lessCompatible}); // Debugging log

    var resultText;
    var isSignificantCompatibility = mostCompatible || alsoCompatible || lessCompatible;
    if (mostCompatible) {
        resultText = "These signs are highly compatible!";
    } else if (alsoCompatible) {
        resultText = "These signs are compatible.";
    } else if (lessCompatible) {
        resultText = "These signs have less compatibility.";
    } else {
        resultText = "There is no significant compatibility or incompatibility.";
    }

    document.getElementById("directCompatibilityResult").innerText = resultText;
    
    // Show the appropriate image based on the compatibility check
    var directImg = document.getElementById("directCompatibilityImage");
    var noSignificantImg = document.getElementById("noSignificantCompatibilityImage");

    if (isSignificantCompatibility) {
        directImg.style.display = "block";
        noSignificantImg.style.display = "none";
    } else {
        directImg.style.display = "none";
        noSignificantImg.style.display = "block";
    }
}
