const codingLanguages = ["HTML", "CSS", "JavaScript"];


const genSentence = document.getElementById('footer-lang');

function builder(languages) {
    let resultSentence = "This page was built using:";
    for(let i=0; i < languages.length; i++) {
        if (i == languages.length - 1) {
            resultSentence = resultSentence.slice(0, -1) + ` and ${languages[i]}`;
            return resultSentence;
        };
        resultSentence += ` ${languages[i]},`;
    };
    return resultSentence;
};


genSentence.textContent = builder(codingLanguages);