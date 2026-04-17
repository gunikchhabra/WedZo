## Wedzo  
 A full-stack e-commerce platform focused on bridal fashion and local boutique discovery. A platform that connects Indian brides with boutiques across India, making wedding shopping easier and accessible.
 Built with Node.js, Express, MongoDB and deployed on Render

## 🔗 Live Demo  
https://wedzo-7wu8.onrender.com/

## Why Wedzo?

Bridal shopping in India often means going through crowded markets with hundreds of options, which can be overwhelming and time-consuming.  
At the same time, many local boutiques and small sellers don’t have an online presence, making it difficult for them to reach a wider audience.
Wedzo aims to simplify this by bringing multiple boutiques onto a single platform, allowing users to explore and shop easily from anywhere.

## Tech Stack  

- **Frontend:** EJS, Tailwind CSS, EJS-Mate  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (MongoDB Atlas)  
- **Authentication:** Passport.js, express-session, connect-mongo  
- **File Uploads:** Multer, Cloudinary  
- **Validation & Utilities:** Joi, connect-flash  
- **Tools:** Concurrently  
- **Architecture:** MVC (Model-View-Controller)  


## ✨ Features  

- User authentication (Sign up / Login)  
- Secure password handling using Passport.js  
- Role-based access (User / Shopkeeper)  
- Browse products from multiple boutiques  
- Add products to cart  
- Persistent cart linked to user account  
- Update quantity and manage cart items  
- Smooth checkout flow with address form  
- Cash on Delivery (COD) payment option  
- Place orders and store order details  
- Basic order management system  
- Shopkeeper panel to add and manage products  
- Protected routes using authentication middleware  
- RESTful APIs for products, cart, and orders  
- Server-side validation for secure data handling  
- Responsive and clean user interface  
- Deployed on Render  

---

## 📸 Screenshots  

### 🏠 Homepage  
![Homepage](./WedZo_SC/HomePage.png)

### 🛍️ Shop  
![Shop](./WedZo_SC/Shop.png)

### 🔐 Login  
![Login](./WedZo_SC/LoginPage.png)

### 📝 Signup  
![Signup](./WedZo_SC/SignUpPage.png)

### 🛒 Cart  
![Cart](./WedZo_SC/Cart.png)

### 📦 Orders  
![Orders](./WedZo_SC/Orders.png)

### 🧑‍💼 Shopkeeper Panel  
![Panel](./WedZo_SC/LoginPanel.png)

### ⭐ Reviews  
![Reviews](./WedZo_SC/Reviews.png)

### 💬 Support  
![Support](./WedZo_SC/Support.png)


## Run Locally 
 - Clone the Project
   ```bash
   git clone https://github.com/gunikchhabra/WedZo.git
   ```
   
 - Navigate to project directory
   ```bash
   cd WedZo
   ```
   
 - Setup environment variables
   - Create a .env file and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_KEY=your_api_key
     CLOUDINARY_SECRET=your_api_secret
     SESSION_SECRET=your_secret_key
     ```

   
 - Start the server
   ```bash
   node index.js
   ```

- Open in Browser  
  - Visit the application at: http://localhost:8080/
   


##  Future Improvements  

- Online payment integration (UPI / Cards)  
- Advanced filtering (price, category, location)    
- Order tracking system  
- Notifications for orders  
- Shopkeeper analytics dashboard  


##  Note  
 This project is actively being improved and new features are being added.


## Contact  

For feedback or suggestions, feel free to reach out.
📧 [Click here to email](mailto:chhabragunik21@gmail.com)
