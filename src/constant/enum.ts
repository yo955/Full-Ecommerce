export enum PageLinks {
  HOME = "/",
  CONTACT = "/contact",
  ABOUT = "/about",
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/[id]",
  SIGN_UP = "/SignUp",
  LOG_IN = "/login",
  DASHBOARD = "/dashboard",
}

// Examples
// Enum for Order Status
export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

// Enum for Payment Methods
export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  PAYPAL = "PAYPAL",
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
  BANK_TRANSFER = "BANK_TRANSFER",
}

// Enum for Product Categories
export enum ProductCategory {
  ELECTRONICS = "ELECTRONICS",
  CLOTHING = "CLOTHING",
  HOME_AND_KITCHEN = "HOME_AND_KITCHEN",
  BEAUTY = "BEAUTY",
  SPORTS = "SPORTS",
  BOOKS = "BOOKS",
  TOYS = "TOYS",
}

// Enum for User Roles
export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
  GUEST = "GUEST",
}

// Enum for Discount Types
export enum DiscountType {
  PERCENTAGE = "PERCENTAGE",
  FIXED_AMOUNT = "FIXED_AMOUNT",
}

// Enum for Shipping Methods
export enum ShippingMethod {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
  NEXT_DAY = "NEXT_DAY",
}

// Enum for Product Availability
export enum ProductAvailability {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  PRE_ORDER = "PRE_ORDER",
}

// Enum for Review Ratings
export enum ReviewRating {
  ONE_STAR = 1,
  TWO_STARS = 2,
  THREE_STARS = 3,
  FOUR_STARS = 4,
  FIVE_STARS = 5,
}
