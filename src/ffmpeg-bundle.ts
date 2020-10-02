import path from 'path';
import fs from 'fs';

let ffmpegPath = require('ffmpeg-static');
if (require('./isStandAlone').default) {
	require('./standalone-patch');
	fs.copyFileSync(ffmpegPath, path.join(path.dirname(process.execPath), path.basename(ffmpegPath)))
	ffmpegPath = path.join(path.dirname(process.execPath), path.basename(ffmpegPath))
}

export default ffmpegPath;