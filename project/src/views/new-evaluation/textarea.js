const Textarea = function (options = {}) {
    return `<div class="content-box-same">
            <h2 class="content-box-head content-box-head-skin">${options.title}</h2>
            <textarea class="content-box-text content-box-text-skin" rows="2">${options.content}</textarea>
            </div>`;
};


const TextareaSection = function (options = {}) {
    const section = options.map(Textarea); // (t) => Textarea(t)

    section.join('');
    return `
      ${section}
      `;
};

