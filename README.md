# Real-time Collaborative Whiteboard

This project is a web-based real-time collaborative whiteboard application that allows users to draw on a canvas with various colors and brush sizes. It includes features like undo/redo actions and live cursor tracking.

## Features

- Real-time collaborative drawing
- Variable brush sizes and colors
- Undo and Redo drawing actions
- Authentication with Keycloak
- Responsive design for desktop and mobile devices

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.


### Installing

## Clone the repo:

git clone https://github.com/your-username/realtime-whiteboard.git

## Navigate to the project directory and install dependencies:
   
   cd realtime-whiteboard

   npm install

## Run the Keycloak server:

docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak

## Start the development server:

npm start


## Usage
After logging in through Keycloak, use the whiteboard on `http://localhost:3000`. Choose colors and brush sizes, and use the undo/redo buttons as needed.

## Contributing
Contributions are welcome. Please open an issue to discuss proposed changes.

## License
This project is open-sourced under the MIT License.

## UI Screenshot
![UI Screenshot](https://github.com/sushanthreddy009/realtime-whiteboard/blob/main/UI_image.jpg)

