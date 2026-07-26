//APi response
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

//User Data Type
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
};

//Api Response
const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Ram",
    email: "ram@gmail.com",
    password: "123456",
    phone: "1234567890",
  },
};
console.log("User Response:");
console.log(userResponse.data);
console.log(userResponse.success);

// Product Data Type
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  items: number;
};

// Product API Response
const productResponse: ApiResponse<Product> = {
  success: true,
  data: {
    id: 101,
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    items: 15,
  },
};

console.log("\nProduct Response:");
console.log(productResponse.data);
console.log(productResponse.success);
