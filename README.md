# Expense Tracker App

The Expense Tracker App is a simple yet efficient solution for tracking your expenses on the go. Built with React Native and Firebase, this app allows you to easily add and delete expenses, providing you with a convenient way to manage your financial transactions.

## Features

- Add Expenses: Quickly add new expenses with details such as description, amount, and date.
- Delete Expenses: Easily delete expenses that are no longer needed.
- Firebase Backend: Utilizes Firebase as the backend to store and manage expense data securely.
- Cross-Platform: Runs seamlessly on both iOS and Android devices.

## Installation

To run the Expense Tracker App on your local machine, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/macbrina/expense-tracker.git
```

2. Navigate to the project directory:

```
cd expense-tracker
```

3. Install dependencies using npm or yarn:

```
npm install
```

or

```
yarn install
```

4. Configure Firebase:

   - Create a Firebase project at Firebase Console.
   - Create a Realtime Database with an "expenses" node
   - Add your Firebase configuration details to the project in (util/http.js) in the appropriate files.

5. Run the app:

```
expo start --android
```

or

```
expo start --ios
```

This will start the Expo development server. You can then run the app on your device or simulator using the Expo Go app.

## Usage

Once the app is running, follow these steps to start tracking your expenses:

    1. Launch the app on your device.
    2. Use the "Add Expense" icon feature to enter new expenses.
    3. click on an expense and use the delete icon to delete it.
    4. Monitor your expenses and manage your finances efficiently!

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the React Native, Expo, and Firebase communities for their invaluable resources and support.
