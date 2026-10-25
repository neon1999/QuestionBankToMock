
export type AnswerOption = 'A' | 'B' | 'C' | 'D' | 'E';

export interface AnswerDetailsDto {
	answer: AnswerOption;
	solution: string | null;
}

export interface QuestionBankQuestionDto {
	question_number: string;
	question_text: string;
	options: Record<AnswerOption, string>;
	answerDetails?: AnswerDetailsDto;
}

export interface QuestionBankSetDto {
	set_id: string;
	category: string;
	directions: string;
	has_diagram: boolean;
	diagram_type: string | null;
	extracted_diagram_data: {
		headers: string[];
		rows: string[][];
	};
	notes: string[];
	questions: QuestionBankQuestionDto[];
}

const questionBankData: QuestionBankSetDto[] = [
{
"set_id": "DI Set 1: Q.1 - Q.5",
"category": "Data Interpretation",
"directions": "Directions (1-5): Read the given data carefully and answer the questions. A pie chart gives the percentage distribution of the total number of students in 4 different schools, P, Q, R, and S. The total number of students in all four schools together is 2000. A table gives the ratio of Boys to Girls in these schools.",
"has_diagram": true,
"diagram_type": "Pie Chart & Table",
"extracted_diagram_data": {
"headers": ["School", "% Distribution of Total Students (Total = 2000)", "Boys : Girls Ratio"],
"rows": [
["School P", "20%", "5:3"],
["School Q", "x%", "7:5"],
["School R", "y%", "3:2"],
["School S", "25%", "3:2"]
]
},
"notes": [
"1. The total number of students in school Q is 200 more than the total number of students in school P.",
"2. The remaining students are in school R."
],
"questions": [
{
"question_number": "Q.1",
"question_text": "Find the total number of boys in school S.",
"options": {
"A": "300",
"B": "310",
"C": "320",
"D": "290",
"E": "280"
}
},
{
"question_number": "Q.2",
"question_text": "What is the ratio of the number of girls in school P to the number of girls in school Q?",
"options": {
"A": "2:3",
"B": "3:5",
"C": "4:5",
"D": "5:6",
"E": "3:4"
}
},
{
"question_number": "Q.3",
"question_text": "Find the difference between the total number of students in school S and the total number of boys in school R.",
"options": {
"A": "180",
"B": "190",
"C": "200",
"D": "210",
"E": "220"
}
},
{
"question_number": "Q.4",
"question_text": "The number of girls in school R is what % of the total number of students in school P?",
"options": {
"A": "40%",
"B": "45%",
"C": "50%",
"D": "55%",
"E": "60%"
}
},
{
"question_number": "Q.5",
"question_text": "Find the average number of boys in schools P, Q, and R together.",
"options": {
"A": "280",
"B": "290",
"C": "295",
"D": "305",
"E": "300"
}
}
]
},
{
"set_id": "DI Set 2: Q.6 - Q.10",
"category": "Data Interpretation",
"directions": "Directions(6-10): Study the data carefully and answer the questions. A line graph shows the number of Toys manufactured by Company A and Company B over three months: January, February, and March. Data is given in variables.",
"has_diagram": true,
"diagram_type": "Line Graph",
"extracted_diagram_data": {
"headers": ["Month", "Company A", "Company B"],
"rows": [
["January", "m", "(m+50)"],
["February", "(2m-40)", "n"],
["March", "(n+60)", "(m+110)"]
]
},
"notes": [
"1. The average number of toys manufactured by Company A in January and February together is 220.",
"2. The ratio of toys manufactured by Company B in February to Company A in January is 5:4."
],
"questions": [
{
"question_number": "Q.6",
"question_text": "Find the total number of toys manufactured by Company A in March.",
"options": {
"A": "260",
"B": "270",
"C": "280",
"D": "250",
"E": "240"
}
},
{
"question_number": "Q.7",
"question_text": "What is the ratio of the number of toys manufactured by Company B in January to the number of toys manufactured by Company A in February?",
"options": {
"A": "2:3",
"B": "3:4",
"C": "4:5",
"D": "5:6",
"E": "6:7"
}
},
{
"question_number": "Q.8",
"question_text": "Find the difference between the total toys manufactured by Company A in all three months and the total toys manufactured by Company B in all three months.",
"options": {
"A": "10",
"B": "20",
"C": "30",
"D": "40",
"E": "50"
}
},
{
"question_number": "Q.9",
"question_text": "The number of toys manufactured by Company B in March is what % of the number of toys manufactured by Company B in February?",
"options": {
"A": "125%",
"B": "130%",
"C": "135%",
"D": "140%",
"E": "145%"
}
},
{
"question_number": "Q.10",
"question_text": "Find the average number of toys manufactured by Company A in January and Company B in March.",
"options": {
"A": "195",
"B": "205",
"C": "210",
"D": "225",
"E": "215"
}
}
]
},
{
"set_id": "DI Set 3: Q.11 - Q.15",
"category": "Data Interpretation",
"directions": "Directions(11-15): Read the information carefully and answer the questions. A double bar graph shows the number of Online and Offline tickets sold by three theaters X, Y, and Z.",
"has_diagram": true,
"diagram_type": "Double Bar Graph",
"extracted_diagram_data": {
"headers": ["Theater", "Online Tickets", "Offline Tickets"],
"rows": [
["Theater X", "300", "400"],
["Theater Y", "a", "(a-100)"],
["Theater Z", "b", "(b+50)"]
]
},
"notes": [
"1. The total tickets (Online + Offline) sold by Theater Y are 20% more than the total tickets sold by Theater X.",
"2. The Online tickets sold by Theater Z are 50% of the total tickets sold by Theater X."
],
"questions": [
{
"question_number": "Q.11",
"question_text": "Find the total number of Offline tickets sold by Theater Y.",
"options": {
"A": "370",
"B": "380",
"C": "390",
"D": "360",
"E": "350"
}
},
{
"question_number": "Q.12",
"question_text": "What is the ratio of Online tickets sold by Theater X to the Offline tickets sold by Theater Z?",
"options": {
"A": "2:3",
"B": "3:4",
"C": "4:5",
"D": "5:6",
"E": "6:7"
}
},
{
"question_number": "Q.13",
"question_text": "Find the difference between the total number of Online tickets sold by all three theaters and the total number of Offline tickets sold by all three theaters.",
"options": {
"A": "10",
"B": "20",
"C": "30",
"D": "40",
"E": "50"
}
},
{
"question_number": "Q.14",
"question_text": "The Online tickets sold by Theater Y are what % of the Offline tickets sold by Theater X?",
"options": {
"A": "110%",
"B": "115.5%",
"C": "120.5%",
"D": "117.5%",
"E": "130%"
}
},
{
"question_number": "Q.15",
"question_text": "Find the average number of total tickets sold by Theater X and Theater Z together.",
"options": {
"A": "680",
"B": "700",
"C": "710",
"D": "740",
"E": "725"
}
}
]
},
{
"set_id": "DI Set 4: Q.16 - Q.20",
"category": "Data Interpretation",
"directions": "Directions(16-20): Study the table carefully and answer the questions. The table gives the Total Income and Total Expenditure of three persons P, Q, and R. (Profit = Income - Expenditure).",
"has_diagram": true,
"diagram_type": "Table",
"extracted_diagram_data": {
"headers": ["Persons", "Income", "Expenditure"],
"rows": [
["Person P", "4000", "x"],
["Person Q", "(x+1500)", "y"],
["Person R", "(y+2500)", "z"]
]
},
"notes": [
"1. The Profit made by Person P is 25% of his Total Income.",
"2. The Profit made by Person Q is Rs 1200.",
"3. The total Expenditure of P, Q, and R together is Rs 10500."
],
"questions": [
{
"question_number": "Q.16",
"question_text": "Find the Profit made by Person R.",
"options": {
"A": "Rs 1600",
"B": "Rs 1700",
"C": "Rs 1800",
"D": "Rs 1500",
"E": "Rs 1400"
}
},
{
"question_number": "Q.17",
"question_text": "What is the ratio of the Income of Person P to the Expenditure of Person Q?",
"options": {
"A": "38:31",
"B": "40:33",
"C": "42:35",
"D": "44:37",
"E": "36:29"
}
},
{
"question_number": "Q.18",
"question_text": "Find the difference between the total Income of all three persons and the total Expenditure of all three persons.",
"options": {
"A": "Rs 3600",
"B": "Rs 3700",
"C": "Rs 3800",
"D": "Rs 3900",
"E": "Rs 4000"
}
},
{
"question_number": "Q.19",
"question_text": "The Income of Person R is what % more than the Income of Person P?",
"options": {
"A": "35%",
"B": "40%",
"C": "45%",
"D": "50%",
"E": "55%"
}
},
{
"question_number": "Q.20",
"question_text": "Find the average Expenditure of Person P and Person R.",
"options": {
"A": "Rs 3400",
"B": "Rs 3500",
"C": "Rs 3600",
"D": "Rs 3800",
"E": "Rs 3650"
}
}
]
},
{
"set_id": "DI Set 5: Q.21 - Q.25",
"category": "Data Interpretation",
"directions": "Directions(21-25): Read the data carefully and answer the questions. A pie chart gives the percentage distribution of total vehicles (Petrol + Diesel) in 4 cities: A, B, C, and D. Total vehicles in all four cities = 3000. A bar graph shows the number of Diesel vehicles in these cities.",
"has_diagram": true,
"diagram_type": "Pie Chart & Bar Graph",
"extracted_diagram_data": {
"headers": ["City", "% Distribution of Total Vehicles (Total = 3000)", "Number of Diesel Vehicles"],
"rows": [
["City A", "18%", "240"],
["City B", "22%", "360"],
["City C", "c%", "p"],
["City D", "d%", "q"]
]
},
"notes": [
"1. The total number of vehicles in City C is 150 more than the total number of vehicles in City B.",
"2. The number of Petrol vehicles in City C is equal to the number of Diesel vehicles in City A.",
"3. The ratio of Petrol to Diesel vehicles in City D is 5:6."
],
"questions": [
{
"question_number": "Q.21",
"question_text": "Find the total number of Diesel vehicles in City C.",
"options": {
"A": "570",
"B": "580",
"C": "590",
"D": "560",
"E": "550"
}
},
{
"question_number": "Q.22",
"question_text": "What is the ratio of Petrol vehicles in City A to Petrol vehicles in City B?",
"options": {
"A": "1:1",
"B": "2:3",
"C": "3:4",
"D": "4:5",
"E": "5:6"
}
},
{
"question_number": "Q.23",
"question_text": "Find the difference between the total number of vehicles in City C and the total number of Petrol vehicles in City D.",
"options": {
"A": "340",
"B": "350",
"C": "360",
"D": "370",
"E": "380"
}
},
{
"question_number": "Q.24",
"question_text": "The Diesel vehicles in City D are what % of the total vehicles in City C?",
"options": {
"A": "62.5%",
"B": "64.5%",
"C": "66.6%",
"D": "68.5%",
"E": "70.5%"
}
},
{
"question_number": "Q.25",
"question_text": "Find the average number of Petrol vehicles in Cities A, B, and C together.",
"options": {
"A": "260",
"B": "270",
"C": "275",
"D": "290",
"E": "280"
}
}
]
},
{
"set_id": "DI Set 6: Q.26 - Q.30",
"category": "Data Interpretation",
"directions": "Directions(26-30): Study the following line graph carefully and answer the questions given below. The line graph shows the number of passengers travelling by two different modes of transport (Bus and Train) on three different days of the week.",
"has_diagram": true,
"diagram_type": "Line Graph",
"extracted_diagram_data": {
"headers": ["Day", "Bus", "Train"],
"rows": [
["Monday", "a", "(a+120)"],
["Tuesday", "b", "(b-80)"],
["Wednesday", "c", "(c+40)"]
]
},
"notes": [
"1. The total number of passengers travelling by both modes of transport together on Monday is 600.",
"2. The ratio of the number of passengers travelling by Train on Tuesday to the number of passengers travelling by Bus on Monday is 5:6.",
"3. The average number of passengers travelling by Bus over all three days together is 260."
],
"questions": [
{
"question_number": "Q.26",
"question_text": "Find the total number of passengers travelling by both Bus and Train together on Wednesday.",
"options": {
"A": "560",
"B": "570",
"C": "580",
"D": "590",
"E": "600"
}
},
{
"question_number": "Q.27",
"question_text": "What is the ratio of the number of passengers travelling by Train on Monday to the number of passengers travelling by Bus on Tuesday?",
"options": {
"A": "7:8",
"B": "9:7",
"C": "5:4",
"D": "4:5",
"E": "3:2"
}
},
{
"question_number": "Q.28",
"question_text": "Find the difference between the total number of passengers travelling by Train over all three days together and the total number of passengers travelling by Bus over all three days together.",
"options": {
"A": "60",
"B": "70",
"C": "80",
"D": "90",
"E": "100"
}
},
{
"question_number": "Q.29",
"question_text": "The number of passengers travelling by Train on Wednesday is what percent of the number of passengers travelling by Train on Monday?",
"options": {
"A": "75%",
"B": "80%",
"C": "85%",
"D": "83.3%",
"E": "88%"
}
},
{
"question_number": "Q.30",
"question_text": "Find the average number of passengers travelling by Train on Monday and Wednesday together.",
"options": {
"A": "310",
"B": "315",
"C": "320",
"D": "325",
"E": "330"
}
}
]
},
{
"set_id": "DI Set 7: Q.31 - Q.35",
"category": "Data Interpretation",
"directions": "Directions(31-35): Study the given bar graph and line chart carefully to answer the following questions. The bar graph shows the total number of students in three different classes (VIII, IX, and X) of a school. The line chart shows the percentage of boys among the total number of students in these respective classes.",
"has_diagram": true,
"diagram_type": "Bar Graph & Line Chart",
"extracted_diagram_data": {
"headers": ["Class", "Total Number of Students", "% of Boys"],
"rows": [
["Class VIII", "p", "40%"],
["Class IX", "(p+40)", "45%"],
["Class X", "(p-20)", "60%"]
]
},
"notes": [
"The total number of boys in Class VIII and Class X together is 188."
],
"questions": [
{
"question_number": "Q.31",
"question_text": "Find the total number of girls studying in Class IX.",
"options": {
"A": "132",
"B": "142",
"C": "152",
"D": "122",
"E": "112"
}
},
{
"question_number": "Q.32",
"question_text": "What is the ratio of the total number of girls in Class VIII to the total number of boys in Class X?",
"options": {
"A": "9:10",
"B": "10:9",
"C": "11:10",
"D": "10:11",
"E": "8:9"
}
},
{
"question_number": "Q.33",
"question_text": "Find the difference between the total number of boys in all three classes together and the total number of girls in all three classes together.",
"options": {
"A": "18",
"B": "24",
"C": "28",
"D": "32",
"E": "36"
}
},
{
"question_number": "Q.34",
"question_text": "The total number of girls in class X is what percent of the total number of girls in class VIII?",
"options": {
"A": "40%",
"B": "50%",
"C": "55%",
"D": "60%",
"E": "65%"
}
},
{
"question_number": "Q.35",
"question_text": "Find the average number of students studying in class VIII and class X together.",
"options": {
"A": "150",
"B": "160",
"C": "170",
"D": "180",
"E": "190"
}
}
]
},
{
"set_id": "DI Set 8: Q.36 - Q.40",
"category": "Data Interpretation",
"directions": "Directions(36-40): Study the following information carefully and answer the questions given below. There are a total of 1000 children living in 3 different societies (Society A, Society B, and Society C). Each child likes exactly one of four different colors of marbles: Red, Blue, Green, and Yellow. The total number of children living in Society A is 300. Out of the total children in Society A, 10% like Red marbles, 40% like Blue marbles, 20% like Green marbles, and 30% like Yellow marbles. The total number of children living in Society B is 400. In society B, the respective ratio of the number of children who like Red, Blue, Green, and Yellow marbles is 2:3:1:4. All the remaining children live in society C. In society C, the number of children who like Blue marbles is 100. The number of children who like Yellow marbles in society C is exactly equal to the number of children who like Green marbles in society B. The number of children who like Red marbles in society C is 60.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": ["Society", "Total Children", "Red", "Blue", "Green", "Yellow"],
"rows": [
["Society A", "300", "30", "120", "60", "90"],
["Society B", "400", "80", "120", "40", "160"],
["Society C", "300", "60", "100", "100", "40"]
]
},
"notes": [],
"questions": [
{
"question_number": "Q.36",
"question_text": "Find the total number of children who like Green marbles in society C.",
"options": {
"A": "100",
"B": "110",
"C": "120",
"D": "90",
"E": "80"
}
},
{
"question_number": "Q.37",
"question_text": "What is the ratio of the number of children who like Red marbles in society A to the number of children who like Yellow marbles in society B?",
"options": {
"A": "3:14",
"B": "3:16",
"C": "5:16",
"D": "3:13",
"E": "5:14"
}
},
{
"question_number": "Q.38",
"question_text": "Find the difference between the total number of children who like Blue marbles across all three societies together and the total number of children who like Red marbles across all three societies together.",
"options": {
"A": "150",
"B": "160",
"C": "170",
"D": "180",
"E": "190"
}
},
{
"question_number": "Q.39",
"question_text": "The number of children who like Green marbles in society A is what % of the number of children who like Yellow marbles in society C?",
"options": {
"A": "120%",
"B": "130%",
"C": "140%",
"D": "150%",
"E": "160%"
}
},
{
"question_number": "Q.40",
"question_text": "Find the average number of children who like Yellow marbles in societies A, B, and C together.",
"options": {
"A": "85.33",
"B": "92.33",
"C": "94.33",
"D": "98.33",
"E": "96.66"
}
}
]
},
{
"set_id": "DI Set 9: Q.41 - Q.45",
"category": "Data Interpretation",
"directions": "Directions(41-45): Study the following information carefully and answer the questions given below. In a group of 150 students, each student plays at least one of the three games: Cricket, Football, and Volleyball. 10 students play all three games. The ratio of the number of students who play only Cricket to the number of students who play only Football is 5:6. The number of students who play only Volleyball is 8 more than the number of students who play only Football. A total of 47 students play exactly two games out of the given three games. 15 students play only Cricket and Football. 20 students play only Football and Volleyball.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": ["Category", "Expression / Value", "Calculated Value"],
"rows": [
["Only Cricket", "5x", "25"],
["Only Football", "6x", "30"],
["Only Volleyball", "6x + 8", "38"],
["Only Cricket & Football", "15", "15"],
["Only Football & Volleyball", "20", "20"],
["Only Cricket & Volleyball", "47 - (15 + 20)", "12"],
["All three games", "10", "10"]
]
},
"notes": [],
"questions": [
{
"question_number": "Q.41",
"question_text": "Find the total number of students who play only Volleyball.",
"options": {
"A": "38",
"B": "40",
"C": "42",
"D": "36",
"E": "34"
}
},
{
"question_number": "Q.42",
"question_text": "What is the ratio of the number of students who play only Cricket to the number of students who play only Football and Volleyball?",
"options": {
"A": "4:5",
"B": "5:4",
"C": "6:5",
"D": "5:6",
"E": "3:4"
}
},
{
"question_number": "Q.43",
"question_text": "Find the difference between the total number of students who play Cricket and the total number of students who play only Football.",
"options": {
"A": "28",
"B": "30",
"C": "32",
"D": "34",
"E": "36"
}
},
{
"question_number": "Q.44",
"question_text": "The number of students who play only Cricket and Volleyball is what % of the number of students who play only Football?",
"options": {
"A": "25%",
"B": "30%",
"C": "35%",
"D": "40%",
"E": "45%"
}
},
{
"question_number": "Q.45",
"question_text": "Find the average number of students who play exactly one game out of the three given games.",
"options": {
"A": "27",
"B": "28",
"C": "29",
"D": "30",
"E": "31"
}
}
]
},
{
"set_id": "DI Set 10: Q.46 - Q.50",
"category": "Data Interpretation",
"directions": "Directions(46-50): Study the following table carefully and answer the questions given below. The table shows the number of Fans and Coolers sold by four different electronic shops (A, B, C, and D).",
"has_diagram": true,
"diagram_type": "Table",
"extracted_diagram_data": {
"headers": ["Shops", "Fans", "Coolers"],
"rows": [
["A", "a", "a+20"],
["B", "b", "b-10"],
["C", "c", "c+30"],
["D", "d", "d-20"]
]
},
"notes": [
"1. The total number of items (Fans and Coolers together) sold by Shop A is 120.",
"2. The total number of Coolers sold by Shop B is equal to the total number of Fans sold by Shop A.",
"3. The total number of Fans sold by all four shops together is 230.",
"4. The total number of items sold by shop C is 10 more than the total number of items sold by shop D."
],
"questions": [
{
"question_number": "Q.46",
"question_text": "Find the total number of Coolers sold by shop C.",
"options": {
"A": "80",
"B": "90",
"C": "100",
"D": "70",
"E": "60"
}
},
{
"question_number": "Q.47",
"question_text": "What is the ratio of the total number of Fans sold by shop C to the total number of Coolers sold by shop D?",
"options": {
"A": "1:2",
"B": "1:1",
"C": "2:1",
"D": "2:3",
"E": "3:2"
}
},
{
"question_number": "Q.48",
"question_text": "Find the difference between the total number of Coolers sold by all four shops together and the total number of Fans sold by all four shops together.",
"options": {
"A": "10",
"B": "15",
"C": "20",
"D": "25",
"E": "30"
}
},
{
"question_number": "Q.49",
"question_text": "The total number of Fans sold by shop D is what % of the total number of Coolers sold by shop A?",
"options": {
"A": "80%",
"B": "90%",
"C": "95%",
"D": "100%",
"E": "110%"
}
},
{
"question_number": "Q.50",
"question_text": "Find the average number of total items sold by shop A and shop B together.",
"options": {
"A": "95",
"B": "100",
"C": "105",
"D": "110",
"E": "115"
}
}
]
},
{
"set_id": "Arithmetic: Q.1 - Q.67",
"category": "Arithmetic",
"directions": "Solve the following arithmetic word problems.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q1",
"question_text": "A shopkeeper gains 50% by selling an article after two successive discounts of 50% and 40% on its marked price. If the cost price of the article is increased by 20%, then what single discount should he now give on the same marked price to get the same profit percentage as earlier?",
"options": {
"A": "34%",
"B": "44%",
"C": "54%",
"D": "64%",
"E": "74%"
}
},
{
"question_number": "Q2",
"question_text": "The number of yellow, red and blue pens in a box are in the ratio 2:5:7 and total pens are 56. If 18 yellow, 12 red and 16 blue pens are added to the box. Find the new ratio of yellow, red and blue pens?",
"options": {
"A": "13:16:22",
"B": "11:34:87",
"C": "23:23:12",
"D": "34:11:17",
"E": "11:12:13"
}
},
{
"question_number": "Q3",
"question_text": "Two spices price Rs.80/kg and Rs. 120/kg are mixed together. They are sold at Rs140/kg, achieving a profit margin of 25%. What is the ratio of two spices in the mixture?",
"options": {
"A": "5:4",
"B": "1:4",
"C": "4:1",
"D": "2:3",
"E": "3:5"
}
},
{
"question_number": "Q4",
"question_text": "The average marks of 10 students are 72. Highest is 110 and lowest is 50. If both highest and lowest are excluded, what is average of remaining?",
"options": {
"A": "45",
"B": "50",
"C": "35",
"D": "72",
"E": "70"
}
},
{
"question_number": "Q5",
"question_text": "A retail shopkeeper marks his goods 50% above original cost price and gives 30% discount, if profit is Rs.110, find original cost price?",
"options": {
"A": "2300",
"B": "3200",
"C": "2200",
"D": "2100",
"E": "4300"
}
},
{
"question_number": "Q6",
"question_text": "Two articles have the same Cost Price, one is sold at a 25% profit and the other at a 15% loss. If the total profit on selling both the articles are 2400, find the cost price of a article?",
"options": {
"A": "15000",
"B": "20000",
"C": "25000",
"D": "24000",
"E": "27000"
}
},
{
"question_number": "Q7",
"question_text": "5 years ago, the ratio of the ages of Pooja: Neha were 3:4. After 7 years from present, ratio will be 6:7. Find the sum of present age of Neha and Pooja?",
"options": {
"A": "38",
"B": "35",
"C": "24",
"D": "57",
"E": "84"
}
},
{
"question_number": "Q8",
"question_text": "Father's age is 3 times son's age. After 8years, father's age will be 2.5 times son's age. Find father age 5year hence?",
"options": {
"A": "55",
"B": "33",
"C": "44",
"D": "77",
"E": "66"
}
},
{
"question_number": "Q9",
"question_text": "A milkman has 100L milk. He sells 20L and adds 20L water, repeats twice. How much pure milk left?",
"options": {
"A": "48 L",
"B": "64 L",
"C": "30 L",
"D": "60 L",
"E": "50 L"
}
},
{
"question_number": "Q10",
"question_text": "Amit can do a work in 20 days, Bhuban in 30 days. They work together for 7 days then A leaves. How many days Bhuban will take to complete remaining work?",
"options": {
"A": "12.4",
"B": "8.5",
"C": "12.5",
"D": "5.8",
"E": "4.8"
}
},
{
"question_number": "Q11",
"question_text": "P completes 30% of work in 18 days, Q completes same work in 30 days. P, Q and R together complete work in 12 days. How many days R alone will take?",
"options": {
"A": "40 days",
"B": "45 days",
"C": "35 days",
"D": "20 days",
"E": "30 days"
}
},
{
"question_number": "Q12",
"question_text": "10 men complete work in 12 days, 12 women complete it in 15 days. How many days will 5 men plus 6 women take to complete the total work?",
"options": {
"A": "90.09",
"B": "13.33",
"C": "14.27",
"D": "33.33",
"E": "12.50"
}
},
{
"question_number": "Q13",
"question_text": "A man invested Rs. 5000 at 8% simple interest for 3 years. What is total amount after 3 years?",
"options": {
"A": "4200",
"B": "5300",
"C": "6200",
"D": "4500",
"E": "6500"
}
},
{
"question_number": "Q14",
"question_text": "Average of 8 numbers is 45. If a number 30 is removed and 70 is added, then find new average of numbers?",
"options": {
"A": "20",
"B": "35",
"C": "45",
"D": "40",
"E": "50"
}
},
{
"question_number": "Q15",
"question_text": "If the downstream speed of a boat is 30 km/h and upstream speed is 18 km/h. Find the speed of stream and the speed of boat in still water respectively (in km/h)?",
"options": {
"A": "2,3",
"B": "24,6",
"C": "6,18",
"D": "6,24",
"E": "4,9"
}
},
{
"question_number": "Q16",
"question_text": "There are 4 yellow Balls, 6 Blue balls and 5 Green balls in a bag. A person takes out 1 balls from the bag, what is the probability that a ball taken out is not yellow?",
"options": {
"A": "11/15",
"B": "12/13",
"C": "11/17",
"D": "2/13",
"E": "1/17"
}
},
{
"question_number": "Q17",
"question_text": "Nikhil spent 20% of his monthly income on house rent, and 25% of the remaining income on food. From the remaining income, the ratio of the amount spent on groceries to savings is 5:7. If the difference between the amount spent on food and groceries is Rs. 1000, find his monthly income?",
"options": {
"A": "30,000",
"B": "20,000",
"C": "10,000",
"D": "25,000",
"E": "15,000"
}
},
{
"question_number": "Q18",
"question_text": "Renu monthly salary is Rs. 30000. Renu spends 12% on rent, 45% on food, 18% on education. What is remaining amount?",
"options": {
"A": "5000",
"B": "2500",
"C": "7500",
"D": "4500",
"E": "3000"
}
},
{
"question_number": "Q19",
"question_text": "The ratio of orange juice and apple juice in a mixture is 7:8. If 45 liters of the mixture is replaced with apple juice and the new ratio becomes 7:11. Find the initial quantity of apple juice?",
"options": {
"A": "56 L",
"B": "134 L",
"C": "96 L",
"D": "121 L",
"E": "144 L"
}
},
{
"question_number": "Q20",
"question_text": "A furniture dealer sells a wooden table for Rs. 2400 and earns a profit of 20 percent on cost price. Due to urgent need of money, he sells the same type of table for Rs. 1800 to another customer. What will be his loss percentage in second transaction?",
"options": {
"A": "20%",
"B": "12%",
"C": "15%",
"D": "10%",
"E": "18%"
}
},
{
"question_number": "Q21",
"question_text": "In competitive exam, 40% fail in Quant, 60% fail in Reasoning, 30% fail in both subjects. What is passing percentage?",
"options": {
"A": "30%",
"B": "70%",
"C": "50%",
"D": "40%",
"E": "20%"
}
},
{
"question_number": "Q22",
"question_text": "Population of town is 18000. It increases by 10% first year and decreases by 20% second year. What will be population after 2 years?",
"options": {
"A": "15820",
"B": "15840",
"C": "15830",
"D": "16320",
"E": "14350"
}
},
{
"question_number": "Q23",
"question_text": "In a school, 40% of the students are boys and the remaining are girls. If 25% of the boys and 20% of the girls participate in a competition, what percentage of the total students participate?",
"options": {
"A": "20%",
"B": "35%",
"C": "25%",
"D": "22%",
"E": "30%"
}
},
{
"question_number": "Q24",
"question_text": "A dishonest dealer claims to sell goods at cost price but uses a weight of 700 grams instead of 1 kilogram. Find his actual profit percentage?",
"options": {
"A": "21.43%",
"B": "14.27%",
"C": "42.86%",
"D": "14.33%",
"E": "11.11%"
}
},
{
"question_number": "Q25",
"question_text": "A sum amounts to ₹13225 in two years at 15% compound interest per annum. Find the original principal?",
"options": {
"A": "14,000",
"B": "1,00,000",
"C": "15,000",
"D": "12,000",
"E": "10,000"
}
},
{
"question_number": "Q26",
"question_text": "A person travels Delhi to Noida by car at 30 km/h and returns along the same route at 60 km/h, distance between Delhi to Noida is 240km. Assuming no stoppages, find the average speed for the entire journey?",
"options": {
"A": "20 km/h",
"B": "40 km/h",
"C": "35 km/h",
"D": "30 km/h",
"E": "45 km/h"
}
},
{
"question_number": "Q27",
"question_text": "A train 170 meters long crosses a platform 250 meters long in 20 seconds. Find the speed of the train in meter/sec?",
"options": {
"A": "21 m/s",
"B": "12 m/s",
"C": "15 m/s",
"D": "120 m/s",
"E": "18 m/s"
}
},
{
"question_number": "Q28",
"question_text": "Two trains of lengths 170 meters and 230 meters run in opposite directions at 72 km/h and 54 km/h, respectively. How many seconds will they take to cross each other completely?",
"options": {
"A": "11.43 sec",
"B": "13.43 sec",
"C": "12 sec",
"D": "15 sec",
"E": "12.5 sec"
}
},
{
"question_number": "Q29",
"question_text": "A boat covers 48 km downstream in four hours and 32 km upstream in four hours. Find the ratio of speed of the stream to speed of the boat in still water?",
"options": {
"A": "5:2",
"B": "2:5",
"C": "5:1",
"D": "1:5",
"E": "1:4"
}
},
{
"question_number": "Q30",
"question_text": "A boat covers 60 km downstream and 36 km upstream in a total of twelve hours. If the speed of the stream is 2 km/h find the speed of the boat in still water?",
"options": {
"A": "6 km/h",
"B": "4 km/h",
"C": "8 km/h",
"D": "5 km/h",
"E": "10 km/h"
}
},
{
"question_number": "Q31",
"question_text": "The length of a rectangular field is 50 m and its width is 20 m. Find the cost of covering the field at ₹17.5 per square meter?",
"options": {
"A": "12500",
"B": "13500",
"C": "17500",
"D": "25000",
"E": "10000"
}
},
{
"question_number": "Q32",
"question_text": "The perimeter of a square is 72 cm and height of a cylinder is 11 less than side of the square. If volume of the cylinder is 1078 cm3, then find the total surfaced area of the cylinder?",
"options": {
"A": "880",
"B": "704",
"C": "840",
"D": "770",
"E": "616"
}
},
{
"question_number": "Q33",
"question_text": "Two persons C and D started from point M & N respectively, and the distance between these two points is 720km. Both persons started at 8 AM and meet at 2PM. If the speed of person C is 20 km/hr more than that of D, then find the speed of person C (in km/hr)?",
"options": {
"A": "75",
"B": "25",
"C": "50",
"D": "70",
"E": "65"
}
},
{
"question_number": "Q34",
"question_text": "Ayush and Subhi start a partnership business by investing Rs. 12000 and Rs. 24000 respectively. After a few months, Raghav joins them with an investment of 36000. At the end of the year total profit share of Ayush and Subhi is double that of Raghav. For how many months did Raghav invest in the business?",
"options": {
"A": "6",
"B": "5",
"C": "4",
"D": "8",
"E": "3"
}
},
{
"question_number": "Q35",
"question_text": "A two-digit number has digits whose sum is 7. When the digits are reversed, the resulting number is 27 greater than the original number. What is the original number?",
"options": {
"A": "24",
"B": "42",
"C": "25",
"D": "52",
"E": "43"
}
},
{
"question_number": "Q36",
"question_text": "A person invested Rs. P at 20% p.a. Compound Interest for 2 years, and Rs. (P + 3500) was invested at Simple Interest at same rate of interest and same time period. If the difference between the total interest earned from both investments is Rs. 3600, What is the value of P+5000?",
"options": {
"A": "1,25,000",
"B": "1,00,000",
"C": "1,20,000",
"D": "1,30,000",
"E": "1,40,000"
}
},
{
"question_number": "Q37",
"question_text": "A train crossed a pole in 12 seconds and the train crossed a platform in 20 seconds. If the length of the platform is 320 meters, then find the ratio of the platform to length of train?",
"options": {
"A": "3:2",
"B": "2:3",
"C": "1:3",
"D": "3:1",
"E": "4:5"
}
},
{
"question_number": "Q38",
"question_text": "A tank contains 90 liters of acid and water solution in the ratio 5:1. If 20% of the solution is drained out and replaced with water, and then some more water is added, the new ratio of acid to water becomes 4:3. Find the total quantity of water added?",
"options": {
"A": "11 L",
"B": "22 L",
"C": "33 L",
"D": "23 L",
"E": "20 L"
}
},
{
"question_number": "Q39",
"question_text": "A can complete a project in 19 days, and B can complete the same project in 13 days. They work together for 7 days. How much of the work remains unfinished?",
"options": {
"A": "12/243",
"B": "12/247",
"C": "25/247",
"D": "23/243",
"E": "23/247"
}
},
{
"question_number": "Q40",
"question_text": "The price of a household appliance increases by 20% in one year and then decreases by 20% in the second year. If its original price was Rs.9,000, what is its price after both changes?",
"options": {
"A": "8640",
"B": "8230",
"C": "6780",
"D": "7840",
"E": "5680"
}
},
{
"question_number": "Q41",
"question_text": "A bank offers 14% annual compound interest, compounded half-yearly. Find the amount on a principal of ₹20,000 after one year?",
"options": {
"A": "20800",
"B": "22900",
"C": "22898",
"D": "29800",
"E": "23000"
}
},
{
"question_number": "Q42",
"question_text": "A sum of money is divided into two parts. One part is invested at 15% simple interest and the other at 25%. If the total investment is ₹40,000 and the annual interest earned is ₹7,200, find the amount invested at 15%?",
"options": {
"A": "28,000",
"B": "24,000",
"C": "32,000",
"D": "12,000",
"E": "14,000"
}
},
{
"question_number": "Q43",
"question_text": "The present ages of three siblings are in the ratio 5:4:7. Seven years ago, the sum of their ages was 43 years. Find the age of the eldest sibling 7 years from now?",
"options": {
"A": "25",
"B": "20",
"C": "30",
"D": "35",
"E": "23"
}
},
{
"question_number": "Q44",
"question_text": "Three years ago, the age of a mother was four times the age of her daughter. Seven years from now, the mother's age will be twice her daughter's age. Find the sum of their present ages?",
"options": {
"A": "42",
"B": "31",
"C": "45",
"D": "60",
"E": "38"
}
},
{
"question_number": "Q45",
"question_text": "The average weight of all students in a class is 55kg. The average weight of boys is 60kg and that of girls is 35kg. If the difference between the number of boys and girls is 60, then find the total number of boys in the class?",
"options": {
"A": "40",
"B": "50",
"C": "100",
"D": "10",
"E": "80"
}
},
{
"question_number": "Q46",
"question_text": "A boat covers 195km upstream in 15 hours and the same distance downstream in 13 hours. If the speed of the stream remains constant, what is the speed of the boat in still water?",
"options": {
"A": "20",
"B": "14",
"C": "12",
"D": "5",
"E": "8"
}
},
{
"question_number": "Q47",
"question_text": "A boat travels 85 km upstream in 17 hours and 105 km downstream in 7 hours. Find the time required to cover 96 km in still water?",
"options": {
"A": "9",
"B": "6.9",
"C": "10",
"D": "9.6",
"E": "8"
}
},
{
"question_number": "Q48",
"question_text": "A shopkeeper marked an article 50% above its cost price. A customer receives two successive discounts of 20% and 15%. If the cost price of the article is Rs.3,500, find the seller's profit?",
"options": {
"A": "75",
"B": "140",
"C": "35",
"D": "70",
"E": "120"
}
},
{
"question_number": "Q49",
"question_text": "The average age of 36 students is 18 years. If a student aged 17 years leaves and a teacher joins, the average of the class becomes 19 years. Find the age of the teacher?",
"options": {
"A": "35",
"B": "43",
"C": "53",
"D": "72",
"E": "45"
}
},
{
"question_number": "Q50",
"question_text": "A sum becomes Rs.21970 in 2 years at compound interest compounded annually at 30% per annum. Find the principal?",
"options": {
"A": "17000",
"B": "7000",
"C": "13000",
"D": "23000",
"E": "18000"
}
},
{
"question_number": "Q51",
"question_text": "A shopkeeper marked an article 20% above its cost price. While selling he allows a discount of 20% on the marked price. If he incurs a loss of Rs. 68, then find the cost price of the article?",
"options": {
"A": "1500",
"B": "2100",
"C": "1800",
"D": "1700",
"E": "1900"
}
},
{
"question_number": "Q52",
"question_text": "A sum of money amounts to Rs. 14500 in 2 years and Rs. 15950 in 3 years, when compounded annually. Find the rate of interest?",
"options": {
"A": "10%",
"B": "20%",
"C": "15%",
"D": "25%",
"E": "30%"
}
},
{
"question_number": "Q53",
"question_text": "A bag contains 7 red balls and 3 green balls. Two balls are drawn at random. What is the probability that both are red?",
"options": {
"A": "1/23",
"B": "34/15",
"C": "7/15",
"D": "2/13",
"E": "8/13"
}
},
{
"question_number": "Q54",
"question_text": "4 years ago, the ages of Kamal and Rohit were in the ratio 2 and 3 respectively. If after 6 years from the present, the ratio of their ages becomes 5:7. What is the present age of Rohit?",
"options": {
"A": "56",
"B": "73",
"C": "40",
"D": "64",
"E": "60"
}
},
{
"question_number": "Q55",
"question_text": "A can do a work in 24 days and B can do the same work in 36 days. A,B and C together can complete the same work in 8 days. In how many days can C alone complete the work?",
"options": {
"A": "13",
"B": "12",
"C": "16",
"D": "10",
"E": "18"
}
},
{
"question_number": "Q56",
"question_text": "Twice the perimeter of square is equal to the circumference of circle. Find the area of square if the area of circle is 616 cm2?",
"options": {
"A": "144",
"B": "121",
"C": "256",
"D": "169",
"E": "196"
}
},
{
"question_number": "Q57",
"question_text": "Mahi spends 70% of her income every month and saves Rs.8400. If her income is increased by 25% while her expenditure is decreased by 25%, then what will be her new monthly savings?",
"options": {
"A": "20300",
"B": "12000",
"C": "25000",
"D": "20000",
"E": "18000"
}
},
{
"question_number": "Q58",
"question_text": "In a mixture, ratio of wine to water is 5: 3. If 20% mixture is replaced with same quantity of wine, then what will be the new ratio of wine to water in the mixture?",
"options": {
"A": "2/7",
"B": "7/3",
"C": "1/3",
"D": "1/5",
"E": "2/5"
}
},
{
"question_number": "Q59",
"question_text": "In a city, 55% of the population are males out of which only 80% are literate. If 65% of the population of the city is literate, then what percentage of the population are illiterate females?",
"options": {
"A": "10%",
"B": "15%",
"C": "24%",
"D": "11.11%",
"E": "8.88%"
}
},
{
"question_number": "Q60",
"question_text": "A certain sum of money is invested at simple interest. The simple interest earned on the sum after a certain period is found to be 2/5th of the principal amount. If the time period of investment is 2 years, find the annual rate of interest at which the sum was invested?",
"options": {
"A": "10%",
"B": "15%",
"C": "20%",
"D": "25%",
"E": "30%"
}
},
{
"question_number": "Q61",
"question_text": "A and B entered into a partnership. A invested Rs 30,000 for 12 months. After 5 months, B joined with an investment of Rs. 45,000. What will be the profit- sharing ratio at the end of the year?",
"options": {
"A": "8:7",
"B": "7:8",
"C": "8:9",
"D": "7:5",
"E": "2:5"
}
},
{
"question_number": "Q62",
"question_text": "A 180-metre-long train crosses another 270-metre-long train running in the opposite direction in 10 seconds. If the speed of the first train is 72 kmph., what is the speed of the second train in kmph?",
"options": {
"A": "108kmph",
"B": "54kmph",
"C": "90kmph",
"D": "72kmph",
"E": "36kmph"
}
},
{
"question_number": "Q63",
"question_text": "In an exam, A got 28% marks and failed by 30 marks, B got 32% marks and failed by 20 marks. If C got 110 marks, then find his percentage?",
"options": {
"A": "44%",
"B": "45%",
"C": "42%",
"D": "40%",
"E": "35%"
}
},
{
"question_number": "Q64",
"question_text": "A boat can cover 60 km downstream in 3 hours and 40 km upstream in 4 hours. Find the speed of the boat in still water?",
"options": {
"A": "15 km/hr",
"B": "12 km/hr",
"C": "10 km/hr",
"D": "18 km/hr",
"E": "14km/hr"
}
},
{
"question_number": "Q65",
"question_text": "The average weight of 8 boys is increased by 2 kg when one boy of 40 kg is replaced by a new boy. Find the weight of new?",
"options": {
"A": "56kg",
"B": "48kg",
"C": "50kg",
"D": "52kg",
"E": "54kg"
}
},
{
"question_number": "Q66",
"question_text": "A trader purchases a refrigerator for ₹24,000 and spends ₹1,500 on transportation and ₹500 on repairs. He marks the article 25% above the total cost and gives a discount of 10% on the marked price. Find his profit percentage?",
"options": {
"A": "12.5%",
"B": "15%",
"C": "20%",
"D": "25%",
"E": "18%"
}
},
{
"question_number": "Q67",
"question_text": "Average runs of a cricket player after 10 innings is 43. After 11th innings, average becomes 47. How many runs scored in 11th innings?",
"options": {
"A": "87",
"B": "78",
"C": "56",
"D": "58",
"E": "33"
}
}
]
},
{
"set_id": "Arithmetic Caselet: Q.68 - Q.70",
"category": "Arithmetic",
"directions": "Direction Q(68-70) Read the given data carefully and answer the following questions. Suchitra has Rs. 20,000 and she invested it in three different schemes P, Q and R. She invested Rs. 8000 in scheme P. The amount invested in scheme Q is Rs. 2000 more than the amount invested in scheme R.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": ["Scheme", "Principal", "Rate", "Time", "Interest Type"],
"rows": [
["P", "8000", "10% p.a.", "2 years", "Simple Interest"],
["Q", "7000", "10% p.a.", "2 years", "Compound Interest (annually)"],
["R", "5000", "12% p.a.", "2 years", "Simple Interest"]
]
},
"notes": [
"Scheme P - 10% p.a. at Simple interest for 2 years.",
"Scheme Q - 10% p.a. at Compound interest (compounded annually) for 2 years.",
"Scheme R - 12% p.a. at Simple interest for 2 years."
],
"questions": [
{
"question_number": "Q68",
"question_text": "What is the total interest earned from scheme P?",
"options": {
"A": "1400",
"B": "1600",
"C": "2000",
"D": "1800",
"E": "1500"
}
},
{
"question_number": "Q69",
"question_text": "What is total amount Suchitra will get from scheme Q after 2 years?",
"options": {
"A": "6480",
"B": "4500",
"C": "8600",
"D": "8470",
"E": "7000"
}
},
{
"question_number": "Q70",
"question_text": "If Suchitra invested whole 20,000 in scheme R for 2 years, how much more interest would she earn?",
"options": {
"A": "540",
"B": "430",
"C": "500",
"D": "550",
"E": "530"
}
}
]
},
{
"set_id": "Quantity Comparison: Q.71 - Q.75",
"category": "Arithmetic",
"directions": "Direction Q(71-75): In the following questions, two quantities are given as Quantity I and Quantity II. You have to compare the two quantities and find the relation between them. Mark your answer as: (a) If Quantity I > Quantity II (b) If Quantity I < Quantity II (c) If Quantity I >= Quantity II (d) If Quantity I <= Quantity II (e) If Quantity I = Quantity II or No relation can be established",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q71",
"question_text": "Quantity I - 15 women can complete a project in 30 days, then find how many women will be required to complete 1/3rd of the same project in 15 days? Quantity II - 20",
"options": {
"A": "If Quantity I > Quantity II",
"B": "If Quantity I < Quantity II",
"C": "If Quantity I >= Quantity II",
"D": "If Quantity I <= Quantity II",
"E": "If Quantity I = Quantity II or No relation can be established"
}
},
{
"question_number": "Q72",
"question_text": "Quantity I - The area of a rectangle is 84 cm2 and its breadth is 5 cm more than its length. What is the area of a circle whose radius is equal to the length of the rectangle? Quantity II - 124 cm2",
"options": {
"A": "If Quantity I > Quantity II",
"B": "If Quantity I < Quantity II",
"C": "If Quantity I >= Quantity II",
"D": "If Quantity I <= Quantity II",
"E": "If Quantity I = Quantity II or No relation can be established"
}
},
{
"question_number": "Q73",
"question_text": "Quantity I - 80% of a number is equal to 50% of another number. If average of both number is 78 then find the larger number? Quantity II - 96",
"options": {
"A": "If Quantity I > Quantity II",
"B": "If Quantity I < Quantity II",
"C": "If Quantity I >= Quantity II",
"D": "If Quantity I <= Quantity II",
"E": "If Quantity I = Quantity II or No relation can be established"
}
},
{
"question_number": "Q74",
"question_text": "Quantity I - A alone can do a work in 20 days while B can do two third of same work in 20 days. Find in how many days A and B together can do the same work? Quantity II - 15",
"options": {
"A": "If Quantity I > Quantity II",
"B": "If Quantity I < Quantity II",
"C": "If Quantity I >= Quantity II",
"D": "If Quantity I <= Quantity II",
"E": "If Quantity I = Quantity II or No relation can be established"
}
},
{
"question_number": "Q75",
"question_text": "Quantity I - Mixture contain 35 l of alcohol and water in the ratio of 3:4, respectively. If x liter of alcohol are added in the mixture, then the ratio of alcohol to water becomes 7: 5. Find the value of x? Quantity II - 13",
"options": {
"A": "If Quantity I > Quantity II",
"B": "If Quantity I < Quantity II",
"C": "If Quantity I >= Quantity II",
"D": "If Quantity I <= Quantity II",
"E": "If Quantity I = Quantity II or No relation can be established"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 1: Q1 - Q5",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Seven persons live in an eight-storey building, where the ground floor is numbered as 1 and the topmost floor is numbered as 8. One of the floors of building is vacant. A lives two floors below B who lives on an odd numbered floor. C lives on an even numbered floor. Three floors between D and B. As many floors below D as same as above E. One of the even numbered floors is vacant. Only two persons live between E and F who lives below the vacant floor. More than three persons live between C and G.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q1",
"question_text": "Who among the following live immediately above B?",
"options": {
"A": "D",
"B": "C",
"C": "F",
"D": "G",
"E": "None of these"
}
},
{
"question_number": "Q2",
"question_text": "The number of persons live above A is one less than the number of persons live above ___.",
"options": {
"A": "B",
"B": "F",
"C": "D",
"D": "G",
"E": "None of these"
}
},
{
"question_number": "Q3",
"question_text": "How many persons live between C and F?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "None of these"
}
},
{
"question_number": "Q4",
"question_text": "If all persons arranged alphabetically top to bottom, then how many persons live on the same floor? (vacant floor is same as it is)",
"options": {
"A": "One",
"B": "Three",
"C": "Two",
"D": "None",
"E": "None of these"
}
},
{
"question_number": "Q5",
"question_text": "Which of the following statement is not true?",
"options": {
"A": "Two persons live between C and A",
"B": "E lives on an even numbered floor",
"C": "G lives immediate above F",
"D": "Vacant floor is immediately above D",
"E": "None of these"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 2: Q6 - Q10",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Nine persons live in a three story-building, where the ground floor is numbered as 1 and the topmost floor is numbered as 3. Each floor has three flats- Flat 1, Flat 2 and Flat 3. Flat 1 of the second floor is immediately above the flat 1 of first floor and immediately below the flat 1 of floor 3, similarly flat 2 and flat 3 are arranged. Flat 2 is in the west of flat 3 and east of flat 1. The persons who live in odd numbered flat of the odd number floor like colour. B lives two floors above A who likes Red. B and A live in the same flat. C lives on an even numbered flat of an even number floor. The one who lives in northeast of C likes Green. The one who likes Yellow and the one who likes Green live on the same floor. G lives in the west of I who likes a colour. E lives in the northwest of the one who likes Blue. H lives above D but in different flat. H and E does not live in same floor. F likes a colour.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q6",
"question_text": "Who among the following lives on the same floor as F?",
"options": {
"A": "H",
"B": "C",
"C": "B",
"D": "A",
"E": "Both B and H"
}
},
{
"question_number": "Q7",
"question_text": "Who among the following likes Blue?",
"options": {
"A": "E",
"B": "H",
"C": "D",
"D": "I",
"E": "None of these"
}
},
{
"question_number": "Q8",
"question_text": "Who among the following lives in the same flat as G?",
"options": {
"A": "B",
"B": "H",
"C": "A",
"D": "D",
"E": "None of these"
}
},
{
"question_number": "Q9",
"question_text": "Who among the following lives in the east of A?",
"options": {
"A": "F",
"B": "D",
"C": "G",
"D": "I",
"E": "Both G and I"
}
},
{
"question_number": "Q10",
"question_text": "Four of the following five are alike in a certain way based on the given arrangement and thus form a group. Which of the following does not belong to that group?",
"options": {
"A": "B",
"B": "F",
"C": "A",
"D": "G",
"E": "I"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 3: Q11 - Q14",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Seven people - P, Q, R, S, T, U, and V - are visiting seven different cities during the course of a week. Each person visits a city on a specific day of the week (Monday to Sunday). The cities are Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, and Ahmedabad. P visit to Kolkata on Wednesday. One person visits between P and S. T visits Bengaluru on Tuesday. S visits before U, who visits Hyderabad. The number of persons visit before S is same as the number of persons visit after Mumbai. Q visits Chennai immediately before R. V visits on Thursday. Person who visits Delhi visits before the person who visits Ahmedabad.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q11",
"question_text": "Who among the following visits immediately before the one who visits Mumbai?",
"options": {
"A": "V",
"B": "U",
"C": "S",
"D": "Q",
"E": "None of these"
}
},
{
"question_number": "Q12",
"question_text": "On which day did S visit a city, and which city was it?",
"options": {
"A": "Thursday - Ahmedabad",
"B": "Monday- Delhi",
"C": "Sunday- Mumbai",
"D": "Saturday - Delhi",
"E": "Can't be determined"
}
},
{
"question_number": "Q13",
"question_text": "Which among the following combination is correct?",
"options": {
"A": "Q- Saturday",
"B": "S- Ahmedabad",
"C": "V- Delhi",
"D": "R -Friday",
"E": "None of these"
}
},
{
"question_number": "Q14",
"question_text": "Who among the following visit on two days before Q?",
"options": {
"A": "The one who visits Kolkata",
"B": "U",
"C": "V",
"D": "The one who visits Ahmedabad",
"E": "Both (c) and (d)"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 4: Q15 - Q20",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Eight persons Raman, Akash, Ishita, Babita, Chiku, Dipak, Farah and Harsh were born in eight different months of the same year: January, March, April, May, June, July, August and November. All the information is not necessarily in the same order. No two persons were born in the same month. Raman was born in a month having an even number of days. Akash was born immediately after Farah. There are three persons born between Ishita and Babita. Babita was born two months after Harsh who was born immediately before Raman. Farah was not born in the month having an even number of days. More than two persons were born between Chiku and Raman.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q15",
"question_text": "In which of the following months was Harsh born?",
"options": {
"A": "June",
"B": "April",
"C": "None of these",
"D": "May",
"E": "March"
}
},
{
"question_number": "Q16",
"question_text": "Who among the following persons was born four persons after the month in which Dipak was born?",
"options": {
"A": "Babita",
"B": "Farah",
"C": "Chiku",
"D": "Akash",
"E": "None of these"
}
},
{
"question_number": "Q17",
"question_text": "How many persons were born between Ishita and Akash?",
"options": {
"A": "Two",
"B": "Three",
"C": "None",
"D": "Four",
"E": "Five"
}
},
{
"question_number": "Q18",
"question_text": "The number of persons who were born before Raman is the same as the number of persons who were born after ___.",
"options": {
"A": "Dipak",
"B": "Ishita",
"C": "Harsh",
"D": "Chiku",
"E": "None of these"
}
},
{
"question_number": "Q19",
"question_text": "If all the persons were born alphabetically from younger to oldest, then the position of how many persons remains unchanged?",
"options": {
"A": "None",
"B": "One",
"C": "Three",
"D": "More than three",
"E": "Two"
}
},
{
"question_number": "Q20",
"question_text": "Which of the following combinations is correct?",
"options": {
"A": "Raman - July",
"B": "Akash - August",
"C": "Ishita - January",
"D": "Babita - June",
"E": "None of these"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 5: Q21 - Q25",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Eight persons were born in different years 1959, 1975, 1964, 1988, 1969, 1999, 2006, and 2009. Age of the persons count according to the base year 2024. Age of B is square of a number. Only one person was born between B and D. Age of H is 4 times the age of F. Age difference between G and H is 5 years. The age difference between G and D is the same as the age difference between E and F. A is older than C but not born in 1988.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q21",
"question_text": "What is the age difference between C and H?",
"options": {
"A": "17 years",
"B": "42 years",
"C": "40 years",
"D": "28 years",
"E": "None of these"
}
},
{
"question_number": "Q22",
"question_text": "How many persons are older than F?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "More than four"
}
},
{
"question_number": "Q23",
"question_text": "Which of the following statement is not true?",
"options": {
"A": "Four persons are older than A",
"B": "H was born in an even numbered year",
"C": "E is 10 years older than F",
"D": "Age difference between F and C is 3 years",
"E": "All are true"
}
},
{
"question_number": "Q24",
"question_text": "If all the persons are arranged in alphabetical order from older to younger, then how many persons were born in the same year?",
"options": {
"A": "Four",
"B": "Three",
"C": "Two",
"D": "One",
"E": "None"
}
},
{
"question_number": "Q25",
"question_text": "Who among the following persons was born immediately before F?",
"options": {
"A": "E",
"B": "C",
"C": "B",
"D": "A",
"E": "None"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 6: Q26 - Q30",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the questions given below: Eight people - P, Q, R, S, T, U, V, and W - were born in four different months July, August, September, and October - on two different dates, i.e., 12th or 23rd, in the same year. But not necessarily in the same order. One person was born on each date. V was born on an odd number date in the month which has an odd number of days. Only three persons were born between Q and V. W was born immediately after Q. P was born immediately before R in same month. The number of people born before R is the same as the number of people born after S. U was born before T. U was not born in August.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q26",
"question_text": "Who among the following was born on 12th August?",
"options": {
"A": "P",
"B": "R",
"C": "S",
"D": "T",
"E": "Q"
}
},
{
"question_number": "Q27",
"question_text": "In which of the following months Q was born?",
"options": {
"A": "October",
"B": "August",
"C": "September",
"D": "July",
"E": "Either September or October"
}
},
{
"question_number": "Q28",
"question_text": "How many persons were born between S and U?",
"options": {
"A": "One",
"B": "Three",
"C": "Two",
"D": "None",
"E": "More than three"
}
},
{
"question_number": "Q29",
"question_text": "Which among the following combinations is correct?",
"options": {
"A": "23 July-V",
"B": "12 September-Q",
"C": "23 October-W",
"D": "23 August-P",
"E": "None of these"
}
},
{
"question_number": "Q30",
"question_text": "Four of the following five are alike in a certain way and thus form a group. Find the one which doesn't belong to the group?",
"options": {
"A": "P",
"B": "S",
"C": "U",
"D": "R",
"E": "W"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 7: Q31 - Q36",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the questions given below: Eight persons A, B, C, D, E, F, G, and H are working in a bank, but not necessarily in the same order. Their designations are Chief Manager (CM), Senior Manager (SM), Manager (M), Assistant Manager (AM), Officer (O), Senior Clerk (SC), Junior Clerk (JC) and Clerk. The designations follow a hierarchical sequence with CM being the senior most and Clerk being the junior most. C is designated junior to H. E holds a position that is senior to at least six persons. D holds the designation two designations junior to E and immediately senior to F. The number of persons senior to E is one less than the number of persons junior to C. More than three persons are designated between C and A. B is designated junior to C. G is designated senior to H who is not working as a Clerk.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q31",
"question_text": "Which of the following designation is of H in the bank?",
"options": {
"A": "Chief Manager",
"B": "Senior Clerk",
"C": "Junior Clerk",
"D": "Officer",
"E": "None of these"
}
},
{
"question_number": "Q32",
"question_text": "Who among the following persons is designated four designations junior to D?",
"options": {
"A": "B",
"B": "C",
"C": "A",
"D": "G",
"E": "F"
}
},
{
"question_number": "Q33",
"question_text": "As many persons are senior to F as junior to ___.",
"options": {
"A": "A",
"B": "D",
"C": "C",
"D": "H",
"E": "G"
}
},
{
"question_number": "Q34",
"question_text": "If we interchange the designations of A and B, then who among the following persons is designated two persons senior than A?",
"options": {
"A": "F",
"B": "H",
"C": "C",
"D": "G",
"E": "None of these"
}
},
{
"question_number": "Q35",
"question_text": "Four of the following five pairs are alike in a certain way and hence form a group. Which among the following pairs does not belong to that group?",
"options": {
"A": "A and F",
"B": "C and E",
"C": "B and H",
"D": "D and B",
"E": "G and H"
}
},
{
"question_number": "Q36",
"question_text": "Who among the following persons is designated as Senior Manager (SM)?",
"options": {
"A": "A",
"B": "C",
"C": "E",
"D": "G",
"E": "None of these"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 8: Q37 - Q42",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Eight boxes - L, M, N, O, P, Q, R and S are placed one above the other in a single stack but not necessarily in the same order. Only three boxes are placed between box P and box L which is neither placed at the top nor at the bottom of the stack. Box R is placed two boxes below box P. Box N is placed immediately above box R. The number of boxes placed above box N is one less than the number of boxes placed below box O. Only one box is placed between box M and box O. Box Q is placed below box M but above box S which is not placed at the bottom of the stack.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q37",
"question_text": "If box O is related to box Q in the similar way box M is related to box P then which among the following box is related to box N?",
"options": {
"A": "Box M",
"B": "Box P",
"C": "Box Q",
"D": "Box S",
"E": "None of these"
}
},
{
"question_number": "Q38",
"question_text": "What is the position of box P with respect to box M?",
"options": {
"A": "Three boxes below",
"B": "Three boxes above",
"C": "Immediately above",
"D": "Four boxes below",
"E": "Immediately below"
}
},
{
"question_number": "Q39",
"question_text": "If all the boxes are arranged in alphabetical order from top to bottom, then how many boxes remain unchanged in their position?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "More than three",
"E": "None"
}
},
{
"question_number": "Q40",
"question_text": "Which of the following statement(s) is/are true? I. Box L is placed adjacent to box O II. At least two boxes are placed below box Q III. No box is placed above box O",
"options": {
"A": "Only I",
"B": "Both I and III",
"C": "Both II and III",
"D": "Only II",
"E": "All I, II and III"
}
},
{
"question_number": "Q41",
"question_text": "Which box is placed immediately above box S?",
"options": {
"A": "Box M",
"B": "Box Q",
"C": "Box P",
"D": "Box R",
"E": "None of these"
}
},
{
"question_number": "Q42",
"question_text": "How many boxes are placed between box L and box N?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "None of these"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 9: Q43 - Q47",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Seven persons A, B, C, D, E, F, and G are sitting in a row facing north. Each person likes a different food item: Dosa, Samosa, Dhokla, Idli, Vada, Paratha, Kachori. F sits at one of the ends. The one who likes Dhokla sits third from the right end. Only one person sits between E and the one who likes Dhokla. G likes Kachori. Two persons sit between G and F. D sits third to the right of E. E likes Vada. A likes Samosa and sits right of D. More than two persons sit between B and the one who likes Samosa. Three persons sit between D and the one who likes Dosa. The one who likes Paratha does not sit at the end of the row.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q43",
"question_text": "How many persons sit between D and the one who likes Idli?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "None"
}
},
{
"question_number": "Q44",
"question_text": "What is the position of C with respect to E?",
"options": {
"A": "Fourth to the left",
"B": "Fourth to the right",
"C": "Third to the left",
"D": "Third to the right",
"E": "Second to the right"
}
},
{
"question_number": "Q45",
"question_text": "Which among the following pair of persons sit immediately left and immediately right of B, respectively?",
"options": {
"A": "DE",
"B": "EG",
"C": "FE",
"D": "ED",
"E": "GD"
}
},
{
"question_number": "Q46",
"question_text": "Who among the following person likes Dosa?",
"options": {
"A": "E",
"B": "C",
"C": "B",
"D": "Either E or B",
"E": "None of these"
}
},
{
"question_number": "Q47",
"question_text": "Which among the following statement is/are correct?",
"options": {
"A": "B likes dosa",
"B": "G sits third to the left of the one who likes samosa",
"C": "B sits third to the left of D",
"D": "Four persons sit between E and C",
"E": "Both (a) and (b)"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 10: Q48 - Q53",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Ten persons sit in two parallel rows in such a way that five persons sit in each row. F, G, H, I, J - sit in row 1 and face north while U, V, W, X, Y - sit in row 2 and face south. Persons of both rows face each other but not necessarily in same order. G sit at one of the ends. Two persons sit between Y and the one who faces G. V sits second to the right of U. I sits just right of the one who faces U. J faces W. H and I are not immediate neighbors to each other.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q48",
"question_text": "What is the position of F from right end in his row?",
"options": {
"A": "1st",
"B": "2nd",
"C": "3rd",
"D": "4th",
"E": "5th"
}
},
{
"question_number": "Q49",
"question_text": "If the persons of row 2 are asked to sit in alphabetical order from left to right, then who will face I?",
"options": {
"A": "Y",
"B": "X",
"C": "W",
"D": "V",
"E": "U"
}
},
{
"question_number": "Q50",
"question_text": "Four of the following five are similar in a certain manner and related to a group, who among the following is not related to the group?",
"options": {
"A": "X",
"B": "J",
"C": "W",
"D": "V",
"E": "G"
}
},
{
"question_number": "Q51",
"question_text": "How many persons sit to the left of X?",
"options": {
"A": "None",
"B": "One",
"C": "Two",
"D": "Three",
"E": "Four"
}
},
{
"question_number": "Q52",
"question_text": "Which of the following is incorrect?",
"options": {
"A": "H is second from left end",
"B": "Y faces I",
"C": "W and X are immediate neighbors",
"D": "J sits second to the right of F",
"E": "V sits at the end"
}
},
{
"question_number": "Q53",
"question_text": "Who among the following sits at the immediate left of H?",
"options": {
"A": "F",
"B": "G",
"C": "I",
"D": "J",
"E": "None of these"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 11: Q54 - Q58",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Certain numbers of persons sit in a row face north. Q sits exactly between P and R. Three persons sit between P and R. S is an immediate neighbour of R. T sits 4th to the right of S and sits at one of the extreme ends. The numbers of persons sit to the right of U is 2.5 to the persons sit between R and T. The numbers of persons sit to the right of P is one more than the numbers of persons sit to the left of V. U sits at one of the ends.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q54",
"question_text": "Who sits exactly in the middle between U and V?",
"options": {
"A": "Unknown person",
"B": "S",
"C": "T",
"D": "Q",
"E": "P"
}
},
{
"question_number": "Q55",
"question_text": "How many people sit between T and S?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "None of these"
}
},
{
"question_number": "Q56",
"question_text": "If W is sitting immediately to the left of Q, how many people sit between V and W?",
"options": {
"A": "7",
"B": "5",
"C": "9",
"D": "10",
"E": "None of these"
}
},
{
"question_number": "Q57",
"question_text": "Which of the following statements is true regarding U?",
"options": {
"A": "U sits adjacent to P.",
"B": "U is the immediate neighbour of T.",
"C": "U sits to the immediate left of Q.",
"D": "The number of persons to the right of U is five.",
"E": "None of these"
}
},
{
"question_number": "Q58",
"question_text": "How many persons sit in the row?",
"options": {
"A": "15",
"B": "11",
"C": "18",
"D": "12",
"E": "16"
}
}
]
},
{
"set_id": "Reasoning Puzzle Set 12: Q59 - Q63",
"category": "Reasoning",
"directions": "Study the following information carefully and answer the questions given below: Six persons A, B, C, D, E, and F, sit around a circular table facing inward but not necessarily in the same order. Each one of them likes different vegetables: Potato, Onion, Tomato, Carrot, Cabbage and Spinach. Each of them sits at equal distance to each other. The person who likes Onion sits 2nd to the right B who is not an immediate neighbor of the one who likes Carrot. A sits second to the left of the person who likes Carrot. More than one person sits between the one who likes Onion and E from both the sides. B does not like Carrot. The one who likes Onion sits opposite to the one who likes Cabbage. D neither likes Spinach nor Carrot. C sits opposite to the one who likes Tomato. C neither like Onion nor Carrot. The one who likes Cabbage is not an immediate neighbour of the one who likes Spinach. C doesn't like Potato.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q59",
"question_text": "Who among the following persons likes Potato?",
"options": {
"A": "E",
"B": "None of these",
"C": "B",
"D": "D",
"E": "A"
}
},
{
"question_number": "Q60",
"question_text": "What is the position of A with respect to the one who likes Tomato?",
"options": {
"A": "Immediate left",
"B": "Immediate right",
"C": "Fourth to the right",
"D": "Fourth to the left",
"E": "Second to the left"
}
},
{
"question_number": "Q61",
"question_text": "Which among the following combination is correct?",
"options": {
"A": "C- Potato",
"B": "E- Carrot",
"C": "A- Tomato",
"D": "D- Onion",
"E": "None is correct"
}
},
{
"question_number": "Q62",
"question_text": "Who among the following persons sits fourth to the left of A?",
"options": {
"A": "The one who likes Onion",
"B": "C",
"C": "The one who likes Cabbage",
"D": "B",
"E": "More than one option is correct"
}
},
{
"question_number": "Q63",
"question_text": "Which among the following statements is/are false? I. The one who likes Potato sits second to the left of Spinach. II. B sits opposite to C. III. The one who likes Cabbage is an immediate neighbour of C.",
"options": {
"A": "Only III",
"B": "Both II and III",
"C": "Both I and III",
"D": "Only II",
"E": "All I, II and III"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q1 - Q10 (Inequalities)",
"category": "Reasoning",
"directions": "Directions: In following questions, the relationship between different elements is shown in the statements. The statements are followed by two conclusions. Give answer:",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q1",
"question_text": "Statements: A > B <= C < D = E > F >= X; Conclusions: I. C < F, II. X <= D",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If neither conclusion I nor II is true",
"E": "If both conclusions I and II are true"
}
},
{
"question_number": "Q2",
"question_text": "Statements: P >= Q < R = S > T >= U > V; Conclusions: I. R > T, II. V >= Q",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If neither conclusion I nor II is true",
"E": "If both conclusions I and II are true"
}
},
{
"question_number": "Q3",
"question_text": "Statements: P > F >= W >= V = U < L <= J; Conclusions: I. F >= U, II. J > V",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If neither conclusion I nor II is true",
"E": "If both conclusions I and II are true"
}
},
{
"question_number": "Q4",
"question_text": "Statements: R <= U < N = F > K < P = B; Conclusions: I. N > B, II. R < F",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If both conclusions I and II are true",
"E": "If neither conclusion I nor II is true"
}
},
{
"question_number": "Q5",
"question_text": "Statements: O > N <= M <= W = V <= K >= L > F = P; Conclusions: I. N < K, II. K >= N",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If both conclusions I and II are true",
"E": "If neither conclusion I nor II is true"
}
},
{
"question_number": "Q6",
"question_text": "Statements: L = M <= N <= O = P > Q <= R; Conclusions: I. P > L, II. N < R",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If both conclusions I and II are true",
"E": "If neither conclusion I nor II is true"
}
},
{
"question_number": "Q7",
"question_text": "Statements: B >= F > K = O > X < Y > Z = U; Conclusions: I. B > X, II. O <= U",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If both conclusions I and II are true",
"E": "If neither conclusion I nor II is true"
}
},
{
"question_number": "Q8",
"question_text": "Statements: A < Q = B >= C = T, U <= T > F = W; Conclusions: I. Q > W, II. U <= C",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If both conclusions I and II are true",
"E": "If neither conclusion I nor II is true"
}
},
{
"question_number": "Q9",
"question_text": "Statements: A < B = C >= D >= E >= F >= G > H; Conclusions: I. B > G, II. H < A",
"options": {
"A": "If only conclusion I is true",
"B": "If only conclusion II is true",
"C": "If either conclusion I or II is true",
"D": "If both conclusions I and II are true",
"E": "If neither conclusion I nor II is true"
}
},
{
"question_number": "Q10",
"question_text": "Statements: H < K = L > M, N <= O > P = L; Conclusions: I. H < O, II. M > N",
"options": {
"A": "If only conclusion I is true.",
"B": "If only conclusion II is true.",
"C": "If either conclusion I or II is true.",
"D": "If both conclusions I and II are true.",
"E": "If neither conclusion I nor II is true."
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q11 - Q18 (Syllogisms)",
"category": "Reasoning",
"directions": "Directions: The following question contains some statements followed by two conclusions numbered I and II. Assume that all the statements are true, even if they seem to differ from commonly known facts. Analyze both conclusions and decide which one logically follows from the given statements.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q11",
"question_text": "Statements: Only a few Cakes is Candle. All Candle is Pizza. Some Pizza is Balloon. Conclusions: I. No Pizza is a Balloon. II. All candles are cakes.",
"options": {
"A": "If only conclusion I follows",
"B": "If only conclusion II follows",
"C": "If either conclusion I or II follows",
"D": "If neither conclusion I nor II follows",
"E": "If both conclusions I and II follows"
}
},
{
"question_number": "Q12",
"question_text": "Statements: All Clerk are Smart. No Smart is big. All big are fiber. Conclusions: I. Some smart are fiber. II. Some fiber being clerk is a possibility.",
"options": {
"A": "If only conclusion I follows",
"B": "If only conclusion II follows",
"C": "If either conclusion I or II follows",
"D": "If neither conclusion I nor II follows",
"E": "If both conclusions I and II follows"
}
},
{
"question_number": "Q13",
"question_text": "Statements: All computer is laptop. All laptop is desk. No desk is mouse. Conclusions: I. Some Desk are Computers. II. No Laptop is a Mouse.",
"options": {
"A": "Only II follow",
"B": "Neither I nor II follow",
"C": "Either I or II follow",
"D": "Only I follow",
"E": "Both I and II follow"
}
},
{
"question_number": "Q14",
"question_text": "Statements: Only a few Tiles is Marble. No Marble is Paints. Some Paints is colour. Conclusions: I. No Colour is tiles. II. Some marble is not paints.",
"options": {
"A": "If only conclusion I follows",
"B": "If only conclusion II follows",
"C": "If either conclusion I or II follows",
"D": "If neither conclusion I nor II follows",
"E": "If both conclusions I and II follows"
}
},
{
"question_number": "Q15",
"question_text": "Statements: Only a few earth are sun. Some sun are plant. Some plants are moon. Conclusions: I. Some earth is moon. II. No earth is moon.",
"options": {
"A": "If only conclusion I follows",
"B": "If only conclusion II follows",
"C": "If either conclusion I or II follows",
"D": "If neither conclusion I nor II follows",
"E": "If both conclusions I and II follows"
}
},
{
"question_number": "Q16",
"question_text": "Statements: Only a few clerk is manager. Some managers are po. No po is assistant. Conclusions: I. Some managers are assistant. II. Some managers are clerk.",
"options": {
"A": "Only II follow",
"B": "Neither I nor II follow",
"C": "Either I or II follow",
"D": "Only I follow",
"E": "Both I and II follow"
}
},
{
"question_number": "Q17",
"question_text": "Statements: Only fashion is men. Some fashion blue. All blue are women. Conclusions: I. All fashion can be women. II. All men can never be women.",
"options": {
"A": "Only II follow",
"B": "Neither I nor II follow",
"C": "Either I or II follow",
"D": "Only I follow",
"E": "Both I and II follow"
}
},
{
"question_number": "Q18",
"question_text": "Statements: Only a few papers are page. All pages are book. All books are notebook. Conclusions: I. Some papers are notebook. II. No pages are notebook.",
"options": {
"A": "Only II follow",
"B": "Neither I nor II follow",
"C": "Either I or II follow",
"D": "Only I follow",
"E": "Both I and II follow"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q19 - Q21 (Blood Relations 1)",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the questions: In a family of eight people- A, B, C, D, E, J, M and L there are three married couples. B is the father of E who is the sister of J. D is brother-in-law of B and has no siblings. M is sister-in-law of E. C is sister-in-law of A who is mother of E and J. M has one daughter.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q19",
"question_text": "Which among the following pairs is not married couples?",
"options": {
"A": "A,B",
"B": "J,M",
"C": "D,C",
"D": "C,A",
"E": "More than one option"
}
},
{
"question_number": "Q20",
"question_text": "How many female members are there in the family?",
"options": {
"A": "Can't be determined",
"B": "Five",
"C": "Four",
"D": "Three",
"E": "Two"
}
},
{
"question_number": "Q21",
"question_text": "How L is related to B?",
"options": {
"A": "Granddaughter",
"B": "Grandson",
"C": "Son",
"D": "Sister",
"E": "Can't be determined"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q22 - Q24 (Blood Relations 2)",
"category": "Reasoning",
"directions": "Directions: Study the following arrangement carefully and answer the questions given below: K is the father-in-law of P who is the father of M. Q is the only son of F who is the grandmother of J. S is the mother of M. Q is the brother-in-law of P and vice versa. P does not have siblings. R is the mother of D who is the niece of M's mother. N is the sister of M. F has only two children.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q22",
"question_text": "How M is related to K?",
"options": {
"A": "Granddaughter",
"B": "Grandson",
"C": "Son",
"D": "Sister",
"E": "Can't be determined"
}
},
{
"question_number": "Q23",
"question_text": "How many married couples are in the family?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "None of these"
}
},
{
"question_number": "Q24",
"question_text": "How P is related to S?",
"options": {
"A": "Husband",
"B": "Grandson",
"C": "Son",
"D": "Sister",
"E": "Can't be determined"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q25 - Q27 (Blood Relations 3)",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the questions given below: A is the father-in-law of L. C is the brother-in-law of L who is married. M is the grandson of B who has only two children of different genders. A and B are married couples. N is not the child of B. D is the mother of N and both are of same genders.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q25",
"question_text": "What is the ratio of male to female?",
"options": {
"A": "4:3",
"B": "3:4",
"C": "2:5",
"D": "5:2",
"E": "None of these"
}
},
{
"question_number": "Q26",
"question_text": "If C is married to Y, then how Y is related to D?",
"options": {
"A": "Sister",
"B": "sister-in-law",
"C": "Aunt",
"D": "Mother-in-law",
"E": "Niece"
}
},
{
"question_number": "Q.27",
"question_text": "Four of the following five are alike in a certain way and thus form a group. Find the one who does not belong to the group.",
"options": {
"A": "A",
"B": "C",
"C": "D",
"D": "M",
"E": "L"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q28 - Q30 (Blood Relations 4)",
"category": "Reasoning",
"directions": "Directions: Study the following information and answer the given questions. Eight members of a family are living in a house, in which two are married couples. Q is the father of N. R is married to Q. N and V are siblings. V is married to T. Q has no son. P is the father of R. U is the only son of T. S is the brother-in-law of Q.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q28",
"question_text": "Who among the following is the son-in-law of P?",
"options": {
"A": "R",
"B": "M",
"C": "U",
"D": "Q",
"E": "None of these"
}
},
{
"question_number": "Q29",
"question_text": "How P is related to U?",
"options": {
"A": "Father",
"B": "Uncle",
"C": "Grandmother",
"D": "Grandfather",
"E": "Great grandfather"
}
},
{
"question_number": "Q30",
"question_text": "If U is married to S, then how S is related to V?",
"options": {
"A": "Sister",
"B": "Daughter-in-law",
"C": "Aunt",
"D": "Mother-in-law",
"E": "Niece"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q31 - Q35 (Coding-Decoding 1)",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the questions given below. In a certain coded language: 'bank exams require patience' is coded as 'ka mo ti su', 'patience makes students perfect' is coded as 'su re pa lo', 'students require hard work' is coded as 'pa ti ve na', 'hard work needs patience' is coded as 've na di su'",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q31",
"question_text": "What is the code for 'require'?",
"options": {
"A": "ka",
"B": "ti",
"C": "mo",
"D": "su",
"E": "Cannot be determined"
}
},
{
"question_number": "Q32",
"question_text": "What is the code for 'students'?",
"options": {
"A": "pa",
"B": "re",
"C": "ti",
"D": "na",
"E": "lo"
}
},
{
"question_number": "Q33",
"question_text": "Which of the following words is coded as 've'?",
"options": {
"A": "Patience",
"B": "Students",
"C": "Hard",
"D": "Require",
"E": "Perfect"
}
},
{
"question_number": "Q34",
"question_text": "What could be the code for 'bank hard exams'?",
"options": {
"A": "ka ve mo",
"B": "ka ti su",
"C": "mo pa lo",
"D": "re ve na",
"E": "Cannot be determined"
}
},
{
"question_number": "Q35",
"question_text": "What is the code for 'perfect'?",
"options": {
"A": "re",
"B": "pa",
"C": "lo",
"D": "su",
"E": "Cannot be determined"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q36 - Q40 (Coding-Decoding 2)",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the questions given below. In a certain coded language: 'nice people always learn' is coded as 'zo ki ma ru', 'people should work hard' is coded as 'ki ta po se', 'always work with honesty' is coded as 'ma po di fu', 'nice habits bring success' is coded as 'zo la ne gi'",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q36",
"question_text": "What is the code for 'people'?",
"options": {
"A": "zo",
"B": "ki",
"C": "ma",
"D": "ru",
"E": "ta"
}
},
{
"question_number": "Q37",
"question_text": "What is the code for 'always'?",
"options": {
"A": "ki",
"B": "po",
"C": "ma",
"D": "di",
"E": "fu"
}
},
{
"question_number": "Q38",
"question_text": "Which of the following words is coded as 'zo'?",
"options": {
"A": "People",
"B": "Always",
"C": "Nice",
"D": "Work",
"E": "Hard"
}
},
{
"question_number": "Q39",
"question_text": "What could be the code for 'nice work'?",
"options": {
"A": "zo po",
"B": "ki ma",
"C": "ta se",
"D": "la ne",
"E": "Cannot be determined"
}
},
{
"question_number": "Q40",
"question_text": "What is the code for 'honesty'?",
"options": {
"A": "ma",
"B": "po",
"C": "di",
"D": "fu",
"E": "Cannot be determined"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q41 - Q45 (Number Series)",
"category": "Reasoning",
"directions": "Directions: Study the following series carefully and answer the question given below: 5 4 3 6 2 9 8 6 7 8 4 3 0 1 2 8 2 7 5 6 2 9 4 7 8 3 1 4 8 6",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q41",
"question_text": "How many digits in the series are greater than both of their immediate neighbors?",
"options": {
"A": "Two",
"B": "five",
"C": "Four",
"D": "Six",
"E": "Zero"
}
},
{
"question_number": "Q42",
"question_text": "If all the even numbers are removed from the series, which element is sixth from the right end in the remaining series?",
"options": {
"A": "7",
"B": "5",
"C": "3",
"D": "1",
"E": "9"
}
},
{
"question_number": "Q43",
"question_text": "Which number is fourth to the right of the seventh number from the left end?",
"options": {
"A": "6",
"B": "7",
"C": "8",
"D": "4",
"E": "5"
}
},
{
"question_number": "Q44",
"question_text": "How many odd numbers are there in the series that are immediately followed by even numbers?",
"options": {
"A": "Two",
"B": "five",
"C": "Four",
"D": "one",
"E": "More than four"
}
},
{
"question_number": "Q45",
"question_text": "How many even numbers are there in the series that are immediately preceded and immediately followed by odd numbers?",
"options": {
"A": "Two",
"B": "five",
"C": "Four",
"D": "one",
"E": "Zero"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q46 - Q50 (Three-Digit Numbers)",
"category": "Reasoning",
"directions": "Directions: Study the following questions based on the five three-digit numbers are given below: 456 634 587 239 778",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q46",
"question_text": "If the first and third digit of each number is interchanged within the number, then which of the following will be the second highest number?",
"options": {
"A": "456",
"B": "634",
"C": "587",
"D": "239",
"E": "778"
}
},
{
"question_number": "Q47",
"question_text": "If the digits are arranged in ascending order within the number, then what will be the sum of the first and the second digit of the third highest numbers?",
"options": {
"A": "9",
"B": "8",
"C": "6",
"D": "5",
"E": "7"
}
},
{
"question_number": "Q48",
"question_text": "What will be the sum of the second digits of 'highest and the second smallest' number?",
"options": {
"A": "15",
"B": "10",
"C": "12",
"D": "11",
"E": "16"
}
},
{
"question_number": "Q49",
"question_text": "If 2 is subtracted to each number then how many numbers will be completely divisible by 2?",
"options": {
"A": "None",
"B": "One",
"C": "Two",
"D": "Three",
"E": "More than three"
}
},
{
"question_number": "Q50",
"question_text": "If we dropped every 2nd digit from the series to each number then how many numbers will be completely divisible by 3?",
"options": {
"A": "Two",
"B": "Five",
"C": "Three",
"D": "Four",
"E": "Zero"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q51 - Q53 (Ordering & Ranking 1)",
"category": "Reasoning",
"directions": "Directions: Study the following information carefully and answer the question given below: Six persons J, K, M, S, T and W are having different weight but not necessarily in the same order. M is heavier than S. T is only heavier than one person. K is heavier than W. S is heavier than T. J is heavier than K. The number of people heavier than K is the same as lighter T. K is heavier than M.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q51",
"question_text": "How many persons are lighter than M?",
"options": {
"A": "One",
"B": "Two",
"C": "Three",
"D": "Four",
"E": "None"
}
},
{
"question_number": "Q52",
"question_text": "Who among the following is the lightest person?",
"options": {
"A": "S",
"B": "T",
"C": "J",
"D": "W",
"E": "K"
}
},
{
"question_number": "Q53",
"question_text": "How many persons are sitting between J and M?",
"options": {
"A": "None",
"B": "One",
"C": "Two",
"D": "three",
"E": "Four"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q54 - Q57 (Ordering & Ranking 2 & Number Arrangement)",
"category": "Reasoning",
"directions": "Directions: Read the given information carefully and answer the related question: Six persons A, B, C, D, E and F have different numbers of chocolate. E has more than C but less than D. B has fewer than C but more than F. A has more than D. D has more than B but fewer than only A.",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q54",
"question_text": "Who has more chocolates than F person?",
"options": {
"A": "B",
"B": "A",
"C": "C",
"D": "D",
"E": "None of these"
}
},
{
"question_number": "Q55",
"question_text": "How many persons are there in between B and D?",
"options": {
"A": "One",
"B": "Two",
"C": "Four",
"D": "Three",
"E": "None"
}
},
{
"question_number": "Q56",
"question_text": "How many persons are fewer than the one who has immediately fewer to D?",
"options": {
"A": "One",
"B": "Two",
"C": "Four",
"D": "Three",
"E": "None"
}
},
{
"question_number": "Q57",
"question_text": "In the given number '476958231', how many such numerals will remain at the same position when arranged in ascending order from left to right?",
"options": {
"A": "Three",
"B": "One",
"C": "More than Four",
"D": "Two",
"E": "Four"
}
}
]
},
{
"set_id": "Reasoning Miscellaneous: Q58 - Q62 (Alphanumeric Symbol Series)",
"category": "Reasoning",
"directions": "Directions: Study the following series carefully and answer the question given below: 4 1 & 5 6 * ^ 2 % 4 3 @ 8 3 9 # 5 7 9 $ 5 4 1 6 3 0 4",
"has_diagram": false,
"diagram_type": null,
"extracted_diagram_data": {
"headers": [],
"rows": []
},
"notes": [],
"questions": [
{
"question_number": "Q58",
"question_text": "Which element is ninth from the left end of the third element from the right end in the series?",
"options": {
"A": "*",
"B": "#",
"C": "%",
"D": "4",
"E": "@"
}
},
{
"question_number": "Q59",
"question_text": "How many symbols are there between the eighth element from the right and the eighth element from the left?",
"options": {
"A": "Two",
"B": "Four",
"C": "One",
"D": "Three",
"E": "None"
}
},
{
"question_number": "Q60",
"question_text": "If all even digits are removed, what will be the seventh element from the right end?",
"options": {
"A": "#",
"B": "3",
"C": "^",
"D": "7",
"E": "$"
}
},
{
"question_number": "Q61",
"question_text": "How many digits are immediately followed and immediately preceded by a symbol?",
"options": {
"A": "5",
"B": "4",
"C": "3",
"D": "2",
"E": "1"
}
},
{
"question_number": "Q62",
"question_text": "If all the symbols are replaced by some letters, then how many odd digits are immediately preceded by letters and immediately followed by a prime digit?",
"options": {
"A": "Two",
"B": "Four",
"C": "Three",
"D": "One",
"E": "None"
}
}
]
}
]

function makeAnswerDetails(
	answers: string,
	solution: string | null | readonly (string | null)[] = null,
): AnswerDetailsDto[] {
	return [...answers.replace(/\s/g, '').toUpperCase()].map((answer, index) => ({
		answer: answer as AnswerOption,
		solution: Array.isArray(solution) ? solution[index] ?? null : solution,
	}));
}

const answerDetailsBySetId: Record<string, AnswerDetailsDto[]> = {
	'Reasoning Miscellaneous: Q1 - Q10 (Inequalities)': makeAnswerDetails('d a e b b e a d e a'),
	'Reasoning Miscellaneous: Q11 - Q18 (Syllogisms)': [
		makeAnswerDetails('e', 'Venn diagram: Only a few Cakes is Candle; All Candle is Pizza; Some Pizza is Balloon')[0],
		makeAnswerDetails('b', 'Venn diagram: All Clerk are Smart; No Smart is Big; All Big are Fiber')[0],
		makeAnswerDetails('a', 'Venn diagram: All Computer is Laptop; All Laptop is Desk; No Desk is Mouse')[0],
		makeAnswerDetails('b', 'Venn diagram: Only a few Tiles is Marble; No Marble is Paints; Some Paints is Colour')[0],
		makeAnswerDetails('a', 'Venn diagram: Only a few Earth are Sun; Some Sun are Plant; Some Plant are Moon')[0],
		makeAnswerDetails('a', 'Venn diagram: Only a few Clerk is Manager; Some Managers are PO; No PO is Assistant')[0],
		makeAnswerDetails('a', 'Venn diagram: All Men are Fashion; Some Fashion is Blue; All Blue are Women')[0],
		makeAnswerDetails('d', 'Venn diagram: Only a few Paper are Page; All Page are Book; All Book are Notebook')[0],
	],
	'Reasoning Miscellaneous: Q19 - Q21 (Blood Relations 1)': makeAnswerDetails(
		'd b a',
		'Family tree: A is married to B; A and B are parents of E and J; J is married to M; J and M are parents of L. C is married to D.',
	),
	'Reasoning Miscellaneous: Q22 - Q24 (Blood Relations 2)': makeAnswerDetails(
		'e c a',
		'Family tree: F is married to K. Their children are Q and S. Q is married to R; S is married to P. R and Q are parents of D; S and P are parents of M and N.',
	),
	'Reasoning Miscellaneous: Q25 - Q27 (Blood Relations 3)': makeAnswerDetails(
		'a b c',
		'Family tree: A is married to B. Their children are C and D. D is married to L; D and L are parents of M and N.',
	),
	'Reasoning Miscellaneous: Q28 - Q30 (Blood Relations 4)': makeAnswerDetails(
		'd e b',
		'Family tree: P is parent of R. R is married to Q; Q and R are parents of N and V. V is married to T; V and T are parents of U.',
	),
	'Reasoning Miscellaneous: Q31 - Q35 (Coding-Decoding 1)': makeAnswerDetails(
		'b a c a e',
		'Word codes: Practice/Patience = su; Require = ti; Students = pa; Hard/Work = ve or na; Bank/Exams = ka or mo; Makes/Perfect = re or lo; Needs = di.',
	),
	'Reasoning Miscellaneous: Q36 - Q40 (Coding-Decoding 2)': makeAnswerDetails(
		'b c c a e',
		'Word codes: Nice = zo; People = ki; Always = ma; Work = po; Learn = ru; Should/Hard = ta or se; With/Honesty = di or fu; Habits/Bring/Success cannot be uniquely determined among la, ne, and gi.',
	),
	'Reasoning Miscellaneous: Q41 - Q45 (Number Series)': makeAnswerDetails('d a d e a'),
	'Reasoning Miscellaneous: Q46 - Q50 (Three-Digit Numbers)': makeAnswerDetails('e a c d a'),
	'Reasoning Miscellaneous: Q51 - Q53 (Ordering & Ranking 1)': makeAnswerDetails('c d b', 'J > K > M > S > T > W'),
	'Reasoning Miscellaneous: Q54 - Q57 (Ordering & Ranking 2 & Number Arrangement)': makeAnswerDetails(
		'a b d b',
		[
			'Chocolate ranking: A > D > E > C > B > F.',
			'Chocolate ranking: A > D > E > C > B > F.',
			'Chocolate ranking: A > D > E > C > B > F.',
			'Original digits: 476958231. Sorted digits: 123456789.',
		],
	),
	'Reasoning Miscellaneous: Q58 - Q62 (Alphanumeric Symbol Series)': makeAnswerDetails('b d d e d'),
};

export const questionBank: QuestionBankSetDto[] = questionBankData.map((set) => ({
	...set,
	questions: set.questions.map((question, index) => {
		const answerDetails = answerDetailsBySetId[set.set_id]?.[index];
		return answerDetails ? { ...question, answerDetails } : question;
	}),
}));
