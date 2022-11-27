import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

type CompressorOutput = {
    data: Buffer;
    sourcePath: string;
    destinationPath: string;
};
    

const compressor = (src: string, dest: string) => {
    return imagemin([src], {
        destination: dest,
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8],
            }),
        ],
    });
};

const compressorLog = (data: CompressorOutput[]) => {
    for (const file of data) {
        console.log(`   Compressed "${file.sourcePath}" to "${file.destinationPath}"`);
    }
};

export default ({src, dest}) => {
    return {
        name: 'vite-plugin-imgcompression',
        enforce: 'post',
        async closeBundle() {
            console.log('\n########################################  Compressing Images  ######################################## \n');
            compressorLog(await compressor(src, dest));
            console.log('\n########################################  Images Compressed  ######################################### \n');
        }
    }
}