export const videoBgIn = ()=> {
    const videoBgElems = document.querySelectorAll('.video-bg');

    const videoContent = `
        <source src="video/video.webm" type="video/webm">
        <source src="video/video.mp4" type="video/mp4">
    `;
    for (const iterator of videoBgElems) {
        iterator.innerHTML = videoContent;
    }
};