// // Firestore rules
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     // Read access for all
//     match /{document=**} {
//       allow read: if true;
//     }
    
//     // Write access only for authenticated users
//     match /menu/{menuItem} {
//       allow write: if request.auth != null;
//     }
    
//     match /settings/{setting} {
//       allow write: if request.auth != null;
//     }
    
//     match /social/{social} {
//       allow write: if request.auth != null;
//     }
//   }
// }