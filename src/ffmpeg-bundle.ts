import path from 'path';
import fs from 'fs';

/**
 * Contain the correct path of ffmpeg
 */
let ffmpegPath = require('ffmpeg-static');
if (require('./isStandAlone').default) {
	// If we are inside a standalone paackage (pkg npm) let's apply the patch for the virtual filesystem
	// on windows
	require('./standalone-patch');
	// copy outside of the bundle the ffpmeg executable 
	// otherwise child_process cannot access it
	// maybe there is away to access it inside the pkg snapshop but i didn't find any for now.
	fs.copyFileSync(ffmpegPath, path.join(path.dirname(process.execPath), path.basename(ffmpegPath)))
	ffmpegPath = path.join(path.dirname(process.execPath), path.basename(ffmpegPath))
	fs.chmodSync(ffmpegPath, 0o755)
}

export default ffmpegPath;
