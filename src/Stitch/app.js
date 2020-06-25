import { Stitch } from "mongodb-stitch-browser-sdk";

//Adding the userlist app id
const APP_ID = "myapp-sjzrw";

//Initialize the app client
const app = Stitch.hasAppClient(APP_ID)
    ? Stitch.getAppClient(APP_ID)
    : Stitch.initializeAppClient(APP_ID);

export { app };

