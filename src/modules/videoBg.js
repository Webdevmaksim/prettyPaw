export const videoBgIn = ()=> {
    const videoBgElems = document.querySelectorAll('.video-bg');

    const videoContent = `
        <source src="video/video.webm" type="video/webm">
        <source src="video/video.mp4" type="video/mp4">
    `;

    //! - Version 1
    // for (const iterator of videoBgElems) {
    //     iterator.innerHTML = videoContent;
    // }

    //! - Version 2
    for (let i = 0; i < videoBgElems.length; i++) {
        videoBgElems[i].innerHTML = videoContent;
    }
};