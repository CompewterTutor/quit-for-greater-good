# Quit for Greater Good

## Setup development environment
### WSL2 (Ubuntu 24 in my case)
```
cd ~
sudo apt install openjdk-17-jdk-headless gradle
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
curl https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip -o /tmp/cmd-tools.zip
mkdir -p android/cmdline-tools
unzip -q -d android/cmdline-tools /tmp/cmd-tools.zip
mv android/cmdline-tools/cmdline-tools android/cmdline-tools/latest
rm /tmp/cmd-tools.zip
export ANDROID_HOME=$HOME/android
export ANDROID_SDK_ROOT=${ANDROID_HOME}
export PATH=${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${PATH}
yes | sdkmanager --licenses
sudo apt install -y adb

```


#### sdkmanager
Currently I'm building on Android 15 - which is api version 35.
To install this through the commandline:
```
sdkmanager "
```

Installing the emulator
sdkmanager "emulator"
Extras you might want:
skiaparser;3

## About
Quit for greater good is a mobile and web application that helps users track their progress in quitting various substances, focusing on smoking to begin with but in the future, will also help with alcohol and drug dependencies as well. As a marker of their progress, the application will track the amount of money that the user has saved based on their normal usage before quitting, and offer the ability to donate a percentage of that savings to a charity of their choosing.

## Technology Stack
QFGG is created using Expo for the frontend and Rust for the backend. The database is postgresql.
## Usage
To create the server and database containers:
```
docker-compose up --build
```
## Troubleshooting


## Useful links for API
https://www.who.int/data/gho/data/indicators/indicator-details/GHO/gho-tobacco-control-raise-taxes-retail-price-for-a-pack-of-20-cigarettes

https://success-systems.com/success-systems-altria-api/

https://www.industrydocuments.ucsf.edu/tobacco/research-tools/api/

https://huggingface.co/datasets/pixparse/idl-wds

https://www.industrydocuments.ucsf.edu/wp-content/uploads/2020/08/IndustryDocumentsDataAPI_v7.pdf