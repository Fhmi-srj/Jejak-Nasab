const fs = require('fs');
const path = require('path');

// Load .env file manually (standalone server.js doesn't read .env)
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        line = line.trim();
        if (!line || line.startsWith('#')) return;
        const eqIndex = line.indexOf('=');
        if (eqIndex === -1) return;
        const key = line.substring(0, eqIndex).trim();
        let value = line.substring(eqIndex + 1).trim();
        // Remove surrounding quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        // Only set if not already defined in OS env
        if (key && !(key in process.env)) {
            process.env[key] = value;
        }
    });
    console.log('✅ Loaded .env file');
} else {
    console.log('⚠️  No .env file found at', envPath);
}

// Start the Next.js standalone server
require('./server.js');
