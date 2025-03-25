function showStatus(message, isError = false) {
    const statusDiv = document.getElementById('status');
    statusDiv.style.display = 'block';
    statusDiv.textContent = message;
    statusDiv.className = 'status ' + (isError ? 'error' : 'success');
}

function getExecutablePath(inputId) {
    const input = document.getElementById(inputId);
    return input.value.trim() || input.placeholder;
}

// Add download detection
let isDownloading = false;

function launchExecutable() {
    try {
        const exePath = getExecutablePath('mainExePath');
        
        // Set up download detection
        isDownloading = false;
        window.addEventListener('beforeunload', function(e) {
            if (!isDownloading) {
                isDownloading = true;
                showStatus('File download detected!', false);
                // Optionally prevent the download
                // e.preventDefault();
                // e.returnValue = '';
            }
        });

        // Try using the file protocol
        window.location.href = `file:///${exePath.replace(/\\/g, '/')}`;
        showStatus('Attempting to launch executable using file protocol...');
    } catch (error) {
        showStatus('Error launching executable: ' + error.message, true);
    }
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
        const exePath = getExecutablePath('mainExePath');
        // Try launching SAM through Steam's protocol with executable path
        window.location.href = `steam://launch/440/${exePath}`;
        showStatus('Attempting to launch SAM through Steam protocol...');
    } catch (error) {
        showStatus('Error launching SAM: ' + error.message, true);
    }
}

function launchSAMWithParams() {
    try {
        const exePath = getExecutablePath('pickerExePath');
        // Try launching with the SAM executable name
        window.location.href = `steam://launch/440/${exePath}`;
        showStatus('Attempting to launch SAM Picker...');
    } catch (error) {
        showStatus('Error launching SAM Picker: ' + error.message, true);
    }
}

function launchSAMWithCustomProtocol() {
    try {
        const exePath = getExecutablePath('apiExePath');
        // Try launching with the full SAM executable name
        window.location.href = `steam://launch/440/${exePath}`;
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

function launchExecutableWithShell() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using the shell protocol
        window.location.href = `shell:AppsFolder\\${exePath.split('\\').pop()}`;
        showStatus('Attempting to launch executable using shell protocol...');
    } catch (error) {
        showStatus('Error launching executable: ' + error.message, true);
    }
}

function launchExecutableWithCmd() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using the cmd protocol
        window.location.href = `cmd:///c start "" "${exePath}"`;
        showStatus('Attempting to launch executable using cmd protocol...');
    } catch (error) {
        showStatus('Error launching executable: ' + error.message, true);
    }
}

function launchExecutableWithMsProtocol() {
    try {
        // Try using Microsoft's protocol
        window.location.href = 'ms-windows-store://pdp/?ProductId=9WZDNCRFJ3PT';
        showStatus('Attempting to launch executable using Microsoft protocol...');
    } catch (error) {
        showStatus('Error launching executable: ' + error.message, true);
    }
} 