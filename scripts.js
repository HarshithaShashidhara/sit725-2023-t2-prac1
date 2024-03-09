function changeText(day) {
    var textsArray = {
        'Monday': 'It\'s Monday!',
        'Tuesday': 'Hello Tuesday!'
        // Add more days and corresponding text as needed
    };

    var newText = textsArray[day] || 'Default Text';
    document.getElementById('heading').innerHTML = newText;
}

function changeCustomText() {
    var customText = document.getElementById('customText').value;
    document.getElementById('heading').innerHTML = customText || 'Default Text';
}
