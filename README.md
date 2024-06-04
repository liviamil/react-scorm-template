# React-SCORM Template

This template is designed for React apps to work with the SCORM wrapper, providing a flexible foundation for e-learning modules and/or games to be deployed on Learning Management Systems.

## How To Use

### `git clone` this repository into local

Edit the files under `src` and update the React app accordingly.

### `npm run build` and configure

Once done with edits, run the command to build the app for production, results are stored in the `build` folder.\
Under the `build` folder, run `index.html` with a live server to check if it's SCORM ready.\
\
**debug:** If website is empty, check the path for `<script>` in `index.html`. It should be `./static/...` instead of `/static/...`

### Check with SCORM Cloud

Compress the build folder into a zipped file and upload itu to [SCORM Cloud]([url](https://app.cloud.scorm.com/)) to test if it works.\
Create a trial account if you don't already have one.\
Once uploaded, launch the course.\
You are expected to see your name.\
<img width="1464" alt="Screenshot 2024-06-04 at 2 39 38 PM" src="https://github.com/liviamil/protect-your-device/assets/96341083/d7372ff4-6c33-49f2-8c03-cbea01b8fc08">

And a 100% Score.\
<img width="1129" alt="Screenshot 2024-06-04 at 2 40 09 PM" src="https://github.com/liviamil/protect-your-device/assets/96341083/db127c19-e0bd-4a9e-ac38-91ddb14398c8">


## References

To learn React, check out the [React documentation](https://reactjs.org/).\
This project references [create-react-scorm-app](https://github.com/simondate/create-react-scorm-app) from [@simondate](https://github.com/simondate)
