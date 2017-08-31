const DetailTextarea = function (options = {}) {
    return `<div class="content-box-same">
            <h2 class="content-box-head content-box-head-skin">${options.title}</h2>
            <textarea class="content-box-text content-box-text-skin" id="${setKey(options.title)}" rows="2" placeholder='${options.content}'></textarea>
            </div>`;
};


const DetailTextareaSection = function (options = {}) {
    const section = options.map(Textarea); // (t) => Textarea(t)

    return section.join('');
};

