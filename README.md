# 🚗 **Car Management Application**  
Effortlessly manage your cars with an elegant, user-friendly web application.

![1](https://github.com/user-attachments/assets/913ea076-f8da-42db-9d68-3d646cb875da)
![2](https://github.com/user-attachments/assets/5cd6f36d-bc07-43cf-bcc1-4e8fdc6b818a)
![3](https://github.com/user-attachments/assets/8304565e-6633-42a0-b12d-53dbe5106344)

---

## 🌟 **Features**  

### 🔑 **Authentication**  
- **Secure Login & Registration**: Protect your data with user authentication.  
- **Session Management**: Stay logged in during active sessions.  

### 🚘 **Car Management**  
- **Add Cars**: Include titles, descriptions, tags, and up to 10 images.  
- **Edit & Update**: Modify existing car details with ease.  
- **Delete**: Remove cars no longer needed.  
- **Search**: Quickly find cars by title, description, or tags.

### 🌐 **Responsive Design**  
- Optimized for desktop, tablet, and mobile devices.

---

## 🚀 **Technologies Used**  

### **Frontend**  
- [React.js](https://reactjs.org/) - User Interface.  
- [React Router](https://reactrouter.com/) - Navigation and routing.  
- [Axios](https://axios-http.com/) - API communication.  
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling.

### **Backend**  
- [Node.js](https://nodejs.org/) - Server-side runtime.  
- [Express.js](https://expressjs.com/) - Backend framework.  
- [MongoDB](https://www.mongodb.com/) - Database for persistent storage.  
- [Mongoose](https://mongoosejs.com/) - ODM for MongoDB.

### **Additional Libraries**  
- [Nodemon](https://nodemon.io/) - Development utility.  
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management.  

---

## 📂 **Folder Structure**  

```
/ (root)
├── server.js          # Main backend server file
├── routes/            # API routes (users, cars)
├── models/            # Database models (User, Car)
├── middleware/        # Authentication middleware
├── config/            # Database connection logic
├── client/            # Frontend React app
│   ├── components/    # Reusable components (Navigation, CarCard)
│   ├── pages/         # Pages (Home, Login, AddCar, EditCar, CarDetails)
│   ├── context/       # Authentication context
│   ├── services/      # API utilities (Axios)
│   ├── utils/         # Helper functions
│   ├── App.js         # Main React component
│   ├── index.js       # React entry point
│   └── index.css      # Global styles
└── .env               # Environment variables (not included in version control)
```

---

## 🔧 **Setup Instructions**  

### **1. Clone the Repository**  
```bash
git clone <repository-url>
cd car-management-app
```

### **2. Install Dependencies**  

#### Backend:  
```bash
npm install
```

#### Frontend:  
Navigate to the frontend directory:  
```bash
cd client
npm install
```

### **3. Environment Variables**  
Create a `.env` file in the root directory and add:  
```plaintext
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
JWT_SECRET=your_jwt_secret
PORT=5000
```

### **4. Run the Application**  

#### Backend Only:  
```bash
npm run dev
```

#### Frontend Only:  
Navigate to the `client` folder:  
```bash
npm start
```

#### Run Both Simultaneously:  
If `concurrently` is configured:  
```bash
npm run dev
```

---

## 🌐 **Access the App**  

- Backend: [http://localhost:5000](http://localhost:5000)  
- Frontend: [http://localhost:3000](http://localhost:3000)

---

## 📖 **API Endpoints**  

### **Authentication**  
| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login an existing user |

### **Cars**  
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| GET    | `/api/cars`            | Fetch all cars of the user      |
| POST   | `/api/cars`            | Add a new car                   |
| GET    | `/api/cars/:id`        | Fetch details of a specific car |
| PUT    | `/api/cars/:id`        | Update details of a specific car |
| DELETE | `/api/cars/:id`        | Delete a specific car           |

---

## 🎯 **Future Enhancements**  
- **Role-based Access Control**: Admin vs Regular User.  
- **Car Pagination**: Efficiently handle large datasets.  
- **Image Uploads**: Integrate with AWS S3 or Cloudinary.  
- **Improved Search**: Add fuzzy search capabilities.  

---

## 🛠️ **Contributing**  
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m 'Add feature-name'`.  
4. Push to the branch: `git push origin feature-name`.  
5. Submit a pull request.

---

### 👨‍💻 **Developed By**  
Rishit Singh Rana | [GitHub](https://github.com/rishxtt) | [LinkedIn](https://www.linkedin.com/in/rishit-singh-rana-892494233/)

---
