type QuizItem ={
    question: string;
    options:string[];
    answerIndex:number;

}


const QuizData:QuizItem[] = [ //クイズの答えは左から0，1、2…とコードを打ち込む
    {
        question: " 玉ねぎの花言葉は？",
        options: ["儚い","永遠","切なさ","未来"],
        answerIndex:1,
    },

    {
        question: "アザラシの花言葉は ？",
        options: ["弱肉強食","天下無双","進撃","偽物"],
        answerIndex:1,
    },

    {
        question: " ピーマンの花言葉は？",
        options: ["ひたむき","繁栄","海の恵み","愛情"],
        answerIndex:2,

    },
    {
        question: "エリンギの花言葉は ？",
        options: ["宇宙","星空","儚い","器用"],
        answerIndex:0,
    },   

    {
        question: "3つ前の答えは？",
        options: ["海の恵み","天下無双","永遠","該当なし"],
        answerIndex:1,
    }
]
 export default QuizData