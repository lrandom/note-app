let txtTitleNode = document.querySelector('#txt-title');
let txtContentNode = document.querySelector('#txt-content');
let editNoteNode = null;

function addNote() {
    if (!txtTitleNode.value) {
        alert("Please input title");
        return;

    }
    if (!txtContentNode.value) {
        alert("Please input content");
        return;
    }

    //thêm
    const listNotesNode = document.querySelector('.list-notes');
    const newNote = `<li onclick="loadDataIntoForm(event)" data-title="${txtTitleNode.value}" data-content="${txtContentNode.value}"  class="cursor-pointer flex items-center justify-between gap-2 bg-gray-200 p-2 rounded-md">
                        <span  class="font-bold">${txtTitleNode.value}</span>
                        <span>
                            <span class="cursor-pointer">
                                 <svg width="16" height="16" viewBox="0 0 35 35" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
<path d="M12.0312 12.0312C12.3213 12.0312 12.5995 12.1465 12.8046 12.3516C13.0098 12.5567 13.125 12.8349 13.125 13.125V26.25C13.125 26.5401 13.0098 26.8183 12.8046 27.0234C12.5995 27.2285 12.3213 27.3438 12.0312 27.3438C11.7412 27.3438 11.463 27.2285 11.2579 27.0234C11.0527 26.8183 10.9375 26.5401 10.9375 26.25V13.125C10.9375 12.8349 11.0527 12.5567 11.2579 12.3516C11.463 12.1465 11.7412 12.0312 12.0312 12.0312ZM17.5 12.0312C17.7901 12.0312 18.0683 12.1465 18.2734 12.3516C18.4785 12.5567 18.5938 12.8349 18.5938 13.125V26.25C18.5938 26.5401 18.4785 26.8183 18.2734 27.0234C18.0683 27.2285 17.7901 27.3438 17.5 27.3438C17.2099 27.3438 16.9317 27.2285 16.7266 27.0234C16.5215 26.8183 16.4062 26.5401 16.4062 26.25V13.125C16.4062 12.8349 16.5215 12.5567 16.7266 12.3516C16.9317 12.1465 17.2099 12.0312 17.5 12.0312ZM24.0625 13.125C24.0625 12.8349 23.9473 12.5567 23.7421 12.3516C23.537 12.1465 23.2588 12.0312 22.9688 12.0312C22.6787 12.0312 22.4005 12.1465 22.1954 12.3516C21.9902 12.5567 21.875 12.8349 21.875 13.125V26.25C21.875 26.5401 21.9902 26.8183 22.1954 27.0234C22.4005 27.2285 22.6787 27.3438 22.9688 27.3438C23.2588 27.3438 23.537 27.2285 23.7421 27.0234C23.9473 26.8183 24.0625 26.5401 24.0625 26.25V13.125Z"
      fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M31.7188 6.5625C31.7188 7.14266 31.4883 7.69906 31.078 8.1093C30.6678 8.51953 30.1114 8.75 29.5312 8.75H28.4375V28.4375C28.4375 29.5978 27.9766 30.7106 27.1561 31.5311C26.3356 32.3516 25.2228 32.8125 24.0625 32.8125H10.9375C9.77718 32.8125 8.66438 32.3516 7.84391 31.5311C7.02344 30.7106 6.5625 29.5978 6.5625 28.4375V8.75H5.46875C4.88859 8.75 4.33219 8.51953 3.92195 8.1093C3.51172 7.69906 3.28125 7.14266 3.28125 6.5625V4.375C3.28125 3.79484 3.51172 3.23844 3.92195 2.8282C4.33219 2.41797 4.88859 2.1875 5.46875 2.1875H13.125C13.125 1.60734 13.3555 1.05094 13.7657 0.640704C14.1759 0.230468 14.7323 0 15.3125 0L19.6875 0C20.2677 0 20.8241 0.230468 21.2343 0.640704C21.6445 1.05094 21.875 1.60734 21.875 2.1875H29.5312C30.1114 2.1875 30.6678 2.41797 31.078 2.8282C31.4883 3.23844 31.7188 3.79484 31.7188 4.375V6.5625ZM9.00813 8.75L8.75 8.87906V28.4375C8.75 29.0177 8.98047 29.5741 9.3907 29.9843C9.80094 30.3945 10.3573 30.625 10.9375 30.625H24.0625C24.6427 30.625 25.1991 30.3945 25.6093 29.9843C26.0195 29.5741 26.25 29.0177 26.25 28.4375V8.87906L25.9919 8.75H9.00813ZM5.46875 6.5625V4.375H29.5312V6.5625H5.46875Z"
      fill="black"/>
</svg>
                            </span>
                    </span>
                    </li>`;
    listNotesNode.innerHTML += newNote;
    _resetForm();
    document.querySelector('.list-note-empty-message')?.classList.add('hidden');
}

function _resetForm() {
    txtTitleNode.value = '';
    txtContentNode.value = '';
    editNoteNode = null;
    document.querySelector('.btn-submit span:nth-child(2)').classList.add('hidden');
    document.querySelector('.btn-submit span:nth-child(1)').classList.remove('hidden');
}

function loadDataIntoForm(evt) {
    editNoteNode = evt.target;
    const txtTitle = editNoteNode.getAttribute('data-title');
    const txtContent = editNoteNode.getAttribute('data-content');
    txtTitleNode.value = txtTitle;
    txtContentNode.value = txtContent;
    document.querySelector('.btn-submit span:nth-child(1)').classList.add('hidden')
    document.querySelector('.btn-submit span:nth-child(2)').classList.remove('hidden')
}

function editNote() {
    editNoteNode.querySelector('li span:first-child').innerText = txtTitleNode.value;
    editNoteNode.setAttribute('data-title', txtTitleNode.value);
    editNoteNode.setAttribute('data-content', txtTitleNode.value);
}

function submitNoteData() {
    if (editNoteNode) {
        editNote();
    } else {
        addNote();
    }

    _saveData();
}


function _saveData() {
    const notes = [];
    const listNoteNodes = document.querySelectorAll('.list-notes li');
    listNoteNodes.forEach(node => {
        notes.push({
            'title': node.getAttribute('data-title'),
            'content': node.getAttribute('data-content')
        })
    })
    localStorage.setItem("NOTES_KEY", JSON.stringify(notes));
}

function _loadData() {
    const notes = JSON.parse(localStorage.getItem("NOTES_KEY")) ?? [];
    if (notes.length != 0) {
        document.querySelector('.list-note-empty-message').classList.add('hidden');
    }
    const listNoteNodes = document.querySelector('.list-notes');
    notes.forEach(note => {
        const newNote = `<li onclick="loadDataIntoForm(event)" data-title="${note.title}" data-content="${note.content}"  class="cursor-pointer flex items-center justify-between gap-2 bg-gray-200 p-2 rounded-md">
                        <span  class="font-bold">${note.title}</span>
                        <span>
                            <span class="cursor-pointer">
                                 <svg width="16" height="16" viewBox="0 0 35 35" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
<path d="M12.0312 12.0312C12.3213 12.0312 12.5995 12.1465 12.8046 12.3516C13.0098 12.5567 13.125 12.8349 13.125 13.125V26.25C13.125 26.5401 13.0098 26.8183 12.8046 27.0234C12.5995 27.2285 12.3213 27.3438 12.0312 27.3438C11.7412 27.3438 11.463 27.2285 11.2579 27.0234C11.0527 26.8183 10.9375 26.5401 10.9375 26.25V13.125C10.9375 12.8349 11.0527 12.5567 11.2579 12.3516C11.463 12.1465 11.7412 12.0312 12.0312 12.0312ZM17.5 12.0312C17.7901 12.0312 18.0683 12.1465 18.2734 12.3516C18.4785 12.5567 18.5938 12.8349 18.5938 13.125V26.25C18.5938 26.5401 18.4785 26.8183 18.2734 27.0234C18.0683 27.2285 17.7901 27.3438 17.5 27.3438C17.2099 27.3438 16.9317 27.2285 16.7266 27.0234C16.5215 26.8183 16.4062 26.5401 16.4062 26.25V13.125C16.4062 12.8349 16.5215 12.5567 16.7266 12.3516C16.9317 12.1465 17.2099 12.0312 17.5 12.0312ZM24.0625 13.125C24.0625 12.8349 23.9473 12.5567 23.7421 12.3516C23.537 12.1465 23.2588 12.0312 22.9688 12.0312C22.6787 12.0312 22.4005 12.1465 22.1954 12.3516C21.9902 12.5567 21.875 12.8349 21.875 13.125V26.25C21.875 26.5401 21.9902 26.8183 22.1954 27.0234C22.4005 27.2285 22.6787 27.3438 22.9688 27.3438C23.2588 27.3438 23.537 27.2285 23.7421 27.0234C23.9473 26.8183 24.0625 26.5401 24.0625 26.25V13.125Z"
      fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M31.7188 6.5625C31.7188 7.14266 31.4883 7.69906 31.078 8.1093C30.6678 8.51953 30.1114 8.75 29.5312 8.75H28.4375V28.4375C28.4375 29.5978 27.9766 30.7106 27.1561 31.5311C26.3356 32.3516 25.2228 32.8125 24.0625 32.8125H10.9375C9.77718 32.8125 8.66438 32.3516 7.84391 31.5311C7.02344 30.7106 6.5625 29.5978 6.5625 28.4375V8.75H5.46875C4.88859 8.75 4.33219 8.51953 3.92195 8.1093C3.51172 7.69906 3.28125 7.14266 3.28125 6.5625V4.375C3.28125 3.79484 3.51172 3.23844 3.92195 2.8282C4.33219 2.41797 4.88859 2.1875 5.46875 2.1875H13.125C13.125 1.60734 13.3555 1.05094 13.7657 0.640704C14.1759 0.230468 14.7323 0 15.3125 0L19.6875 0C20.2677 0 20.8241 0.230468 21.2343 0.640704C21.6445 1.05094 21.875 1.60734 21.875 2.1875H29.5312C30.1114 2.1875 30.6678 2.41797 31.078 2.8282C31.4883 3.23844 31.7188 3.79484 31.7188 4.375V6.5625ZM9.00813 8.75L8.75 8.87906V28.4375C8.75 29.0177 8.98047 29.5741 9.3907 29.9843C9.80094 30.3945 10.3573 30.625 10.9375 30.625H24.0625C24.6427 30.625 25.1991 30.3945 25.6093 29.9843C26.0195 29.5741 26.25 29.0177 26.25 28.4375V8.87906L25.9919 8.75H9.00813ZM5.46875 6.5625V4.375H29.5312V6.5625H5.46875Z"
      fill="black"/>
</svg>
                            </span>
                    </span>
                    </li>`;
        listNoteNodes.innerHTML += newNote;
    });
}

_loadData();
