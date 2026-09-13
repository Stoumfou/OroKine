const fs = require('fs');
let content = fs.readFileSync('orokine/src/data/sessions.ts', 'utf8');

// The new sessions are added at the end (from SESSION_3 to SESSION_8).
// They were stringified as JSON-like but with export const SESSION_X = { ... }
// I can parse and map them, but they are mixed in with TS code.
// A regex or a quick ast parsing?

// Since it's a TS file, let's just do a string replace for the keys we need to fix.
// Actually, it's easier to run a regex that replaces description string with instructions array,
// adds type and category.

content = content.replace(/"description": "(.*?)",\s*"duration": (\d+),\s*"reps": (\d+)/g, (match, desc, dur, reps) => {
    // desc has \n in it if it had newlines.
    // wait, in the stringified code, \n is \\n.
    const instructions = desc.split('\\n').map(s => `"${s.replace(/"/g, '\\"')}"`).join(',\n        ');
    
    let type = dur !== "0" ? '"timer"' : '"reps"';
    let durationLine = dur !== "0" ? `\n      duration: ${dur},` : '';
    let repsLine = reps !== "0" ? `\n      reps: ${reps},` : (dur === "0" ? `\n      reps: 1,` : '');
    
    return `"category": "Exercice",\n      "type": ${type},${durationLine}${repsLine}\n      "instructions": [\n        ${instructions}\n      ]`;
});

// Also remove "timerOptions": [ ... ] entirely since it's not in the interface, or we can add it to the interface?
// Let's add it to the interface. 
