# Steam Achievement Manager Deep Link POC

This is a proof of concept for launching Steam Achievement Manager (SAM) from a web browser using a custom protocol handler.

## Prerequisites

1. Windows operating system
2. Steam Achievement Manager installed (from https://github.com/gibbed/SteamAchievementManager)
3. Administrator privileges (for registry modifications)

## Setup Instructions

1. Install Steam Achievement Manager if you haven't already
2. Run the `register_protocol.reg` file as administrator to register the custom protocol handler
   - Right-click the file and select "Run as administrator"
   - Click "Yes" when prompted to modify the registry

## Usage

1. Open `index.html` in a web browser
2. Click the "Launch SAM" button
3. Your browser should prompt to open the SAM application
4. Allow the application to launch when prompted

## Notes

- The protocol handler assumes SAM is installed in the default location (`C:\Program Files\Steam Achievement Manager\`)
- If SAM is installed in a different location, you'll need to modify the path in the `register_protocol.reg` file
- This is a basic POC and may need additional error handling and features for production use

## Security Considerations

- Always verify the source of protocol handler registration scripts
- Be cautious when allowing applications to launch from web browsers
- This POC is for testing purposes only
