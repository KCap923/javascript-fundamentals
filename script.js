console.log("Cool Chicks Rise UP!!!")

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// ************************************************************************************************************

// The assignments and due dates.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
}


// ************************************************************************************************************
// The learners submissions.

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },


// Second Learner ************************************************************************************************

  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


// ************************************************************************************************************


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

// try catch? 
try {
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
} catch (error) {
console.log(error.message)
}


// The arrival of submission
// Learner ID get result/push learner to result
// Compare assignment due at and compare dates to see
// If assignment is passed due date
// Calculate points deducted set info 
// in the result 
// Repeat per assignment
// Disregard assignment not due yet

// ** Use **
// for let
// if/else 
// try/catch
// array.find /.map/.filter/.reduce?
// object.keys /.values


//Breaking this down 

//Assignments and the due dates

function assignmentsDue(id, name, due_at, points_possible) {


}

//Learner 1
function leaner125(learner_id, assignment_id, submitted_at) {


}

//Learner 2 
function leaner132(learner_id, assignment_id, submitted_at) {


}

// Assignments **************************************

const assignment1 = {
  id: 1,
  name: "Declare a Variable",
  due_at: "2023-01-25",
  points_possible: 50
}

const assignment2 = {
  id: 2,
  name: "Write a Function",
  due_at: "2023-02-27",
  points_possible: 150
}

const assignment3 = {
  id: 3,
  name: "Code the World",
  due_at: "3156-11-15",
  points_possible: 500
}

// Learner 1 *****************************************
const learner1a = {
  learner_id: 125,
  assignment_id: 1, 
  submitted_at: "2023-01-25",
  score: 47
}

const learner1b = {
  learner_id: 125,
  assignment_id: 2,
  submitted_at: "2023-02-12",
  score: 150
}

const learner1c = {
  learner_id: 125,
  assignment_id: 3,
  submitted_at: "2023-01-25",
  score: 400
}

// Learner 2 ******************************************** 
const learner2a = {
  learner_id: 132,
  assignment_id: 1,
  submitted_at: "2023-01-24",
  score: 39
}

const learner2b = {
  learner_id: 132,
  assignment_id: 2,
  submitted_at: "2023-03-07",
  score: 140
}

// Learners Total
// A possibility
let id = assignment1[i].learner1a;
  learner_id = id;

  function leaner125(assignment1, id) {

    for (let i = 0; i < assignment1.learner1a.length; i++) {
      if (assignment1.learner1a[i].id === id) {
        return results[i];
      }
    }
  }

  // let id = assignment2[i].learner1a;
  // learner_id = id;

  // function leaner125(assignment2, id) {

  //   for (let i = 0; i < assignment2.learner1a.length; i++) {
  //     if (assignment1.learner1a[i].id === id) {
  //       return results[i];
  //     }
  //   }
  // }
