const Example1: {
  question: string;
  max_score: number;
  desc: string;
  input_format: string;
  output_format: string;
  constraints: string;
  general_constraints: string;
  example: { input: string; output: string };
} = {
  question: "Sum of Array Elements",

  max_score: 50,
  desc: "Given an array of integers, find the sum of the elements of the given array.Note: Try to solve this without declaring / storing the array elements.,",

  input_format:
    "The first line of input contains T - the number of test cases. It's followed by 2T lines, the first line contains N - the size of the array, and the second line contains the elements of the array.",

  output_format:
    "For each test case, print the sum of the elements of the array, separated by a new line.",

  constraints: `
    10 points
    1 <= N <= 1000
    1 <= arr[i] <= 106

    40 points
    1 <= N <= 1000
    1 <= arr[i] <= 1015`,

  general_constraints: `1 <= T <= 100`,

  example: {
    input: `
    2 
    3
    5 15 3
    2
    70 100`,
    output: `
    23
    170
    `,
  },
};

export const QusetionDisplay = () => {
    return (
        <div className=" p-2">
        <h2 className=" font-bold text-xl pb-4">{Example1.question}</h2>
        <p>{Example1.desc}</p>
        <h2 className=" font-bold text-xl pb-4">Constraints</h2><p>{Example1.constraints}</p>
        <h2 className=" font-bold text-xl pb-4">General Constraints</h2><p>{Example1.general_constraints}</p>
        <h2 className=" font-bold text-xl pb-4">Input Format</h2><p>{Example1.input_format}</p>
        <h2 className=" font-bold text-xl pb-4">Output Format</h2><p>{Example1.output_format}</p>
        <h2 className=" font-bold text-xl pb-4">Input</h2><p>{Example1.example.input}</p>
        <h2 className=" font-bold text-xl pb-4">Output</h2><p>{Example1.example.output}</p>
        </div>
    )
}
