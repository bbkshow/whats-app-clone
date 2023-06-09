# Front-end mobile app `«WhatsApp Clone»`

Personal and Group chats.

![chats personal](https://i.ibb.co/VLv66Br/2023-06-22-17-12-09.png)

![chats group](https://i.ibb.co/L94QMVM/2023-06-22-17-13-02.png)



- To install the application, clone the repository to your local machine and run the yarn command
- SplashScreen appears when loading the application
- Application navigation is implemented using the React Navigation library. There are Stack and BottomTabs navigation
- Implemented the functionality of creating a chat with a contact from an existing list. If the chat has already been created before, the user will be directed to a page to continue the conversation. If the chat has not been created before, it is created and a blank chat page opens
- Implemented a simple logic for sending messages - when sending a message after 2 seconds, the user receives a response in the form of his message and a Heart icon
- Using the Async Storage library, the initial data of contacts and some chats are stored in local storage. Simulates receiving data from the server, which is stored in the state manager Redux Toolkit
- The layout is adaptive, made taking into account the features of iOS and Android applications
- App tested on iPhone 14 Pro Max iOS simulator, Pixel 6 Android emulator and real iPhone 13 Pro device
- The application is optimized by using the Flatlist component, which supports lazy loading
- The code is divided into small components, which also simplifies debugging and testing, optimizes the application and makes parts of the code reusable
- TypeScript is used for data typing
- For unit testing, the Jest library is used
