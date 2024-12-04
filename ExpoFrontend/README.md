# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## DOCUMENTATION FOR DEPENDENCIES

https://recoiljs.org/docs/introduction/installation

https://docs.expo.dev

https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

## react native components
https://reactnative.dev/docs/components-and-apis

## REF
https://blog.logrocket.com/full-stack-rust-a-complete-tutorial-with-examples/

## Working with WSL

### ADB
adb kill-server
adb -a nodaemon server start


` sudo apt install -y socat `

you can run the following under nohup to forward to bg
Forward adb port 5037 in wsl 2
```
nohup socat TCP-LISTEN:5037,reuseaddr,fork TCP:$(cat /etc/resolv.conf | tail -n1 | cut -d " " -f 2):5037
```
Forward emulator port 5556 in wsl 2
```
nohup socat TCP-LISTEN:5556,reuseaddr,fork TCP:$(cat /etc/resolv.conf | tail -n1 | cut -d " " -f 2):5556
```

### Attaching USB to wsl2

From 
https://learn.microsoft.com/en-us/windows/wsl/connect-usb
https://devblogs.microsoft.com/commandline/connecting-usb-devices-to-wsl/#how-it-works


Install USBIPD-WIN https://github.com/dorssel/usbipd-win/releases
 In powershell admin:
` usbipd list `

next bind the device to use it, you need admin and you need to use the bus id from the previous command
` usbipd bind --busid 4-4 `

Then attach the device
` usbipd attach --wsl --busid <busid> `

and open wsl and list the attached device with ` lsusb `

From powershell to detach with:
` usbipd detach --busid <busid> `