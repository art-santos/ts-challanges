type Session = { user: number; duration: number; equipment: Array<string> };

export default function mergeData(sessions: Array<Session>): Array<Session> {
  throw 'Not implemented!';
}



//Dataset
// [
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['dumbbell'] },
//     { user: 1, duration: 10, equipment: ['barbell'] },
//     { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//     { user: 7, duration: 200, equipment: ['bike'] },
//     { user: 2, duration: 200, equipment: ['treadmill'] },
//     { user: 2, duration: 200, equipment: ['bike'] },
//   ];
  

//Output
// mergeData(sessions);
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];