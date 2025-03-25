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

// New functions to try Steam-specific protocols
function launchWithSteamProtocol() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using Steam's protocol with the executable path
        window.location.href = `steam://open/console`;
        showStatus('Attempting to launch through Steam console...');
    } catch (error) {
        showStatus('Error launching through Steam console: ' + error.message, true);
    }
}

function launchWithSteamGameProtocol() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using Steam's game protocol
        window.location.href = `steam://rungameid/440?launch=1&args=${encodeURIComponent(exePath)}`;
        showStatus('Attempting to launch through Steam game protocol...');
    } catch (error) {
        showStatus('Error launching through Steam game protocol: ' + error.message, true);
    }
}

function launchWithSteamShortcut() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using Steam's shortcut protocol
        window.location.href = `steam://shortcut/440?path=${encodeURIComponent(exePath)}`;
        showStatus('Attempting to launch through Steam shortcut...');
    } catch (error) {
        showStatus('Error launching through Steam shortcut: ' + error.message, true);
    }
}

function launchWithSteamLaunchProtocol() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using Steam's launch protocol
        window.location.href = `steam://launch/440?args=${encodeURIComponent(exePath)}`;
        showStatus('Attempting to launch through Steam launch protocol...');
    } catch (error) {
        showStatus('Error launching through Steam launch protocol: ' + error.message, true);
    }
}

function launchWithSteamExecProtocol() {
    try {
        const exePath = getExecutablePath('mainExePath');
        // Try using Steam's exec protocol
        window.location.href = `steam://exec/${encodeURIComponent(exePath)}`;
        showStatus('Attempting to launch through Steam exec protocol...');
    } catch (error) {
        showStatus('Error launching through Steam exec protocol: ' + error.message, true);
    }
}

function launchExecutable() {
    try {
        const exePath = getExecutablePath('mainExePath');
        const fileUrl = `file:///${exePath.replace(/\\/g, '/')}`;
        
        showStatus('Attempting to launch executable...');
        
        // Try multiple methods to launch the file
        const methods = [
            // Method 1: Direct file protocol
            () => window.location.href = fileUrl,
            
            // Method 2: Using a data URL with the file path
            () => window.location.href = `data:text/plain;base64,${btoa(fileUrl)}`,
            
            // Method 3: Using a blob URL
            () => {
                const blob = new Blob([fileUrl], { type: 'text/plain' });
                const blobUrl = URL.createObjectURL(blob);
                window.location.href = blobUrl;
            },
            
            // Method 4: Using an iframe (might be blocked by browsers)
            () => {
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = fileUrl;
                document.body.appendChild(iframe);
            }
        ];

        // Try each method
        methods.forEach(method => {
            try {
                method();
            } catch (e) {
                console.log('Method failed:', e);
            }
        });

        // Show a message about potential download
        showStatus('If the file exists, it may be downloaded instead of launched due to browser security restrictions.', false);
    } catch (error) {
        showStatus('Error attempting to launch file: ' + error.message, true);
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