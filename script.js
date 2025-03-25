function showStatus(message, isError = false) {
    const statusDiv = document.getElementById('status');
    statusDiv.style.display = 'block';
    statusDiv.textContent = message;
    statusDiv.className = 'status ' + (isError ? 'error' : 'success');
}

function launchSteam() {
    try {
        window.location.href = 'steam://';
        showStatus('Attempting to launch Steam...');
    } catch (error) {
        showStatus('Error launching Steam: ' + error.message, true);
    }
}

function launchSteamLibrary() {
    try {
        window.location.href = 'steam://open/library';
        showStatus('Attempting to launch Steam Library...');
    } catch (error) {
        showStatus('Error launching Steam Library: ' + error.message, true);
    }
}

function launchSteamBigPicture() {
    try {
        window.location.href = 'steam://open/bigpicture';
        showStatus('Attempting to launch Steam Big Picture...');
    } catch (error) {
        showStatus('Error launching Steam Big Picture: ' + error.message, true);
    }
}

// New functions to try launching SAM
function launchSAM() {
    try {
        // Try launching SAM through Steam's protocol with executable path
        window.location.href = 'steam://launch/440/SteamAchievementManager.exe';
        showStatus('Attempting to launch SAM through Steam protocol...');
    } catch (error) {
        showStatus('Error launching SAM: ' + error.message, true);
    }
}

function launchSAMWithParams() {
    try {
        // Try launching with the SAM executable name
        window.location.href = 'steam://launch/440/SAM.Picker.exe';
        showStatus('Attempting to launch SAM Picker...');
    } catch (error) {
        showStatus('Error launching SAM Picker: ' + error.message, true);
    }
}

function launchSAMWithCustomProtocol() {
    try {
        // Try launching with the full SAM executable name
        window.location.href = 'steam://launch/440/SAM.API.exe';
        showStatus('Attempting to launch SAM API...');
    } catch (error) {
        showStatus('Error launching SAM API: ' + error.message, true);
    }
}

// New function to try launching with Steam's app protocol
function launchSAMWithAppProtocol() {
    try {
        // Try launching with Steam's app protocol
        window.location.href = 'steam://app/440';
        showStatus('Attempting to launch through Steam app protocol...');
    } catch (error) {
        showStatus('Error launching through app protocol: ' + error.message, true);
    }
} 