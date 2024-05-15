### Events Registration Web Application

This is a web-based application for events registration. Users can view a paginated list of available events and register for them.

### link to working application:
### link : https://forevent.netlify.app/

### How to Run the Application

1. **Clone the Repository**: Clone the source code repository to your local machine using Git:

   ```
   git clone https://github.com/igorsadovsky1995/forEliftech.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies for both the server and client:

   ```
   cd forEliftech
   npm install
   cd client
   npm install
   ```

3. **Set Environment Variables**: Create a `.env` file in the root directory of the project and add the following environment variables:

   ```
   PORT=5000
   MONGO_URI='mongodb+srv://igorsadovsky1995:qwer1234@cluster0.zps5gfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   ```

4. **Run the Application**: Start the server and client concurrently using the following command:

   ```
   npm run dev
   ```

5. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the application.

### Technologies Used

- **Front-end**: React.js, React Router, Axios, Materialize CSS.
- **Back-end**: Express.js, MongoDB (Mongoose).

