To fix this, ensure your `firebaseConfig` object contains all required fields with valid values.  Double-check the values from your Firebase project settings. Also, review your Firebase database rules to ensure they correctly allow read and write access to your data. 

```javascript
// Correct Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};
```