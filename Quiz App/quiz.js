const questions=[
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Java',
        'd': 'C++',
        'correct': 'a'
    },

    {
        'que': 'Which of the following is the longest river',
        'a': 'Amazon',
        'b': 'Narmada',
        'c': 'Ganga',
        'd': 'Nile',
        'correct': 'd'
    },

    {
        'que': 'Who is the CEO of Google',
        'a': 'Satya Nadella',
        'b': 'Sundar Pichai',
        'c': 'Ratan Tata',
        'd': 'Mukesh Ambani',
        'correct': 'b'
    },

    {
        'que': 'Which of the following is a the mother of all languages',
        'a': 'C++',
        'b': 'CSS',
        'c': 'C',
        'd': 'C#',
        'correct': 'c'
    }
]

let index=0;
const quesbox=document.getElementById('quesbox');
const optioninputs=document.querySelectorAll('.opt');
let total=questions.length;
let right=0,wrong=0;
const Loadquest=()=>{
    if(index===total)
    {
        return endquiz();
    }
    reset();
    const data=questions[index];
    console.log(data);
    quesbox.innerText=`${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText=data.a;
    optioninputs[1].nextElementSibling.innerText=data.b;
    optioninputs[2].nextElementSibling.innerText=data.c;
    optioninputs[3].nextElementSibling.innerText=data.d;
}


const submitQuiz=()=>{
    const ans=getAnswer();
    const data=questions[index];
    if(ans===data.correct)
    {
        right++;
    }
    else
    {
        wrong++;
    }
    index++;
    Loadquest();
    return;
}


const getAnswer=()=>{
    let answer;
    optioninputs.forEach((input)=>{
        if(input.checked)
        {
             answer=input.value;
        }
    });
    return answer;
}


const reset=()=>{
    optioninputs.forEach((input)=>{
       input.checked=false;
    });
}


const endquiz=()=>{
    document.getElementById('box').innerHTML=
    `<h3>Thank you for playing the quiz <h3>
     <h2> ${right}/${total} are correct`

}

// initial call
Loadquest();